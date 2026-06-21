import { BadgeEuro, Wrench, Gauge, Car } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    icon: BadgeEuro,
    title: "Eerlijke Prijzen",
    text: "Transparante offertes vooraf, zonder verrassingen achteraf. U weet precies waar u aan toe bent.",
  },
  {
    icon: Wrench,
    title: "Vakkundige Monteurs",
    text: "Ervaren en gecertificeerde monteurs die uw auto behandelen met de zorg en aandacht die hij verdient.",
  },
  {
    icon: Gauge,
    title: "Snel Weer op Weg",
    text: "Korte wachttijden en snelle service. Wij plannen efficiënt zodat u zo snel mogelijk weer kunt rijden.",
  },
  {
    icon: Car,
    title: "Alle Automerken",
    text: "Of u nu een Volkswagen, BMW, Toyota of een ander merk rijdt — wij onderhouden en repareren ze allemaal.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            Waarom Garage Profix?
          </span>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            De zekerheid van een vakkundige garage
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wij combineren modern vakmanschap met persoonlijke service. Daar plukt
            u als klant elke dag de vruchten van.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <f.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
