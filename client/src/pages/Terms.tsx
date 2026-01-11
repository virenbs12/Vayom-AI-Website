import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Terms and Conditions"
        description="Terms and conditions for using Vayom AI services."
        keywords="terms and conditions, terms of service, Vayom AI"
        canonicalUrl="https://vayomai.org/terms"
      />
      <Header />
      <main className="py-16 md:py-24">
        <div className="container-width max-w-3xl mx-auto px-4">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-8"
            data-testid="heading-terms"
          >
            Terms and Conditions
          </h1>
          
          <p className="text-muted-foreground mb-6" data-testid="text-effective-date">
            <strong>Effective Date:</strong> January 11, 2026
          </p>
          
          <p className="text-foreground mb-8">
            These Terms and Conditions ("Terms") govern your access to and use of the website and services provided by Vayom AI ("we," "us," "our"). By using the Services, you agree to these Terms.
          </p>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Use of the Services</h2>
            <p className="text-foreground">
              You may use the Services only in compliance with these Terms and applicable laws. You are responsible for activity that occurs under your account.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Account responsibilities</h2>
            <p className="text-foreground">
              You agree to provide accurate information, maintain the confidentiality of your credentials, and promptly notify us of any unauthorized use of your account.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Acceptable use</h2>
            <p className="text-foreground mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Attempt to gain unauthorized access to systems or data</li>
              <li>Interfere with or disrupt the Services</li>
              <li>Use the Services to violate any law or infringe rights of others</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Intellectual property</h2>
            <p className="text-foreground">
              We and our licensors retain all rights, title, and interest in and to the Services and related materials, excluding content you submit.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Customer content</h2>
            <p className="text-foreground">
              You retain ownership of content you submit to the Services. You grant us a limited license to host, process, and display that content solely to provide the Services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Third-party services</h2>
            <p className="text-foreground">
              The Services may integrate with or link to third-party services. We are not responsible for third-party services and your use may be governed by their terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Disclaimer</h2>
            <p className="text-foreground">
              The Services are provided "as is" and "as available." To the maximum extent permitted by law, we disclaim all warranties, express or implied.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">8. Limitation of liability</h2>
            <p className="text-foreground">
              To the maximum extent permitted by law, Vayom AI will not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="text-foreground">
              We may suspend or terminate access to the Services if you violate these Terms or if necessary to protect the Services, users, or comply with law.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">10. Changes</h2>
            <p className="text-foreground">
              We may update these Terms from time to time. Continued use of the Services after changes become effective constitutes acceptance.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">11. Contact</h2>
            <p className="text-foreground">
              Questions about these Terms may be sent to{" "}
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
