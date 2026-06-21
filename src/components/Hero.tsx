import { Calendar, Phone } from "lucide-react";
import heroImg from "@/assets/hero-garage.jpg";

export function Hero() {
  return (
    <section className="relative bg-slate-900 text-white">
      {/* Achtergrond afbeelding met een donkere overlay voor leesbaarheid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
        <img 
          src={heroImg}
          alt="Garage Profix Werkplaats" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
        <span className="text-orange-500 font-semibold tracking-wider uppercase mb-4">
          Welkom bij Garage Profix
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Uw Betrouwbare Autogarage <br className="hidden md:block" />in de Regio
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
          Voor APK, regulier onderhoud en complexe reparaties aan alle automerken. Eerlijke prijzen, vakkundige monteurs en u bent snel weer op weg.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#booking" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-orange-500/30">
            <Calendar size={20} />
            Maak een Afspraak
          </a>
          <a href="tel:0123456789" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-bold transition-all">
            <Phone size={20} />
            Bel: 012-3456789
          </a>
        </div>
      </div>
    </section>
  );
}