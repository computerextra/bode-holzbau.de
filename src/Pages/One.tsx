import { ArrowRight } from "lucide-react";

const One = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col gap-16 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="lg:max-w-sm">
            <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Bode Holzbau
            </h2>
            <p className="mb-8 text-muted-foreground lg:text-lg">
              Über 100 Jahre Firma Bode - das ist keine Geschichte vom Aufstieg
              eines kleinen Handwerksbetriebs zum „Global Player“, sondern eine,
              die von Kontinuität und Fleiß handelt. Es ist seit hundert Jahre
              gelungen, ein verlässlicher Arbeitgeber, ein fairer
              Geschäftspartner und ein solider Dienstleister zu sein.
            </p>
            <a
              href="#"
              className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            >
              Mehr über unsere Geschichte{" "}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <img
            src="https://shadcnblocks.com/images/block/placeholder-2.svg"
            alt="Feature 2"
            className="aspect-[16/9] h-full w-full object-cover object-center grayscale opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="relative md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="/decke.png"
                alt="Feature 1"
                className="aspect-[16/9] h-full w-full object-cover object-center grayscale opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Deckensysteme
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Obwohl wir sie täglich im Auge haben, werden Decken meist erst
                auf den zweiten Blick wahrgenommen. Für die Wirkung eines Raumes
                ist es dennoch bedeutend, die passende Decke auszuwählen. Decken
                sind zudem wichtige Funktionsträger: Beleuchtung, Klima, Akustik
                und Brandschutz sind wesentliche Eigenschaften eines modernen
                Deckensystems.
              </p>
              <a
                href="#"
                className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
              >
                Mehr über Deckensysteme{" "}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Innenausbau
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Mit handwerklicher Perfektion und hervorragender
                Materialkenntnis realisieren wir Ihre Innenausbau-Projekte. Je
                nach Kundenwunsch wickeln wir den kompletten Innenausbau bis zur
                schlüsselfertigen Übergabe ab. Wir beraten und begleiten Sie von
                der ersten Idee bis zur kompetenten Ausführung, die wir fach-
                und termingerecht realisieren.
              </p>
              <a
                href="#"
                className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
              >
                Mehr über Innensysteme{" "}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="innenausbau.png"
                alt="Feature 2"
                className="aspect-[16/9] h-full w-full object-cover object-center grayscale opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </div>

          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="/trennwände.png"
                alt="Feature 1"
                className="aspect-[16/9] h-full w-full object-cover object-center grayscale opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Trennwände
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Durch jahrzehntelange Erfahrung mit Gipskartonwänden in
                Industrie-, Verwaltungs- und Wohnbauten sind wir ein kompetenter
                Partner in allen Fragen um den Trennwandbau: Von der einfachen
                Trennwand, über flexible Trennwände mit Medienfächer oder
                Wandbekleidungen, bis hin zu Installationswänden oder
                geschwungenen Gipskartonwänden – wir montieren alle gewünschten
                Trennwandausführungen.
              </p>
              <a
                href="#"
                className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
              >
                Mehr über Trennwände{" "}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Brandschutz
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Der Begriff Brandschutz bündelt alle Maßnahmen, die dazu
                beitragen, Feuer, Rauch und die weitere Ausbreitung eines
                Brandes zu verhindern. Durch die Brandschutz-Maßnahmen werden
                Menschen, Natur und Sachwerte geschützt, wobei die höchste
                Priorität natürlich auf dem Schutz von Leben und Gesundheit
                selbstverständlich liegt. Zu jeder Zeit besteht die Gefahr eines
                Brandes innerhalb eines Gebäudes. Aus diesem Grund muss dem
                Brandschutz bereits bei der Planung und Ausführung von Gebäuden
                ein sehr hoher Stellenwert eingeräumt werden.
              </p>
              <a
                href="#"
                className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
              >
                Mehr über Brandschutz{" "}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-2.svg"
                alt="Feature 2"
                className="aspect-[16/9] h-full w-full object-cover object-center grayscale opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="/schallschutz.png"
                alt="Feature 1"
                className="aspect-[16/9] h-full w-full object-cover object-center grayscale opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Schallschutz
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Die Raumakustik soll durch die Gestaltung des Raumes so
                beeinflusst werden, dass die akustischen Eigenschaften des
                Raumes seinem Verwendungszweck möglichst exakt entsprechen. Hier
                ist wichtig zu beachten, dass beispielsweise ein Konferenzraum
                nicht die selben Akustikanforderungen hat wie ein Hörsaal, ein
                Theater oder eine Sporthalle nicht die selbe Raumakustik
                benötigt wie ein Grossraumbüro oder privater Wohnraum.
              </p>
              <a
                href="#"
                className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
              >
                Mehr über Schallschutz{" "}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { One };
