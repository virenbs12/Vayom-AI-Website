import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email({
    message: "Please enter a valid work email.",
  }),
  company: z.string().min(2, {
    message: "Company name is required.",
  }),
  website: z.string().min(1, "Company website is required.").refine((val) => {
    try {
      const url = val.startsWith('http') ? val : `https://${val}`;
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }, "Enter a valid website URL."),
  numUsers: z.coerce.number().int().min(1, "Enter a valid number of users."),
  system: z.string({
    required_error: "Please select a primary system.",
  }),
  question: z.string().min(5, {
    message: "Please tell us what you want to answer.",
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      website: "",
      numUsers: 0,
      question: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Request received",
          description: "We'll be in touch shortly to schedule your demo.",
        });
        form.reset();
      } else {
        toast({
          title: "Submission failed",
          description: data.message || "Please try again or email us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Connection error",
        description: "Please try again or email us at sales@vayomai.com",
        variant: "destructive",
      });
    }
  }

  return (
    <section className="bg-slate-50 py-24 border-t border-border" id="contact">
      <div className="container-width max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Request a Demo</h2>
          <p className="text-muted-foreground">Get a scoped workflow in 6-12 weeks. Start by telling us what you need.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
          <TooltipProvider>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1.5">
                        Full Name <span className="text-destructive">*</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>Your full legal or professional name.</TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1.5">
                        Work Email <span className="text-destructive">*</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>We recommend using your official company email.</TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="name@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1.5">
                        Company <span className="text-destructive">*</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>The organization you are representing.</TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1.5">
                        Company Website <span className="text-destructive">*</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>URL of your company's official website.</TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="www.company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="numUsers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1.5">
                        Number of Users <span className="text-destructive">*</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>Estimated number of people who will use the system.</TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Estimated user count" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="system"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1.5">
                        Primary System <span className="text-destructive">*</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>The main software environment RIAA will link to.</TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your primary system" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          <SelectItem value="erp">ERP (Netsuite, Xero)</SelectItem>
                          <SelectItem value="crm">CRM (Salesforce, Zoho)</SelectItem>
                          <SelectItem value="interaction">Customer Interaction (Facebook, WhatsApp)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1.5">
                        What do you want to answer? <span className="text-destructive">*</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>Describe the specific business question or pain point.</TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g. Which customers are billed on outdated pricing?" 
                          className="resize-none min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4 flex flex-col gap-3">
                  <Button type="submit" size="lg" className="w-full text-lg h-12">
                    Request a Demo
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Or email us at <a href="mailto:sales@vayomai.com" className="text-primary hover:underline">sales@vayomai.com</a>
                  </div>
                </div>
              </form>
            </Form>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
