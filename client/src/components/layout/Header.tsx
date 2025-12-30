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
        <Link href="/">
          <a className="cursor-pointer block">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Vayom AI" 
                className="h-40 absolute w-auto object-contain"
              />
            </div>
          </a>
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
                  <ul className="flex items-center gap-1 p-4 bg-white whitespace-nowrap">
                    <ListItem 
                      href="/business-functions#finance" 
                      title="Finance" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#finance"}
                    />
                    <ListItem 
                      href="/business-functions#revops" 
                      title="RevOps & Deal Desk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#revops"}
                    />
                    <ListItem 
                      href="/business-functions#sales" 
                      title="Sales" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#sales"}
                    />
                    <ListItem 
                      href="/business-functions#marketing" 
                      title="Marketing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#marketing"}
                    />
                    <ListItem 
                      href="/business-functions#operations" 
                      title="Operations" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#operations"}
                    />
                    <ListItem 
                      href="/business-functions#leadership" 
                      title="Leadership" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#leadership"}
                    />
                    <ListItem 
                      href="/business-functions#it-security" 
                      title="IT & Security" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isBusinessFunctionsActive && currentHash === "#it-security"}
                    />
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
                  <ul className="flex items-center gap-1 p-4 bg-white whitespace-nowrap">
                    <ListItem 
                      href="/partners#why" 
                      title="Why Partner" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#why"}
                    />
                    <ListItem 
                      href="/partners#types" 
                      title="Partner Types" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#types"}
                    />
                    <ListItem 
                      href="/partners#deliver" 
                      title="What You Deliver" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#deliver"}
                    />
                    <ListItem 
                      href="/partners#enablement" 
                      title="Enablement" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#enablement"}
                    />
                    <ListItem 
                      href="/partners#security" 
                      title="Security" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#security"}
                    />
                    <ListItem 
                      href="/partners#model" 
                      title="Commercial Model" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#model"}
                    />
                    <ListItem 
                      href="/partners#apply" 
                      title="Apply" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isActive={isPartnersActive && currentHash === "#apply"}
                    />
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
            <Link href="/">
              <a 
                className={cn(
                  "text-lg font-medium p-2 hover:bg-muted rounded-md",
                  isHomeActive && "bg-muted"
                )} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/markets">
              <a 
                className={cn(
                  "text-lg font-medium p-2 hover:bg-muted rounded-md",
                  isSolutionsActive && "bg-muted"
                )} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
            </Link>
            <Link href="/business-functions">
              <a 
                className={cn(
                  "text-lg font-medium p-2 hover:bg-muted rounded-md",
                  isBusinessFunctionsActive && "bg-muted"
                )} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Business Functions
              </a>
            </Link>
            <Link href="/pricing">
              <a 
                className={cn(
                  "text-lg font-medium p-2 hover:bg-muted rounded-md",
                  isPricingActive && "bg-muted"
                )} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
            </Link>
            <a 
              href="/partners" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "text-lg font-medium p-2 hover:bg-muted rounded-md",
                isPartnersActive && "bg-muted"
              )} 
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </a>
            <Link href="/resources">
              <a 
                className={cn(
                  "text-lg font-medium p-2 hover:bg-muted rounded-md",
                  isResourcesActive && "bg-muted"
                )} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </a>
            </Link>
            <Link href="/company">
              <a 
                className={cn(
                  "text-lg font-medium p-2 hover:bg-muted rounded-md",
                  isCompanyActive && "bg-muted"
                )} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </a>
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
  ({ className, title, children, target, isActive, ...props }, ref) => {
    const linkContent = (
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          isActive && "bg-accent text-accent-foreground",
          className
        )}
        target={target}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        {children && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        )}
      </a>
    );

    if (target === "_blank") {
      return <li>{linkContent}</li>;
    }

    return (
      <li>
        <Link href={props.href as string}>
          {linkContent}
        </Link>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
