import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const sections = [
  {
    title: "Leistungen",
    links: [
      { name: "Trennwände", href: "#" },
      { name: "Deckensysteme", href: "#" },
      { name: "Innenausbau", href: "#" },
      { name: "Schallschutz", href: "#" },
      { name: "Baulicher Brandschutz", href: "#" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { name: "Telefon: 05605-3009", href: "#" },
      { name: "Fax: 05605-3486", href: "#" },
      { name: "E-Mail: info@bode-holzbau.de", href: "#" },
      { name: "Anfahrt", href: "#" },
      { name: "Kontakt Formular", href: "#" },
    ],
  },
];

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}
export const Footer = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "/logo-bode-holzbau-klein.png",
    alt: "logo",
    title: "Stephan Bode Holzbau GmbH",
  },
}: Footer7Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col items-center justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href="https://shadcnblocks.com">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Ihr Spezialist für alle Facetten des Trocken- und Innenausbaus,
              Trennwände und komplexe Deckensysteme – und das seit 1910. In der
              Baubranche im Großraum Kassel steht unser Name für hochwertige
              Qualität, besten Service und professionelles Know-how.
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <Instagram className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <Facebook className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <Twitter className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <Linkedin className="size-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid w-full grid-cols-3 gap-6 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
          <p>© 2025 Stephan Bode Holzbau GmbH</p>
          <ul className="flex justify-center gap-4 lg:justify-start">
            <li className="hover:text-primary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bode-holzbau.de/impressum.html"
              >
                Impressum
              </a>
            </li>
            <li className="hover:text-primary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bode-holzbau.de/datenschutz.html"
              >
                Datenschutz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
