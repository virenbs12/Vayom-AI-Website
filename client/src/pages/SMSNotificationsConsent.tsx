import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

export default function SMSNotificationsConsent() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="SMS Notifications Consent"
        description="Learn how Vayom AI uses transactional SMS for job and file status notifications and how to opt in or opt out."
        keywords="SMS notifications, consent, transactional SMS, opt in, opt out"
        canonicalUrl="https://vayomai.org/sms-notifications-consent"
      />
      <Header />
      <main className="py-16 md:py-24">
        <div className="container-width max-w-3xl mx-auto px-4">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-8"
            data-testid="heading-sms-consent"
          >
            SMS Notifications Consent
          </h1>
          
          <p className="text-muted-foreground mb-6" data-testid="text-effective-date">
            <strong>Effective Date:</strong> January 11, 2026
          </p>
          
          <p className="text-foreground mb-8" data-testid="text-intro">
            Vayom AI ("we," "us," "our") may send transactional SMS messages to users who choose to enable SMS notifications.
          </p>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">1. What messages you will receive</h2>
            <p className="text-foreground mb-4">
              If you opt in, you may receive transactional SMS messages related to system activity you initiate, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
              <li>Job execution status (for example: job started, job running, job completed, job failed)</li>
              <li>File processing status (for example: file uploaded, file validated, file processing completed, file processing failed)</li>
            </ul>
            <p className="text-foreground">
              We do not send marketing or promotional SMS messages.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">2. How you opt in</h2>
            <p className="text-foreground">
              You opt in by providing your mobile number in the Vayom AI application and enabling SMS notifications for transactional status updates.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Message frequency</h2>
            <p className="text-foreground">
              Message frequency varies based on your usage and the number of jobs/files you run. You will only receive messages triggered by your activity and system status updates.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Opting out</h2>
            <p className="text-foreground">
              You can opt out at any time by replying STOP to any message. After opting out, you will no longer receive SMS notifications unless you opt in again.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Help</h2>
            <p className="text-foreground">
              For help, reply HELP or contact us at{" "}
              <a 
                href="mailto:support@vayomai.com" 
                className="text-primary hover:underline"
                data-testid="link-support-email"
              >
                support@vayomai.com
              </a>.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Message and data rates</h2>
            <p className="text-foreground">
              Message and data rates may apply depending on your mobile carrier and plan.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Privacy and Terms</h2>
            <p className="text-foreground mb-4">
              For more information, please review:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>
                <a 
                  href="/privacy" 
                  className="text-primary hover:underline"
                  data-testid="link-privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-primary hover:underline"
                  data-testid="link-terms"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
