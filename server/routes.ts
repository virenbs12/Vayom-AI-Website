import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import multer from "multer";
import path from "path";

// Configure multer for resume uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX are allowed.'));
    }
  },
});

// Public email providers to block
const PUBLIC_EMAIL_PROVIDERS = [
  "gmail.com", "googlemail.com", "yahoo.com", "ymail.com", "hotmail.com", "outlook.com", "live.com", "msn.com",
  "aol.com", "icloud.com", "me.com", "mac.com", "proton.me", "protonmail.com", "tutanota.com", "tutanota.de",
  "gmx.com", "gmx.net", "yandex.com", "yandex.ru", "mail.com", "fastmail.com", "zoho.com", "zohomail.com"
];

// Contact Form Schema
const contactFormSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(2),
  website: z.string().min(1),
  numUsers: z.number().int().min(1),
  system: z.string(),
  question: z.string().min(5),
});

// Partner Application Schema  
const partnerApplicationSchema = z.object({
  fullName: z.string().min(1),
  title: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  companyName: z.string().min(1),
  website: z.string().min(1),
  hqCountry: z.string().min(1),
  regions: z.array(z.string()).min(1),
  otherRegion: z.string().optional(),
  companySize: z.string().min(1),
  partnerType: z.string().min(1),
  partnerTypeOther: z.string().optional(),
  engagementModel: z.array(z.string()).min(1),
  verticalFocus: z.string().min(1),
  verticalFocusOther: z.string().optional(),
  clientProjects: z.string().optional(),
  preferredDeployment: z.array(z.string()).min(1),
  cloudEnvironments: z.array(z.string()).min(1),
  cloudEnvironmentsOther: z.string().optional(),
  systems: z.array(z.string()).min(1),
  systemsOther: z.string().optional(),
  outcomes: z.array(z.string()).min(1),
  outcomesOther: z.string().optional(),
  implementationApproach: z.string().min(1),
  practiceNotes: z.string().min(40),
  additionalNotes: z.string().optional(),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // Format email content
      const emailContent = `
New Demo Request from Vayom AI Website
========================================

Contact Information:
- Name: ${data.fullName}
- Email: ${data.email}
- Company: ${data.company}
- Website: ${data.website}
- Number of Users: ${data.numUsers}
- Primary System: ${data.system}

Question/Need:
${data.question}

----------------------------------------
Submitted: ${new Date().toLocaleString()}
`;

      // Log the submission (in production, this would send an email)
      console.log("=== DEMO REQUEST ===");
      console.log(emailContent);
      console.log("===================");
      
      // TODO: In production, integrate with email service (SendGrid, AWS SES, etc.)
      // For now, we're just logging to console
      
      res.json({ 
        success: true, 
        message: "Demo request received successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to process request" 
        });
      }
    }
  });

  // Partner application submission endpoint
  app.post("/api/partner-application", async (req, res) => {
    try {
      const data = partnerApplicationSchema.parse(req.body);
      
      // Format email content
      const emailContent = `
New Partner Application from Vayom AI Website
=============================================

Contact Information:
- Name: ${data.fullName}
- Title: ${data.title}
- Email: ${data.email}
- Phone: ${data.phone || "Not provided"}

Company Information:
- Company Name: ${data.companyName}
- Website: ${data.website}
- HQ Country: ${data.hqCountry}
- Company Size: ${data.companySize}

Partner Details:
- Partner Type: ${data.partnerType}${data.partnerTypeOther ? ` (${data.partnerTypeOther})` : ''}
- Target Regions: ${data.regions.join(", ")}${data.otherRegion ? ` (${data.otherRegion})` : ''}
- Engagement Model: ${data.engagementModel.join(", ")}
- Vertical Focus: ${data.verticalFocus}${data.verticalFocusOther ? ` (${data.verticalFocusOther})` : ''}
- Client Projects: ${data.clientProjects || "Not specified"}

Technical Capabilities:
- Preferred Deployment: ${data.preferredDeployment.join(", ")}
- Cloud Environments: ${data.cloudEnvironments.join(", ")}${data.cloudEnvironmentsOther ? ` (${data.cloudEnvironmentsOther})` : ''}
- Systems Experience: ${data.systems.join(", ")}${data.systemsOther ? ` (${data.systemsOther})` : ''}
- Target Outcomes: ${data.outcomes.join(", ")}${data.outcomesOther ? ` (${data.outcomesOther})` : ''}

Implementation Approach:
${data.implementationApproach}

Practice Notes:
${data.practiceNotes}

Additional Notes:
${data.additionalNotes || "None"}

----------------------------------------
Submitted: ${new Date().toLocaleString()}
`;

      // Log the submission (in production, this would send an email)
      console.log("=== PARTNER APPLICATION ===");
      console.log(emailContent);
      console.log("===========================");
      
      // TODO: In production, integrate with email service (SendGrid, AWS SES, etc.)
      
      res.json({ 
        success: true, 
        message: "Partner application received successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to process application" 
        });
      }
    }
  });

  // Careers resume submission endpoint
  app.post("/api/careers", upload.single("resume"), async (req, res) => {
    try {
      const { fullName, workEmail, location } = req.body;
      const resumeFile = req.file;

      // Validate required fields
      if (!fullName || !workEmail || !location || !resumeFile) {
        return res.status(400).json({
          success: false,
          message: "All fields are required including resume file.",
        });
      }

      // Validate company email
      const emailDomain = workEmail.split("@")[1]?.toLowerCase();
      if (PUBLIC_EMAIL_PROVIDERS.includes(emailDomain)) {
        return res.status(400).json({
          success: false,
          message: "Please use a company email address.",
        });
      }

      // Validate location
      if (!["United States", "India"].includes(location)) {
        return res.status(400).json({
          success: false,
          message: "Location must be United States or India.",
        });
      }

      // Format internal email content
      const internalEmailContent = `
New Resume Submission from Vayom AI Website
=============================================

Candidate Information:
- Full Name: ${fullName}
- Work Email: ${workEmail}
- Location: ${location}
- Timestamp (UTC): ${new Date().toISOString()}

Resume Details:
- File Name: ${resumeFile.originalname}
- File Size: ${(resumeFile.size / 1024).toFixed(1)} KB
- File Type: ${resumeFile.mimetype}

[Resume file attached]

----------------------------------------
To: careers@vayomai.com
`;

      // Format candidate confirmation email
      const candidateEmailContent = `
Subject: We received your resume

Dear ${fullName},

Thanks for your submission. If a suitable opening is found, someone from HR will reach out.

Location: ${location}

Best regards,
Vayom AI Careers Team

Reply-To: careers@vayomai.com
`;

      // Log the submissions (in production, this would send emails via Azure Communication Services)
      console.log("=== CAREER APPLICATION ===");
      console.log(internalEmailContent);
      console.log("--- Candidate Confirmation ---");
      console.log(candidateEmailContent);
      console.log("==============================");

      // TODO: In production, integrate with Azure Communication Services to:
      // 1. Send email to careers@vayomai.com with resume attachment
      // 2. Send confirmation email to the candidate
      
      res.json({
        success: true,
        message: "Application received successfully",
      });
    } catch (error) {
      console.error("Career application error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to process application",
      });
    }
  });

  return httpServer;
}
