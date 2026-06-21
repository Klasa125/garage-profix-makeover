import { motion } from "motion/react";
import { Phone, CalendarCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import heroImg from "@/assets/hero-garage.jpg";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Monteur aan het werk in de moderne werkplaats van Garage Profix"
        width={1600}
        height={1067}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />

      <div className="mx-auto flex max-w-7xl flex-col px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pb-28 lg:pt-52">
        <motion.span
          custom={0}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm"
        >
          <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
          Erkende autogarage voor alle merken
        </motion.span>

        <motion.h1
          custom={1}
          variants={item}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-4xl leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl"
        >
          Uw betrouwbare autogarage in de regio
        </motion.h1>

        <motion.p
          custom={2}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85"
        >
          Snelle service, eerlijke prijzen en vakkundig onderhoud voor élk automerk.
          Van APK en reparatie tot diagnose — wij zorgen dat u veilig en zorgeloos
          weer de weg op gaat.
        </motion.p>

        <motion.div
          custom={3}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button asChild variant="cta" size="xl">
            <a href="#contact">
              <CalendarCheck className="h-5 w-5" /> Maak een Afspraak
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <a href={siteConfig.phoneHref} aria-label={`Bel ons op ${siteConfig.phone}`}>
              <Phone className="h-5 w-5" /> Bel ons: {siteConfig.phone}
            </a>
          </Button>
        </motion.div>

        <motion.dl
          custom={4}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-primary-foreground/20 pt-8"
        >
          {[
            { v: "15+", l: "Jaar ervaring" },
            { v: "100%", l: "Eerlijk advies" },
            { v: "Alle", l: "Automerken" },
          ].map((s) => (
            <div key={s.l}>
              <dt className="text-3xl font-extrabold text-accent">{s.v}</dt>
              <dd className="mt-1 text-sm font-medium text-primary-foreground/80">{s.l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
