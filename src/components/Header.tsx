import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="font-bold text-xl">
            Bode Holzbau
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Startseite
          </NavLink>
          <NavLink
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Leistungen
          </NavLink>
          <NavLink
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Jobs
          </NavLink>
          <NavLink
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Team
          </NavLink>
          <NavLink
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Über Uns
          </NavLink>
        </nav>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col space-y-4 mt-6">
              <NavLink
                to="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Home
              </NavLink>
              <NavLink
                to="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Features
              </NavLink>
              <NavLink
                to="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </NavLink>
              <NavLink
                to="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </NavLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
