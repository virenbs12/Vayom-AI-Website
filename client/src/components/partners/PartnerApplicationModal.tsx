import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Lock, X, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const PUBLIC_EMAIL_PROVIDERS = [
  "gmail.com", "googlemail.com", "yahoo.com", "ymail.com", "hotmail.com", "outlook.com", "live.com", "msn.com",
  "aol.com", "icloud.com", "me.com", "mac.com", "proton.me", "protonmail.com", "tutanota.com", "tutanota.de",
  "gmx.com", "gmx.net", "yandex.com", "yandex.ru", "mail.com", "fastmail.com", "zoho.com", "zohomail.com"
];

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  title: z.string().min(1, "Title / role is required."),
  email: z.string().email("Invalid email format.").refine((email) => {
    const domain = email.split("@")[1];
    return !PUBLIC_EMAIL_PROVIDERS.includes(domain?.toLowerCase());
  }, "Please enter a company email address (public email providers are not accepted)."),
  phone: z.string().optional(),
  companyName: z.string().min(1, "Company name is required."),
  website: z.string().min(1, "Company website is required.").transform((val) => {
    if (!val.startsWith("http://") && !val.startsWith("https://")) {
      return `https://${val}`;
    }
    return val;
  }),
  hqCountry: z.string().min(1, "Headquarters country is required."),
  regions: z.array(z.string()).min(1, "Select at least one region."),
  otherRegion: z.string().optional(),
  companySize: z.string().min(1, "Company size is required."),
  partnerType: z.string().min(1, "Partner type is required."),
  partnerTypeOther: z.string().optional(),
  engagementModel: z.array(z.string()).min(1, "Select at least one engagement model."),
  verticalFocus: z.string().min(1, "Vertical focus is required."),
  verticalFocusOther: z.string().optional(),
  clientProjects: z.string().optional().refine((val) => !val || /^\d+$/.test(val), "Must be a whole number."),
  preferredDeployment: z.array(z.string()).min(1, "Select at least one deployment option."),
  cloudEnvironments: z.array(z.string()).min(1, "Select at least one cloud environment."),
  cloudEnvironmentsOther: z.string().optional(),
  systems: z.array(z.string()).min(1, "Select at least one system."),
  systemsOther: z.string().optional(),
  outcomes: z.array(z.string()).min(1, "Select at least one outcome."),
  outcomesOther: z.string().optional(),
  implementationApproach: z.string().min(1, "Implementation approach is required."),
  practiceNotes: z.string().min(40, "Minimum 40 characters required."),
  additionalNotes: z.string().optional(),
}).refine((data) => {
  if (data.regions.includes("Other") && !data.otherRegion) return false;
  if (data.partnerType === "Other" && !data.partnerTypeOther) return false;
  if (data.verticalFocus === "Other" && !data.verticalFocusOther) return false;
  if (data.cloudEnvironments.includes("Other") && !data.cloudEnvironmentsOther) return false;
  if (data.systems.includes("Other") && !data.systemsOther) return false;
  if (data.outcomes.includes("Other") && !data.outcomesOther) return false;
  return true;
}, {
  message: "Please specify the 'Other' field.",
  path: ["otherRegion"],
});

