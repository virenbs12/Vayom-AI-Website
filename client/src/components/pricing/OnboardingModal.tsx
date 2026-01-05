import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Lock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const blocklist = [
  "gmail.com", "googlemail.com", "yahoo.com", "ymail.com", "hotmail.com", 
  "outlook.com", "live.com", "msn.com", "aol.com", "icloud.com", "me.com", 
  "mac.com", "proton.me", "protonmail.com", "tutanota.com", "tutanota.de",
  "gmx.com", "gmx.net", "zoho.com", "zohomail.com", "yandex.com", "yandex.ru",
  "mail.com", "fastmail.com"
];

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email format").refine((email) => {
    const domain = email.split("@")[1];
    return domain && !blocklist.includes(domain.toLowerCase());
  }, "Please enter a company email address (public email providers are not accepted)"),
  companyName: z.string().min(1, "Company name is required"),
  website: z.string().transform((val) => {
    if (!val.startsWith("http://") && !val.startsWith("https://")) {
      return `https://${val}`;
    }
    return val;
  }).pipe(z.string().url("Enter a valid company website")),
  estimatedUsers: z.coerce.number().int().min(1, "Enter a valid number of users").max(100000, "Enter a valid number of users"),
  departments: z.array(z.string()).min(1, "Select at least one department"),
  otherDepartment: z.string().optional(),
  cloudProviders: z.array(z.string()).min(1, "Select at least one checkbox"),
  otherCloud: z.string().optional(),
  dataLake: z.enum(["Yes", "No", "Not sure"], { required_error: "Must be selected" }),
  dataWarehouse: z.enum(["Yes", "No", "Not sure"], { required_error: "Must be selected" }),
  vertical: z.enum(["B2B", "B2C", "Other"], { required_error: "Must be selected" }),
  otherVertical: z.string().optional(),
  systemsDescription: z.string().min(20, "Please add a short description of your current systems"),
}).refine((data) => {
  if (data.departments.includes("Others") && !data.otherDepartment) return false;
  if (data.cloudProviders.includes("Other") && !data.otherCloud) return false;
  if (data.vertical === "Other" && !data.otherVertical) return false;
  return true;
}, {
  message: "Required field missing",
  path: ["otherDepartment"],
});

interface OnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan: string;
  country: string;
}

