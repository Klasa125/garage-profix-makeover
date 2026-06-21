import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import logo from "@/assets/profix-logo.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="Garage Profix logo"
              width={1187}
              height={216}
              loading="lazy"
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-background/70">
              Uw betrouwbare autogarage voor onderhoud, reparatie en APK van alle
              automerken. Vakmanschap met persoonlijke service.
            </p>
          </div>


          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-background/60">
              Openingstijden
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 text-background/80">
                  <span>{h.day}</span>
                  <span className="font-semibold text-background">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-background/60">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                <a href={siteConfig.phoneHref} className="hover:text-accent">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                <a href={siteConfig.emailHref} className="hover:text-accent">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true" />
                <span className="text-background/80">{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-background/60">
              Locatie
            </h3>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex h-32 items-center justify-center rounded-xl border border-background/15 bg-background/5 text-sm font-semibold text-background/80 transition-colors hover:border-accent hover:text-accent"
              aria-label="Bekijk onze locatie op Google Maps"
            >
              <MapPin className="mr-2 h-5 w-5" aria-hidden="true" /> Bekijk op Google Maps
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-6 text-sm text-background/60 sm:flex-row">
          <p>© {year} Garage Profix. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacybeleid</a>
            <a href="#" className="hover:text-accent">Algemene Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
