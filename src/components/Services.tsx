import {
  ClipboardCheck,
  Settings,
  Wrench,
  CircleDot,
  Snowflake,
  ScanLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: ClipboardCheck,
    title: "APK Keuring",
    text: "Snel en betrouwbaar uw auto APK gekeurd. Inclusief duidelijke uitleg en advies over eventuele reparaties.",
  },
  {
    icon: Settings,
    title: "Regulier Onderhoud",
    text: "Periodieke onderhoudsbeurten volgens fabrieksvoorschrift, zodat uw auto in topconditie blijft.",
  },
  {
    icon: Wrench,
    title: "Auto Reparatie",
    text: "Van remmen en distributieriem tot motorwerk — wij verhelpen elk mankement vakkundig.",
  },
  {
    icon: CircleDot,
    title: "Banden & Uitlijnen",
    text: "Bandenwissel, balanceren en uitlijnen voor optimale grip, veiligheid en een lager verbruik.",
  },
  {
    icon: Snowflake,
    title: "Airco Service",
    text: "Aircocontrole, bijvullen en reinigen voor een fris en aangenaam klimaat in uw auto.",
  },
  {
    icon: ScanLine,
    title: "Diagnose",
    text: "Moderne uitleesapparatuur spoort storingen snel op, zodat we gericht en zuinig kunnen repareren.",
  },
];

export function Services() {
  return (
    <section id="diensten" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            Onze Diensten
          </span>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Alles voor uw auto onder één dak
          </h2>
          <p className="mt-4 text-muted-foreground">
            Compleet onderhoud en reparatie voor alle merken. Bekijk onze diensten
            en plan eenvoudig een afspraak in.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.1}>
          <Button asChild variant="cta" size="xl">
            <a href="#contact">Vraag vrijblijvend een afspraak aan</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