interface PartnerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PartnerApplicationModal({ open, onOpenChange }: PartnerModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      regions: [],
      engagementModel: [],
      preferredDeployment: [],
      cloudEnvironments: [],
      systems: [],
      outcomes: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Partner Application Data:", {
      ...values,
      sourcePage: "/partners",
      timestamp: new Date().toISOString(),
      formVersion: "partner_v1"
    });
    
    setIsSubmitting(false);
    onOpenChange(false);
    form.reset();
    toast({
      title: "Received.",
      description: "We will respond within 24 business hours.",
    });
  };

  const handleCancelClick = () => {
    if (form.getValues("fullName") || form.getValues("email")) {
      setShowCancelDialog(true);
    } else {
      onOpenChange(false);
    }
  };

  const InfoIcon = ({ tooltip }: { tooltip: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-help ml-1">
            <Info className="w-3 h-3 text-muted-foreground inline-block" />
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-[200px] text-xs">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <>
      <Dialog open={open} onOpenChange={(val) => !val && handleCancelClick()}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden flex flex-col bg-white">
          <DialogHeader className="p-6 border-b shrink-0 bg-white">
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-2xl font-display font-bold">Partner application</DialogTitle>
                <DialogDescription className="mt-1">
                  Share a few details so we can route you to the right partner path and schedule a briefing.
                </DialogDescription>
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground mt-2 uppercase tracking-widest font-bold">
                  <Lock className="w-3 h-3" /> Used only for partner onboarding.
                </div>
              </div>
            </div>
          </DialogHeader>

          <ScrollArea className="flex-1 p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* SECTION A: CONTACT */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b pb-2">A) Contact</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name * <InfoIcon tooltip="Primary point of contact for partner onboarding and scheduling." /></FormLabel>
                          <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title / role * <InfoIcon tooltip="Helps us route you to the right partner program and technical track." /></FormLabel>
                          <FormControl><Input placeholder="VP of Operations" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work email * <InfoIcon tooltip="Use your company email so we can validate your domain and set up partner communications." /></FormLabel>
                          <FormControl><Input placeholder="name@company.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone <InfoIcon tooltip="Optional. Useful for faster scheduling across time zones." /></FormLabel>
                          <FormControl><Input placeholder="+1 (555) 000-0000" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* SECTION B: COMPANY */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b pb-2">B) Company</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company name * <InfoIcon tooltip="Used to create your partner record and route internal review." /></FormLabel>
                          <FormControl><Input placeholder="Company Inc" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company website * <InfoIcon tooltip="Used to validate your organization and understand your service offerings." /></FormLabel>
                          <FormControl><Input placeholder="www.company.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="hqCountry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Headquarters country * <InfoIcon tooltip="Used to route you to the right regional partner contact." /></FormLabel>
                          <FormControl><Input placeholder="United States" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company size * <InfoIcon tooltip="Helps us align enablement and support expectations." /></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem value="1-50">1–50</SelectItem>
                              <SelectItem value="51-200">51–200</SelectItem>
                              <SelectItem value="201-1000">201–1,000</SelectItem>
                              <SelectItem value="1001-5000">1,001–5,000</SelectItem>
                              <SelectItem value="5001+">5,001+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="regions"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel>Regions you serve * <InfoIcon tooltip="Select all regions where you actively sell or deliver services." /></FormLabel>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {["North America", "Europe", "Middle East", "India", "APAC", "Latin America", "Other"].map((region) => (
                                <FormField
                                  key={region}
                                  control={form.control}
                                  name="regions"
                                  render={({ field }) => (
                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(region)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, region])
                                              : field.onChange(field.value?.filter((value) => value !== region));
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="text-sm font-normal">{region}</FormLabel>
                                    </FormItem>
                                  )}
                                />
                              ))}
                            </div>
                            {form.watch("regions")?.includes("Other") && (
                              <FormField
                                control={form.control}
                                name="otherRegion"
                                render={({ field }) => (
                                  <div className="mt-4">
                                    <Input placeholder="Please specify regions" {...field} />
                                  </div>
                                )}
                              />
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION C: PARTNER MODEL */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b pb-2">C) Partner model and scope</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="partnerType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Partner type * <InfoIcon tooltip="Select the category that best matches how you engage with clients." /></FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                              {["Advisory/Consulting", "System Integrator", "BPO/Managed Services", "Technology Partner", "Other"].map((type) => (
                                <FormItem key={type} className="flex items-center space-x-3 space-y-0">
                                  <FormControl><RadioGroupItem value={type} /></FormControl>
                                  <FormLabel className="font-normal">{type}</FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          {form.watch("partnerType") === "Other" && (
                            <FormField
                              control={form.control}
                              name="partnerTypeOther"
                              render={({ field }) => (
                                <div className="mt-2">
                                  <Input placeholder="Specify partner type" {...field} />
                                </div>
                              )}
                            />
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="verticalFocus"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Primary vertical focus * <InfoIcon tooltip="Helps us align starter workflows and demo scenarios." /></FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                              {["B2B", "B2C", "Both", "Other"].map((vertical) => (
                                <FormItem key={vertical} className="flex items-center space-x-3 space-y-0">
                                  <FormControl><RadioGroupItem value={vertical} /></FormControl>
                                  <FormLabel className="font-normal">{vertical}</FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          {form.watch("verticalFocus") === "Other" && (
                            <FormField
                              control={form.control}
                              name="verticalFocusOther"
                              render={({ field }) => (
                                <div className="mt-2">
                                  <Input placeholder="Specify vertical" {...field} />
                                </div>
                              )}
                            />
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="engagementModel"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Engagement model * <InfoIcon tooltip="Select how you want to go to market with Vayom AI." /></FormLabel>
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {["Referral", "Co-sell", "Delivery partner", "White-label interest"].map((model) => (
                              <FormField
                                key={model}
                                control={form.control}
                                name="engagementModel"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(model)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, model])
                                            : field.onChange(field.value?.filter((value) => value !== model));
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">{model}</FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="clientProjects"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated number of client projects per year <InfoIcon tooltip="Helps us plan enablement and partner capacity." /></FormLabel>
                          <FormControl><Input type="number" placeholder="e.g. 5" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* SECTION D: DELIVERY */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b pb-2">D) Delivery and capabilities</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="preferredDeployment"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Preferred deployment for clients * <InfoIcon tooltip="Select what your clients typically require. VPC is common for tighter control environments." /></FormLabel>
                          </div>
                          <div className="flex gap-4">
                            {["SaaS", "VPC", "Both", "Not sure"].map((opt) => (
                              <FormField
                                key={opt}
                                control={form.control}
                                name="preferredDeployment"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(opt)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, opt])
                                            : field.onChange(field.value?.filter((value) => value !== opt));
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">{opt}</FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="implementationApproach"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Implementation approach * <InfoIcon tooltip="Helps define responsibilities, timelines, and partner enablement." /></FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                              {[
                                "We implement", 
                                "We co-implement with client", 
                                "Client implements with our guidance"
                              ].map((approach) => (
                                <FormItem key={approach} className="flex items-center space-x-3 space-y-0">
                                  <FormControl><RadioGroupItem value={approach} /></FormControl>
                                  <FormLabel className="font-normal">{approach}</FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="systems"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Systems you frequently work with * <InfoIcon tooltip="Select the platforms you commonly integrate or operate for clients." /></FormLabel>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {["NetSuite", "Salesforce", "SAP", "Oracle", "Snowflake", "Databricks", "Microsoft Dynamics", "HubSpot", "Other"].map((sys) => (
                              <FormField
                                key={sys}
                                control={form.control}
                                name="systems"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(sys)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, sys])
                                            : field.onChange(field.value?.filter((value) => value !== sys));
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">{sys}</FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          {form.watch("systems")?.includes("Other") && (
                            <div className="mt-4"><Input placeholder="Specify other systems" {...form.register("systemsOther")} /></div>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="outcomes"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>What outcomes do you want to deliver first? * <InfoIcon tooltip="Pick the workflows you want to lead with so we can tailor the briefing and partner materials." /></FormLabel>
                          </div>
                          <div className="grid md:grid-cols-2 gap-2">
                            {[
                              "Contract-to-invoice alignment",
                              "Discount governance",
                              "Transaction deduplication",
                              "Transaction validation",
                              "Deductions and claims readiness",
                              "Promo integrity (B2C)",
                              "Returns/refunds leakage (B2C)",
                              "Subscription billing hygiene (B2C)",
                              "Other"
                            ].map((outcome) => (
                              <FormField
                                key={outcome}
                                control={form.control}
                                name="outcomes"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(outcome)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, outcome])
                                            : field.onChange(field.value?.filter((value) => value !== outcome));
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-xs font-normal">{outcome}</FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          {form.watch("outcomes")?.includes("Other") && (
                            <div className="mt-4"><Input placeholder="Specify other outcomes" {...form.register("outcomesOther")} /></div>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* SECTION E: NOTES */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary border-b pb-2">E) Notes</h3>
                  <FormField
                    control={form.control}
                    name="practiceNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your practice and why you want to partner * <InfoIcon tooltip="Include your target clients, typical engagement size, and what you want to build together." /></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What you sell, how you deliver, and where you see the best fit with Vayom AI." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Anything else we should know? <InfoIcon tooltip="Optional. Add context such as certifications or ecosystem partnerships." /></FormLabel>
                        <FormControl>
                          <Textarea placeholder="Optional context..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </ScrollArea>

          <DialogFooter className="p-6 border-t bg-slate-50 shrink-0 gap-3">
            <Button variant="ghost" onClick={handleCancelClick}>Cancel</Button>
            <Button 
              disabled={isSubmitting || !form.formState.isValid} 
              onClick={form.handleSubmit(onSubmit)}
              className="min-w-[180px]"
            >
              {isSubmitting ? "Submitting..." : "Submit application"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Discard this application?</AlertDialogTitle>
            <AlertDialogDescription>
              Your entered information will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Go back</AlertDialogCancel>
            <AlertDialogAction onClick={() => {
              setShowCancelDialog(false);
              onOpenChange(false);
              form.reset();
            }}>Discard</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
