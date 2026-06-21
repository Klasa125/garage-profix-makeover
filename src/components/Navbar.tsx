import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import logo from "@/assets/profix-logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Hoofdnavigatie"
      >
        <a
          href="#home"
          className={`flex items-center gap-2 text-lg font-extrabold tracking-tight ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          Garage&nbsp;Profix
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  scrolled ? "text-foreground" : "text-primary-foreground/90"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="cta" size="lg">
            <a href="#contact">Maak een Afspraak</a>
          </Button>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 shadow-elevated md:hidden">
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-semibold text-foreground hover:bg-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <Button asChild variant="cta" size="lg">
              <a href="#contact" onClick={() => setOpen(false)}>
                Maak een Afspraak
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={siteConfig.phoneHref}>
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
