"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  title: string;
  href: string;
  description?: string;
  children: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "About",
    href: "/#about",
    children: [],
  },
  {
    title: "What you&apos;ll learn",
    href: "/#whatWeDo",
    children: [],
  },
  {
    title: "What you&apos;ll need",
    href: "/#whatYouNeed",
    children: [],
  },
  {
    title: "FAQs",
    href: "/#faq",
    children: [],
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true)
      else setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Custom style for nav text: bold, dark white (almost white, but not pure white)
  // We&apos;ll use fontWeight: 700 and color: #f5f5f5 (a dark white)
  const navTextStyle: React.CSSProperties = {
    color: "#f5f5f5",
    fontWeight: 700,
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link href="/" className="logo-link">
            <span
              className="logo-text raptorv-font text-2xl font-bold"
              style={{
                color: '#ffffff',
              }}
            >
              CodeKar
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-container">
          <NavigationMenu className="nav-desktop">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "nav-item raptorv-font",
                        isActive(item.href) && "active"
                      )}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      style={navTextStyle}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side buttons */}
        <div className="button-container">
          <Link href="/sign_up">
            <Button className="desktop-button raptorv-font bg-white text-black hover:bg-gray-100">
              Register for Workshop
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="mobile-button">
              <Button size="icon" variant="outline" className="p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] max-w-[280px] p-4 bg-gradient-to-r from-[#000000] via-[#1a2e05] to-[#a3e635]">
              <div className="mobile-menu">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "mobile-menu-item raptorv-font",
                      isActive(item.href) && "active"
                    )}
                    onClick={() => setIsOpen(false)}
                    style={navTextStyle}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link href="/sign_up">
                  <Button className="mt-6 raptorv-font w-full bg-white text-black">
                    Register for Workshop
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
