import { useState, type FormEvent } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export function Booking() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Aanvraag verzonden!", {
        description: "Bedankt voor uw aanvraag. We nemen zo snel mogelijk contact met u op.",
      });
    }, 700);
  }

  return (
    <section id="contact" className="bg-primary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            Maak een Afspraak
          </span>
          <h2 className="mt-3 text-3xl text-primary-foreground sm:text-4xl">
            Plan uw bezoek in een paar tellen
          </h2>
          <p className="mt-4 max-w-md text-primary-foreground/80">
            Vul het formulier in en wij nemen snel contact met u op om uw afspraak te
            bevestigen. Liever direct contact? Bel ons gerust.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-center gap-4 text-primary-foreground">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <a href={siteConfig.phoneHref} className="font-semibold hover:text-accent">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-4 text-primary-foreground">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <a href={siteConfig.emailHref} className="font-semibold hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-4 text-primary-foreground">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-semibold">{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-4 text-primary-foreground">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-semibold">Ma-Vr 08:00-18:00 · Za 09:00-13:00</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-card p-6 shadow-elevated sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="naam">Naam *</Label>
                <Input id="naam" name="naam" required autoComplete="name" placeholder="Uw naam" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefoon">Telefoonnummer *</Label>
                <Input
                  id="telefoon"
                  name="telefoon"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="06 12345678"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kenteken">Kenteken</Label>
                <Input id="kenteken" name="kenteken" placeholder="AB-123-C" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="naam@email.nl"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="datum">Gewenste datum</Label>
                <Input id="datum" name="datum" type="date" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="bericht">Uw vraag of klacht</Label>
                <Textarea
                  id="bericht"
                  name="bericht"
                  rows={4}
                  placeholder="Beschrijf kort waarmee we u kunnen helpen…"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="cta"
              size="xl"
              className="mt-6 w-full"
              disabled={submitting}
            >
              <Send className="h-5 w-5" />
              {submitting ? "Versturen…" : "Verstuur Aanvraag"}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Wij gaan zorgvuldig om met uw gegevens. Velden met * zijn verplicht.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
