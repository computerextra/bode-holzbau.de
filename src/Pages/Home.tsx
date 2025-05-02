import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export default function Home() {
  return (
    <section className="dark relative flex h-svh max-h-[1400px] w-svw overflow-hidden bg-[url(/pawel-czerwinski-IbHFznCKnqA-unsplash.jpg)] bg-cover bg-center bg-no-repeat font-sans after:absolute after:top-0 after:left-0 after:z-10 after:h-full after:w-full after:bg-black/20 after:content-[''] md:h-svh">
      <div className="relative z-30 m-auto flex max-w-[46.25rem] flex-col items-center justify-center gap-6 px-5">
        <h1 className="text-center font-serif text-4xl leading-tight text-foreground md:text-6xl xl:text-[4.4rem]">
          Stephan Bode Holzbau GmbH
        </h1>
        <p className="text-center text-base text-foreground">
          Ihr Spezialist für alle Facetten des Trocken- und Innenausbaus,
          Trennwände und komplexe Deckensysteme - und das seit 1910.
        </p>
        <div className="flex gap-5 flex-col md:flex-row">
          <Button variant="default" asChild>
            <NavLink to="/one">Nachricht an uns</NavLink>
          </Button>
          <Button variant="secondary">
            <NavLink to="/one">Über uns</NavLink>
          </Button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-[url(/noise.png)] bg-repeat opacity-15" />
      <div className="absolute z-30 bottom-5 right-5 grid grid-cols-2 gap-5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.bode-holzbau.de/impressum.html"
          className="text-white underline"
        >
          Impressum
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.bode-holzbau.de/datenschutz.html"
          className="text-white underline"
        >
          Datenschutz
        </a>
      </div>
    </section>
  );
}