export function OnboardingModal({ open, onOpenChange, selectedPlan, country }: OnboardingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDiscardDialog, setShowDiscardDialog] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      website: "",
      departments: [],
      cloudProviders: [],
      systemsDescription: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/pricing/choose-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          selectedPlan,
          country,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit");
      }

      toast.success("Received. Someone will contact you within 24 business hours.");
      onOpenChange(false);
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (form.formState.isDirty) {
      setShowDiscardDialog(true);
    } else {
      onOpenChange(false);
    }
  };

  const departments = ["Sales", "Marketing", "Market Access", "Commercial Ops", "FP&A", "Business Analytics", "Others"];
  const clouds = ["AWS", "Azure", "GCP", "Other"];

  const RequiredAsterisk = () => <span className="text-destructive ml-0.5">*</span>;

  return (
    <>
      <Dialog open={open} onOpenChange={(val) => !val && handleCancel()}>
        <DialogContent className="max-w-[760px] max-h-[90vh] overflow-y-auto p-0 gap-0">
          <div className="p-6 border-b sticky top-0 bg-background z-10">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display font-bold">Request plan onboarding</DialogTitle>
              <DialogDescription className="text-base mt-2">
                Share a few details so we can recommend the right deployment and onboarding plan.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground bg-muted/30 p-2 rounded-lg">
              <Lock className="w-3 h-3" />
              <span>Used only for onboarding.</span>
              <span className="mx-2">•</span>
              <span className="font-semibold text-foreground">Plan: {selectedPlan} • Country: {country}</span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Section */}
                <div className="space-y-6">
                  <div className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Contact</div>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Full Name <RequiredAsterisk />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>Used to personalize onboarding communications.</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Work Email <RequiredAsterisk />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>Use your company email so we can validate your domain and route deployment details.</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl><Input type="email" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Company Name <RequiredAsterisk />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>Used for your onboarding record and setup plan.</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Company Website <RequiredAsterisk />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>Used to confirm your organization and tailor the first workflow demo.</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Teams Section */}
                <div className="space-y-6">
                  <div className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Teams</div>
                  <FormField
                    control={form.control}
                    name="estimatedUsers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Estimated Users <RequiredAsterisk />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>Helps us size onboarding, roles, and support for your rollout.</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="departments"
                    render={() => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Departments <RequiredAsterisk />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>Select every team that will use Vayom AI.</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {departments.map((dept) => (
                            <FormField
                              key={dept}
                              control={form.control}
                              name="departments"
                              render={({ field }) => (
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(dept)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, dept])
                                          : field.onChange(field.value?.filter((v) => v !== dept));
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-xs font-normal">{dept}</FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        {form.watch("departments")?.includes("Others") && (
                          <FormField
                            control={form.control}
                            name="otherDepartment"
                            render={({ field }) => (
                              <FormItem className="mt-2">
                                <FormLabel className="text-xs">Specify others <RequiredAsterisk /></FormLabel>
                                <FormControl><Input placeholder="Specify others..." {...field} /></FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-4 border-t">
                {/* Environment */}
                <div className="space-y-6">
                  <div className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Environment</div>
                  <FormField
                    control={form.control}
                    name="cloudProviders"
                    render={() => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Cloud Providers <RequiredAsterisk />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>Select all clouds where relevant systems exist.</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <div className="flex flex-wrap gap-4 mt-2">
                          {clouds.map((cloud) => (
                            <FormField
                              key={cloud}
                              control={form.control}
                              name="cloudProviders"
                              render={({ field }) => (
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(cloud)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, cloud])
                                          : field.onChange(field.value?.filter((v) => v !== cloud));
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-xs font-normal">{cloud}</FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        {form.watch("cloudProviders")?.includes("Other") && (
                          <FormField
                            control={form.control}
                            name="otherCloud"
                            render={({ field }) => (
                              <FormItem className="mt-2">
                                <FormLabel className="text-xs">Specify other clouds <RequiredAsterisk /></FormLabel>
                                <FormControl><Input placeholder="Specify other clouds..." {...field} /></FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Data Foundation */}
                <div className="space-y-6">
                  <div className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Data Foundation</div>
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="dataLake"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="flex items-center gap-1">
                            Data Lake? <RequiredAsterisk />
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>Typically raw or semi-structured storage.</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                              {["Yes", "No", "Not sure"].map((opt) => (
                                <div key={opt} className="flex items-center space-x-1">
                                  <RadioGroupItem value={opt} id={`lake-${opt}`} />
                                  <FormLabel htmlFor={`lake-${opt}`} className="text-xs font-normal">{opt}</FormLabel>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dataWarehouse"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="flex items-center gap-1">
                            Data Warehouse? <RequiredAsterisk />
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>Typically curated, modeled data used for analytics.</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                              {["Yes", "No", "Not sure"].map((opt) => (
                                <div key={opt} className="flex items-center space-x-1">
                                  <RadioGroupItem value={opt} id={`warehouse-${opt}`} />
                                  <FormLabel htmlFor={`warehouse-${opt}`} className="text-xs font-normal">{opt}</FormLabel>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t">
                <div className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Context & Systems</div>
                <FormField
                  control={form.control}
                  name="vertical"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="flex items-center gap-1">
                        Vertical <RequiredAsterisk />
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>Helps us prioritize relevant workflows.</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-6">
                          {["B2B", "B2C", "Other"].map((opt) => (
                            <div key={opt} className="flex items-center space-x-2">
                              <RadioGroupItem value={opt} id={`vert-${opt}`} />
                              <FormLabel htmlFor={`vert-${opt}`} className="text-sm font-normal">{opt}</FormLabel>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      {form.watch("vertical") === "Other" && (
                        <FormField
                          control={form.control}
                          name="otherVertical"
                          render={({ field }) => (
                            <FormItem className="mt-2">
                              <FormLabel className="text-xs">Specify industry <RequiredAsterisk /></FormLabel>
                              <FormControl><Input placeholder="Specify industry..." {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="systemsDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1">
                        Describe your current systems <RequiredAsterisk />
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>List the systems you want connected (ERP, CRM, etc).</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="ERP: NetSuite. CRM: Salesforce. Contracts: SharePoint. Reporting: Power BI. Data: Snowflake." 
                          className="min-h-[100px] resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end gap-3 pt-6 sticky bottom-0 bg-background pb-2 mt-4">
                <Button type="button" variant="outline" onClick={handleCancel}>Cancel</Button>
                <Button type="submit" disabled={isSubmitting || !form.formState.isValid}>
                  {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...</> : "Submit Request"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={showDiscardDialog} onOpenChange={setShowDiscardDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Discard this request?</DialogTitle>
            <DialogDescription>Your entered information will be lost.</DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={() => setShowDiscardDialog(false)}>Go back</Button>
            <Button variant="destructive" onClick={() => {
              setShowDiscardDialog(false);
              onOpenChange(false);
              form.reset();
            }}>Discard</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
