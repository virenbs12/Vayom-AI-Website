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

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid work email.",
  }),
  company: z.string().min(2, {
    message: "Company name is required.",
  }),
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
      email: "",
      company: "",
      question: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request received",
      description: "We'll be in touch shortly to schedule your demo.",
    });
    form.reset();
  }

  return (
    <section className="bg-slate-50 py-24 border-t border-border" id="contact">
      <div className="container-width max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Scope a workflow and see it live</h2>
          <p className="text-muted-foreground">Get a scoped workflow in 6-12 weeks. Start by telling us what you need.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Email</FormLabel>
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
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Company Name" {...field} />
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
                    <FormLabel>Primary System</FormLabel>
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
                    <FormLabel>What do you want to answer?</FormLabel>
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
                  Request a workflow demo
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  Or email us at <a href="mailto:sales@vayomai.com" className="text-primary hover:underline">sales@vayomai.com</a>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
