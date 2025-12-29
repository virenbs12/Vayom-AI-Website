import React from "react";
import { Link } from "wouter";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12 mt-20">
      <div className="container-width">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-4 h-12 md:h-16" />
            <p className="text-muted-foreground text-sm max-w-xs">
              Edison, NJ.<br />
              SaaS and VPC deployment.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/markets#b2c"><a className="hover:text-primary transition-colors">B2C Workflows</a></Link></li>
              <li><Link href="/markets#b2b"><a className="hover:text-primary transition-colors">B2B Workflows</a></Link></li>
              <li><Link href="/markets#riaa"><a className="hover:text-primary transition-colors">RIAA Platform</a></Link></li>
              <li><Link href="/business-functions"><a className="hover:text-primary transition-colors">Business Functions</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/pricing"><a className="hover:text-primary transition-colors">Pricing</a></Link></li>
              <li><Link href="/partners"><a className="hover:text-primary transition-colors">Partners</a></Link></li>
              <li><Link href="/resources"><a className="hover:text-primary transition-colors">Resources</a></Link></li>
              <li><Link href="/#contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
              <li><a href="mailto:sales@vayomai.com" className="hover:text-primary transition-colors pt-2 block">sales@vayomai.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vayom AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
