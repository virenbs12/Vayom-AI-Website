import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Full_logo_side_text_without_bg_(4000px)_1766964703537.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, scrollToDemo } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCurrentHash(window.location.hash);
    
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [location]);

  const isHomeActive = location === "/";
  const isSolutionsActive = location === "/markets";
  const isBusinessFunctionsActive = location === "/business-functions";
  const isPricingActive = location === "/pricing";
  const isPartnersActive = location === "/partners";
  const isResourcesActive = location === "/resources";
  const isCompanyActive = location === "/company";

  const activeStyle = "bg-accent text-accent-foreground";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-white/80 backdrop-blur-md border-transparent py-2 shadow-sm" : "bg-transparent py-4 border-[#dedede]"
      )}
    >
      <div className="container-width flex items-center justify-between h-[50px]">
        <Link href="/" className="cursor-pointer block">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Vayom AI" 
              className="h-40 absolute w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block ml-25">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(), 
                    "bg-transparent font-medium",
                    isHomeActive && activeStyle
                  )}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent font-medium",
                  isSolutionsActive && activeStyle
                )}>
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    <ListItem 
                      href="/markets#b2c" 
                      title="B2C" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isSolutionsActive && currentHash === "#b2c"}
                    >
                      Protect margin across promos, returns, and shipping.
                    </ListItem>
                    <ListItem 
                      href="/markets#b2b" 
                      title="B2B" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isSolutionsActive && currentHash === "#b2b"}
                    >
                      Keep contracts, pricing, and credits aligned.
                    </ListItem>
                    <ListItem 
                      href="/markets#riaa" 
                      title="RIAA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isSolutionsActive && currentHash === "#riaa"}
                    >
                      Evidence-first answer system.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent font-medium",
                  isBusinessFunctionsActive && activeStyle
                )}>
                  Business Functions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    <ListItem 
                      href="/business-functions#finance" 
                      title="Finance" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#finance"}
                    >
                      Close faster with verified revenue data.
                    </ListItem>
                    <ListItem 
                      href="/business-functions#revops" 
                      title="RevOps & Deal Desk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#revops"}
                    >
                      Align pricing, approvals, and deal terms.
                    </ListItem>
                    <ListItem 
                      href="/business-functions#sales" 
                      title="Sales" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#sales"}
                    >
                      Quote with confidence, renew without leakage.
                    </ListItem>
                    <ListItem 
                      href="/business-functions#marketing" 
                      title="Marketing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#marketing"}
                    >
                      Track promo ROI and campaign attribution.
                    </ListItem>
                    <ListItem 
                      href="/business-functions#operations" 
                      title="Operations" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#operations"}
                    >
                      Optimize fulfillment and reduce cost leaks.
                    </ListItem>
                    <ListItem 
                      href="/business-functions#leadership" 
                      title="Leadership" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#leadership"}
                    >
                      Get board-ready revenue insights.
                    </ListItem>
                    <ListItem 
                      href="/business-functions#it-security" 
                      title="IT & Security" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#it-security"}
                    >
                      Deploy securely in SaaS or VPC.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/pricing">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(), 
                    "bg-transparent font-medium",
                    isPricingActive && activeStyle
                  )}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent font-medium",
                  isPartnersActive && activeStyle
                )}>
                  Partners
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    <ListItem 
                      href="/partners#why" 
                      title="Why Partner" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#why"}
                    >
                      Grow your practice with revenue intelligence.
                    </ListItem>
                    <ListItem 
                      href="/partners#types" 
                      title="Partner Types" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#types"}
                    >
                      GSI, regional SI, and boutique options.
                    </ListItem>
                    <ListItem 
                      href="/partners#deliver" 
                      title="What You Deliver" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#deliver"}
                    >
                      Scoping, integration, and ongoing support.
                    </ListItem>
                    <ListItem 
                      href="/partners#enablement" 
                      title="Enablement" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#enablement"}
                    >
                      Certification, sandboxes, and sales tools.
                    </ListItem>
                    <ListItem 
                      href="/partners#security" 
                      title="Security" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#security"}
                    >
                      Enterprise-grade compliance and access.
                    </ListItem>
                    <ListItem 
                      href="/partners#model" 
                      title="Commercial Model" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#model"}
                    >
                      Transparent margins and deal registration.
                    </ListItem>
                    <ListItem 
                      href="/partners#apply" 
                      title="Apply" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#apply"}
                    >
                      Start your partnership journey today.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/resources">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(), 
                    "bg-transparent font-medium",
                    isResourcesActive && activeStyle
                  )}>
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/company">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(), 
                    "bg-transparent font-medium",
                    isCompanyActive && activeStyle
                  )}>
                    Company
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-medium"
            onClick={scrollToDemo}
            data-testid="button-request-demo-header"
          >
            Request a Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            <Link 
              href="/"
              className={cn(
                "text-lg font-medium p-2 hover:bg-muted rounded-md block",
                isHomeActive && "bg-muted"
              )} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/markets"
              className={cn(
                "text-lg font-medium p-2 hover:bg-muted rounded-md block",
                isSolutionsActive && "bg-muted"
              )} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="/business-functions"
              className={cn(
                "text-lg font-medium p-2 hover:bg-muted rounded-md block",
                isBusinessFunctionsActive && "bg-muted"
              )} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Business Functions
            </Link>
            <Link 
              href="/pricing"
              className={cn(
                "text-lg font-medium p-2 hover:bg-muted rounded-md block",
                isPricingActive && "bg-muted"
              )} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <a 
              href="/partners" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "text-lg font-medium p-2 hover:bg-muted rounded-md block",
                isPartnersActive && "bg-muted"
              )} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </a>
            <Link 
              href="/resources"
              className={cn(
                "text-lg font-medium p-2 hover:bg-muted rounded-md block",
                isResourcesActive && "bg-muted"
              )} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/company"
              className={cn(
                "text-lg font-medium p-2 hover:bg-muted rounded-md block",
                isCompanyActive && "bg-muted"
              )} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
            <Button 
              className="w-full mt-2" 
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToDemo();
              }}
              data-testid="button-request-demo-mobile"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  isActive?: boolean;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, target, isActive, href, ...props }, ref) => {
    const baseClassName = cn(
      "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      isActive && "bg-accent text-accent-foreground",
      className
    );

    const content = (
      <>
        <div className="text-sm font-medium leading-none">{title}</div>
        {children && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-white transition-colors">
            {children}
          </p>
        )}
      </>
    );

    if (target === "_blank") {
      return (
        <li>
          <a
            ref={ref}
            className={baseClassName}
            target={target}
            href={href}
            {...props}
          >
            {content}
          </a>
        </li>
      );
    }

    return (
      <li>
        <Link href={href as string} className={baseClassName}>
          {content}
        </Link>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
