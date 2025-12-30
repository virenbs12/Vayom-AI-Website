import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/80 backdrop-blur-md border-border py-1 shadow-sm" : "bg-transparent py-1"
      )}
    >
      <div className="container-width flex items-center justify-between">
        <Link href="/">
          <a className="cursor-pointer block">
            <Logo style={{ height: '150px' }} />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-medium">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    <ListItem href="/markets#b2c" title="B2C" target="_blank" rel="noopener noreferrer">
                      Protect margin across promos, returns, and shipping.
                    </ListItem>
                    <ListItem href="/markets#b2b" title="B2B" target="_blank" rel="noopener noreferrer">
                      Keep contracts, pricing, and credits aligned.
                    </ListItem>
                    <ListItem href="/markets#riaa" title="RIAA" target="_blank" rel="noopener noreferrer">
                      Evidence-first answer system.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/business-functions">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
                    Business Functions
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/pricing">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/partners" target="_blank" rel="noopener noreferrer">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
                    Partners
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/resources">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/company">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
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
              <a className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Home</a>
            </Link>
            <Link href="/markets">
              <a className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            </Link>
            <Link href="/business-functions">
              <a className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Business Functions</a>
            </Link>
            <Link href="/pricing">
              <a className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            </Link>
            <a 
              href="/partners" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-medium p-2 hover:bg-muted rounded-md" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </a>
            <Link href="/resources">
              <a className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Resources</a>
            </Link>
            <Link href="/company">
              <a className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Company</a>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, target, ...props }, ref) => {
  const linkContent = (
    <a
      ref={ref}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      target={target}
      {...props}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
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
});
ListItem.displayName = "ListItem";
