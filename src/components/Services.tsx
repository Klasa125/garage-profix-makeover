import { Wrench, CheckCircle, Activity, Snowflake, Settings, Car } from "lucide-react";

const servicesList = [
  { title: "APK Keuring", desc: "Verplichte jaarlijkse keuring voor uw veiligheid en het milieu.", icon: CheckCircle },
  { title: "Regulier Onderhoud", desc: "Kleine en grote beurt om uw auto in topconditie te houden.", icon: Settings },
  { title: "Auto Reparatie", desc: "Vakkundige reparaties met uitsluitend kwaliteitsonderdelen.", icon: Wrench },
  { title: "Banden & Uitlijnen", desc: "Zomer- en winterbanden wisselen en perfecte uitlijning.", icon: Car },
  { title: "Airco Service", desc: "Vullen, reinigen en repareren van uw aircosysteem.", icon: Snowflake },
  { title: "Diagnose & Uitlezen", desc: "Snel en accuraat opsporen van storingen via moderne apparatuur.", icon: Activity },
];

export function Services() {
  return (
    <section id="diensten" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Onze Diensten</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Van een simpele lamp vervangen tot een complete motorrevisie: bij Garage Profix is uw auto in goede handen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}