import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Stephan Bode Holzbau.
        </p>
        <div className="flex items-center gap-4">
          <NavLink
            to="#"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Presse
          </NavLink>
          <NavLink
            to="#"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Partner
          </NavLink>
          <NavLink
            to="#"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Impressum
          </NavLink>
          <NavLink
            to="#"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Datenschutz
          </NavLink>
          <NavLink
            to="#"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Kontakt
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
