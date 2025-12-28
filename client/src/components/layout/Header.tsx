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
import { cn } from "@/lib/utils";
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
        isScrolled ? "bg-white/80 backdrop-blur-md border-border py-2 shadow-sm" : "bg-transparent py-4"
      )}
    >
      <div className="container-width flex items-center justify-between">
        <Link href="/">
          <a className="cursor-pointer block">
            <Logo className="h-10 md:h-12" />
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
                    <ListItem href="/markets#b2c" title="B2C">
                      Protect margin across promos, returns, and shipping.
                    </ListItem>
                    <ListItem href="/markets#b2b" title="B2B">
                      Keep contracts, pricing, and credits aligned.
                    </ListItem>
                    <ListItem href="/markets#riaa" title="RIAA">
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
                <Link href="/#how-it-works">
                  <NavigationMenuLink 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent cursor-pointer font-medium")}
                    onClick={(e) => {
                      if (location === '/') {
                        e.preventDefault();
                        scrollToSection('how-it-works');
                      }
                    }}
                  >
                    How it works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#contact">
                  <NavigationMenuLink 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent cursor-pointer font-medium")}
                    onClick={(e) => {
                      if (location === '/') {
                        e.preventDefault();
                        scrollToSection('contact');
                      }
                    }}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-medium"
            onClick={() => {
              if (location === '/') scrollToSection('contact');
              else window.location.href = '/#contact';
            }}
          >
            Request a workflow demo
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
            <a href="/#how-it-works" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>How it works</a>
            <a href="/#contact" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <Button className="w-full mt-2" onClick={() => setMobileMenuOpen(false)}>Request a workflow demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link href={props.href as string}>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
