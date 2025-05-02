interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "/logo-bode-holzbau.png",
    alt: "blocks for shadcn/ui",
    title: "Stephan Bode Holzbau GmbH",
    url: "https://www.bode-holzbau.de/",
  },
  tagline = "Ihr Spezialist für alle Facetten des Trocken- und Innenausbaus, Trennwände und komplexe Deckensysteme - und das seit 1910. In der Baubranche im Großraum Kassel steht unser Name für hochwertige Qualität, besten Service und professionelles Know-how.",
  menuItems = [
    {
      title: "Unsere Trockenbau-Leistungen",
      links: [
        { text: "Trennwände", url: "#" },
        { text: "Deckensysteme", url: "#" },
        { text: "Innenausbau | Ausstellungsarchitektur", url: "#" },
        { text: "Schallschutz | Akustikbau", url: "#" },
        { text: "Baulicher Brandschutz", url: "#" },
      ],
    },
    {
      title: "Kontakt",
      links: [
        { text: "Kontaktformular", url: "#" },
        { text: "Telefon: 05605-3009", url: "#" },
        { text: "Fax: 05605-3486", url: "#" },
        { text: "E-Mail: info@bode-holzbau.de", url: "#" },
      ],
    },
  ],
  bottomLinks = [
    { text: "Presse", url: "#" },
    { text: "Partner", url: "#" },
    { text: "Impressum", url: "https://www.bode-holzbau.de/impressum.html" },
    {
      text: "Datenschutz",
      url: "https://www.bode-holzbau.de/datenschutz.html",
    },
  ],
}: Footer2Props) => {
  return (
    <section className="pt-16 mb-8">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>
              &copy; 2025{" "}
              {new Date().getFullYear() > 2025
                ? "- " + new Date().getFullYear()
                : ""}
              Stephan Bode Holzbau GmbH | Design by{" "}
              <a
                href="https://computer-extra.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Johannes Kirchner (Computer Extra GmbH)
              </a>
            </p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
