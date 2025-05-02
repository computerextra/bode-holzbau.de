import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Hero background"
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Our Platform
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Discover amazing features and services that will transform your
                experience. Start your journey with us today.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <NavLink to="/">
                <Button size="lg">Ihre direkter Kontakt</Button>
              </NavLink>
              <NavLink to="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background/20 text-white hover:bg-background/30 hover:text-white"
                >
                  Mehr Infos
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
