import { CalendarDays } from "lucide-react";

export function Booking() {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Linker Informatie Paneel */}
          <div className="bg-slate-800 p-10 md:w-2/5 text-white flex flex-col justify-center">
            <CalendarDays size={48} className="text-orange-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Snel Weer Op Weg</h3>
            <p className="text-slate-300 mb-6">
              Vul uw gegevens in en wij nemen zo snel mogelijk contact met u op om de afspraak definitief in te plannen.
            </p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>✓ Geen onverwachte kosten</li>
              <li>✓ Leenauto beschikbaar</li>
              <li>✓ Alle automerken welkom</li>
            </ul>
          </div>

          {/* Rechter Formulier Paneel */}
          <div className="p-10 md:w-3/5 bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Afspraak Aanvragen</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Naam</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="Jan Jansen" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefoonnummer</label>
                  <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="06 12345678" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Kenteken</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none uppercase" placeholder="XX-123-X" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Gewenste Datum</label>
                  <input type="date" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Wat moet er gebeuren?</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="Beschrijf kort het probleem of de gewenste service..."></textarea>
              </div>

              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-4">
                Verstuur Aanvraag
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}