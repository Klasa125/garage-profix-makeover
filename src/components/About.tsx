import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import aboutImg from "@/assets/about-team.jpg";

const points = [
  "Persoonlijk contact en eerlijk advies",
  "Korte lijnen en snelle planning",
  "Originele en kwalitatieve onderdelen",
  "Heldere offerte voordat we beginnen",
];

export function About() {
  return (
    <section id="over-ons" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Het team van Garage Profix voor de werkplaats"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-elevated"
            />
            <div className="absolute -bottom-6 -right-3 hidden rounded-xl bg-accent px-6 py-5 text-accent-foreground shadow-card sm:block">
              <p className="text-3xl font-extrabold">15+</p>
              <p className="text-sm font-semibold">jaar vakmanschap</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            Over Ons
          </span>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Een lokale garage met hart voor uw auto
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p>
              Bij Garage Profix draait alles om kwaliteit, betrouwbaarheid en passie
              voor auto's. Wij zijn een echte buurtgarage waar u terecht kunt voor
              al uw onderhoud en reparaties — van een kleine beurt tot een grote klus.
            </p>
            <p>
              Onze monteurs nemen de tijd om uw auto grondig na te kijken en leggen
              altijd helder uit wat er nodig is. Met eerlijke prijzen en deskundig
              advies zorgen wij ervoor dat iedereen veilig en tevreden de weg op gaat.
            </p>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm font-medium text-foreground">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
