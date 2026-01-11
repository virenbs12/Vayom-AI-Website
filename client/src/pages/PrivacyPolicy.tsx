import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Privacy Policy"
        description="Privacy policy for Vayom AI: how we collect, use, and protect information."
        keywords="privacy policy, data protection, Vayom AI"
        canonicalUrl="https://vayomai.org/privacy"
      />
      <Header />
      <main className="py-16 md:py-24">
        <div className="container-width max-w-3xl mx-auto px-4">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-8"
            data-testid="heading-privacy-policy"
          >
            Privacy Policy
          </h1>
          
          <p className="text-muted-foreground mb-6" data-testid="text-effective-date">
            <strong>Effective Date:</strong> January 11, 2026
          </p>
          
          <p className="text-foreground mb-8">
            This Privacy Policy describes how Vayom AI ("we," "us," "our") collects, uses, discloses, and protects information when you use our website and services (the "Services").
          </p>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Information we collect</h2>
            <p className="text-foreground mb-4">We may collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Contact information (such as name, email address, phone number)</li>
              <li>Account information (such as login identifiers and basic profile details)</li>
              <li>Usage information (such as pages viewed, features used, and interactions with the Services)</li>
              <li>Device and technical information (such as browser type, IP address, and approximate location derived from IP)</li>
              <li>Customer content you submit to the Services (only as necessary to provide the functionality you request)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">2. How we use information</h2>
            <p className="text-foreground mb-4">We use information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Provide and operate the Services</li>
              <li>Authenticate users and help keep accounts secure</li>
              <li>Send transactional communications you request (including email and, if you opt in, SMS notifications)</li>
              <li>Improve, maintain, and troubleshoot the Services</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">3. How we share information</h2>
            <p className="text-foreground mb-4">We may share information:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>With service providers who help us operate the Services (for example, hosting, analytics, communications)</li>
              <li>If required by law, regulation, or legal process</li>
              <li>To protect the rights, safety, and security of users and the Services</li>
              <li>In connection with a business transaction (for example, merger, acquisition, or asset sale)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Data retention</h2>
            <p className="text-foreground">
              We retain information only as long as necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Security</h2>
            <p className="text-foreground">
              We implement reasonable administrative, technical, and organizational safeguards designed to protect information. No method of transmission or storage is completely secure.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Your choices</h2>
            <p className="text-foreground mb-4">You may:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Update certain account information through your account settings</li>
              <li>Opt out of non-essential communications where applicable</li>
              <li>If you have opted in to SMS notifications, you can opt out at any time by replying STOP</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">7. International users</h2>
            <p className="text-foreground">
              If you access the Services from outside the United States, you understand that your information may be processed in jurisdictions where we or our service providers operate.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">8. Contact us</h2>
            <p className="text-foreground">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a 
                href="mailto:support@vayomai.com" 
                className="text-primary hover:underline"
                data-testid="link-support-email"
              >
                support@vayomai.com
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
