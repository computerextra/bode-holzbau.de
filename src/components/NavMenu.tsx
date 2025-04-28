import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import * as React from "react";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const NavMenu = ({
  logo = {
    url: "/",
    src: "/logo-bode-holzbau-klein.png",
    alt: "logo",
    title: "Stephan Bode Holzbau GmbH",
  },
  menu = [
    { title: "Startseite", url: "/" },
    {
      title: "Leistungen",
      url: "#",
      items: [
        {
          title: "Deckensysteme",
          description:
            "Die Facetten der heutigen Anforderungen an Decken kennen keine Grenzen. Es gibt zahlreiche Möglichkeiten in der Ausführung und in den Systemen, aber auch die unterschiedlichen Materialien, die beim Bau verwendet werden, spielen eine wichtige Rolle.",

          url: "#",
        },
        {
          title: "Innenausbau",
          description:
            "Mit handwerklicher Perfektion und hervorragender Materialkenntnis realisieren wir Ihre Innenausbau-Projekte. Je nach Kundenwunsch wickeln wir den kompletten Innenausbau bis zur schlüsselfertigen Übergabe ab. Wir beraten und begleiten Sie von der ersten Idee bis zur kompetenten Ausführung, die wir fach- und termingerecht realisieren.",

          url: "#",
        },
        {
          title: "Trennwände",
          description:
            "Durch jahrzehntelange Erfahrung mit Gipskartonwänden in Industrie-, Verwaltungs- und Wohnbauten sind wir ein kompetenter Partner in allen Fragen um den Trennwandbau: Von der einfachen Trennwand, über flexible Trennwände mit Medienfächer oder Wandbekleidungen, bis hin zu Installationswänden oder geschwungenen Gipskartonwänden – wir montieren alle gewünschten Trennwandausführungen.",

          url: "#",
        },
        {
          title: "Brandschutz",
          description:
            "Der Begriff Brandschutz bündelt alle Maßnahmen, die dazu beitragen, Feuer, Rauch und die weitere Ausbreitung eines Brandes zu verhindern. Durch die Brandschutz-Maßnahmen werden Menschen, Natur und Sachwerte geschützt, wobei die höchste Priorität natürlich auf dem Schutz von Leben und Gesundheit selbstverständlich liegt. Zu jeder Zeit besteht die Gefahr eines Brandes innerhalb eines Gebäudes. Aus diesem Grund muss dem Brandschutz bereits bei der Planung und Ausführung von Gebäuden ein sehr hoher Stellenwert eingeräumt werden.",

          url: "#",
        },
        {
          title: "Schallschutz",
          description:
            "Die Raumakustik soll durch die Gestaltung des Raumes so beeinflusst werden, dass die akustischen Eigenschaften des Raumes seinem Verwendungszweck möglichst exakt entsprechen. Hier ist wichtig zu beachten, dass beispielsweise ein Konferenzraum nicht die selben Akustikanforderungen hat wie ein Hörsaal, ein Theater oder eine Sporthalle nicht die selbe Raumakustik benötigt wie ein Grossraumbüro oder privater Wohnraum.",

          url: "#",
        },
      ],
    },
    {
      title: "Jobs",
      url: "#",
    },
    {
      title: "Team",
      url: "#",
    },
    {
      title: "Über uns",
      url: "#",
    },
  ],
}: Navbar1Props) => {
  return (
    <section className="py-4">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
              <span className="text-lg font-semibold text-foreground/50 tracking-tighter">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {item.items.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.url}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
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
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export { NavMenu };
