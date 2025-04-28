import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="pb-8">
      <div className="overflow-hidden">
        <div className="container">
          <img
            src="/header-home.jpg"
            alt="Hero"
            className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg"
          />
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-4xl font-semibold text-pretty lg:text-7xl">
                Stephan Bode Holzbau GmbH
              </h1>
              <p className="mx-auto max-w-screen-md text-muted-foreground lg:text-xl">
                Über 100 Jahre Handwerkskompetenz
              </p>
              <p className="mx-auto max-w-screen-md text-muted-foreground lg:text-xl">
                Ihr Spezialist für alle Facetten des Trocken- und Innenausbaus,
                Trennwände und komplexe Deckensysteme - und das seit 1910. In
                der Baubranche im Großraum Kassel steht unser Name für
                hochwertige Qualität, besten Service und professionelles
                Know-how.
              </p>
              <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button>
                  Kontakt aufnehmens
                  <ChevronRight className="ml-2 h-4" />
                </Button>
                <Button variant="ghost">
                  Unsere Leistungen
                  <ChevronRight className="ml-2 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Home };
