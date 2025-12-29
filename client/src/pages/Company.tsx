import React, { useState, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
import { useToast } from "@/hooks/use-toast";
import {
  Database,
  FileText,
  Zap,
  ArrowRight,
  CheckCircle,
  MapPin,
  Calendar,
  Cloud,
  Layers,
  Target,
  Upload,
  X,
  Loader2,
  Building2,
  Users,
  LayoutDashboard,
  Info,
} from "lucide-react";

const PUBLIC_EMAIL_PROVIDERS = [
  "gmail.com", "googlemail.com", "yahoo.com", "ymail.com", "hotmail.com", "outlook.com", "live.com", "msn.com",
  "aol.com", "icloud.com", "me.com", "mac.com", "proton.me", "protonmail.com", "tutanota.com", "tutanota.de",
  "gmx.com", "gmx.net", "yandex.com", "yandex.ru", "mail.com", "fastmail.com", "zoho.com", "zohomail.com"
];

export default function Company() {
  const [location] = useLocation();
  const { toast } = useToast();

  // Careers form state
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [emailError, setEmailError] = useState("");

  const scrollToContact = () => {
    if (location === '/') {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const validateEmail = (email: string) => {
    const domain = email.split("@")[1];
    if (PUBLIC_EMAIL_PROVIDERS.includes(domain?.toLowerCase())) {
      setEmailError("Please use a company email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && isValidFile(file)) {
      setResumeFile(file);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && isValidFile(file)) {
      setResumeFile(file);
    }
  };

  const isValidFile = (file: File) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOC, or DOCX file.",
        variant: "destructive",
      });
      return false;
    }
    
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Maximum file size is 10 MB.",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleCancelClick = () => {
    if (fullName || workEmail || resumeFile) {
      setShowCancelDialog(true);
    } else {
      resetForm();
    }
  };

  const resetForm = () => {
    setFullName("");
    setWorkEmail("");
    setUserLocation("");
    setResumeFile(null);
    setEmailError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !workEmail || !userLocation || !resumeFile) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(workEmail)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("workEmail", workEmail);
      formData.append("location", userLocation);
      formData.append("resume", resumeFile);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Received",
          description: "If a suitable opening is found, someone from HR will reach out.",
        });
        resetForm();
      } else {
        toast({
          title: "Submission failed",
          description: data.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Connection error",
        description: "Please try again or email careers@vayomai.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7] text-foreground">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 border-b border-border bg-white">
          <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] text-primary">
                Company
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Built to help teams validate the truth across their sources and act with confidence.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 text-lg h-12"
                  onClick={scrollToContact}
                >
                  Request a Demo
                </Button>
                <Link href="/markets">
                  <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-12 border-2">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Headquartered in Edison, New Jersey. Founded in 2025.
              </p>
            </div>

            {/* How It Works Strip */}
            <div className="relative p-8 bg-slate-50 rounded-3xl border border-border shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 text-center p-4 bg-white rounded-xl border border-border">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Inputs</div>
                  <div className="flex justify-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="text-[9px] text-muted-foreground">Systems, Documents, Feeds</div>
                </div>

                <ArrowRight className="w-6 h-6 text-slate-300 shrink-0" />

                <div className="flex-1 text-center p-4 bg-primary rounded-xl text-white">
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-70 mb-2">Engine</div>
                  <div className="font-bold text-lg">RIAA</div>
                  <div className="text-[9px] opacity-80">Intelligence Layer</div>
                </div>

                <ArrowRight className="w-6 h-6 text-slate-300 shrink-0" />

                <div className="flex-1 text-center p-4 bg-white rounded-xl border border-border">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Outputs</div>
                  <div className="space-y-1 text-[9px] text-left px-2">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Evidence links</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Owner</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Next step</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 container-width">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-display font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vayom AI exists to remove two barriers that slow down good decisions: long implementations and enterprise-only cost structures. We help teams verify what is true across their environment and move faster, because every output is tied back to its source.
            </p>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-24 bg-white border-y border-border">
          <div className="container-width space-y-12">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-4xl font-display font-bold">RIAA Is the Solution Behind Vayom AI</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RIAA (Revenue Intelligence Agentic Atlas) brings structured systems, document repositories, and ongoing feeds into one working view, then produces outputs that are easy to review and easy to execute. It is built for operational use, where teams need proof, ownership, and follow-through.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RIAA supports cross-functional execution by linking results back to the exact record or excerpt used and presenting issues in a resolution-ready format.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Source-linked outputs that teams can verify quickly",
                  icon: LayoutDashboard,
                  snippet: "Evidence chips showing ERP, PDF, Feed sources"
                },
                {
                  title: "Issue queues with owners, status, and next actions",
                  icon: Users,
                  snippet: "Issue list with assignees and status tags"
                },
                {
                  title: "Flexible delivery as SaaS or inside a customer VPC",
                  icon: Cloud,
                  snippet: "Deployment toggle: SaaS / VPC"
                },
              ].map((card, i) => (
                <Card key={i} className="border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-medium">{card.title}</p>
                    <div className="p-3 bg-slate-50 rounded-lg border border-border">
                      <div className="text-[10px] text-muted-foreground">{card.snippet}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-24 container-width">
          <div className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl font-display font-bold">Deliver One Workflow First, Then Expand with Confidence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We start with a focused workflow, connect the relevant sources, train RIAA on your data patterns, and deliver a validated output pack your team can run immediately. From there, we expand coverage through steady refinement cycles.
              </p>
            </div>

            <div className="flex items-center justify-between relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200 -z-10" />
              {[
                { step: "1", title: "Scope" },
                { step: "2", title: "Connect" },
                { step: "3", title: "Train" },
                { step: "4", title: "Launch" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <span className="text-sm font-bold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Snapshot Section */}
        <section className="py-24 bg-slate-50 border-y border-border">
          <div className="container-width">
            <h2 className="text-4xl font-display font-bold mb-12">Company Snapshot</h2>
            <div className="bg-white rounded-2xl border border-border p-8 max-w-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: MapPin, label: "Headquarters", value: "Edison, New Jersey, USA" },
                  { icon: Calendar, label: "Founded", value: "2025" },
                  { icon: Cloud, label: "Delivery", value: "SaaS or customer VPC" },
                  { icon: Layers, label: "Core solution", value: "RIAA (Revenue Intelligence Agentic Atlas)" },
                  { icon: Target, label: "Typical rollout", value: "One workflow, then expand" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.label}</div>
                      <div className="text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Ecosystems Section */}
        <section className="py-24 container-width">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">Partner Ecosystems</h2>
              <p className="text-lg text-muted-foreground">
                Vayom AI partners with leading ecosystems to align with enterprise deployment and integration expectations.
              </p>
            </div>

            <TooltipProvider>
              <div className="flex flex-wrap items-center justify-center gap-8 py-8">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="px-8 py-4 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow cursor-default">
                      <div className="text-center">
                        <div className="font-bold text-lg">Salesforce</div>
                        <div className="text-xs text-muted-foreground">Partner</div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    Supports Salesforce-led workflows and account context.
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="px-8 py-4 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow cursor-default">
                      <div className="text-center">
                        <div className="font-bold text-lg">Azure ISV</div>
                        <div className="text-xs text-muted-foreground">Partner</div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    Aligns with Azure enterprise deployment patterns.
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="px-8 py-4 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow cursor-default">
                      <div className="text-center">
                        <div className="font-bold text-lg">AWS ISV</div>
                        <div className="text-xs text-muted-foreground">Partner</div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    Aligns with AWS enterprise deployment patterns.
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="py-24 bg-white border-y border-border">
          <div className="container-width">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-display font-bold">Careers</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are building a team that ships practical solutions and takes pride in operational quality. If you want to work on real problems with clear ownership and fast learning cycles, we would like to hear from you.
                </p>
                <p className="text-sm font-medium text-primary">
                  Vayom AI is hiring only in the United States and India at this time.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl border border-border space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium flex items-center gap-1 mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      required
                      data-testid="input-careers-fullname"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-1 mb-2">
                      Work Email <span className="text-destructive">*</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>Company email addresses only.</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <Input
                      type="email"
                      value={workEmail}
                      onChange={(e) => {
                        setWorkEmail(e.target.value);
                        if (emailError) validateEmail(e.target.value);
                      }}
                      onBlur={() => workEmail && validateEmail(workEmail)}
                      placeholder="name@company.com"
                      required
                      data-testid="input-careers-email"
                    />
                    {emailError && (
                      <p className="text-sm text-destructive mt-1">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-1 mb-2">
                      Location <span className="text-destructive">*</span>
                    </label>
                    <Select value={userLocation} onValueChange={setUserLocation} required>
                      <SelectTrigger className="bg-white" data-testid="select-careers-location">
                        <SelectValue placeholder="Select your location" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="United States">United States</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-1 mb-2">
                      Resume <span className="text-destructive">*</span>
                    </label>
                    
                    {!resumeFile ? (
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                          isDragging
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50 bg-white"
                        }`}
                        data-testid="dropzone-resume"
                      >
                        <input
                          type="file"
                          id="resume-upload"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                        <label htmlFor="resume-upload" className="cursor-pointer">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Upload className="w-6 h-6 text-primary" />
                          </div>
                          <p className="text-sm font-medium mb-1">Drag and drop your resume here</p>
                          <p className="text-xs text-muted-foreground mb-4">or click to browse</p>
                          <Button type="button" variant="outline" size="sm">
                            Upload Resume
                          </Button>
                          <p className="text-[10px] text-muted-foreground mt-4">
                            PDF, DOC, DOCX • Max 10 MB
                          </p>
                        </label>
                      </div>
                    ) : (
                      <div className="bg-white border border-border rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{resumeFile.name}</p>
                            <p className="text-xs text-muted-foreground">{formatFileSize(resumeFile.size)}</p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => setResumeFile(null)}
                          data-testid="button-remove-resume"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={handleCancelClick}
                    data-testid="button-careers-cancel"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={isSubmitting}
                    data-testid="button-careers-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 container-width">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-display font-bold">Contact</h2>
            <p className="text-lg text-muted-foreground">
              Share your systems and the first workflow you want to operationalize. We will show the output format and how the evidence links work.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 h-12"
                onClick={scrollToContact}
              >
                Request a Demo
              </Button>
              <a href="mailto:sales@vayomai.com">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-2">
                  Email sales@vayomai.com
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Cancel Dialog */}
      <AlertDialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Discard this application?</AlertDialogTitle>
            <AlertDialogDescription>
              Your entered information will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Go Back</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                resetForm();
                setShowCancelDialog(false);
              }}
            >
              Discard
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
