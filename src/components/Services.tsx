import { Check } from "lucide-react";

const services = [
  "Controle de Baratas",
  "Dedetização",
  "Desratização",
  "Descupinização",
  "Controle de Formigas",
  "Sanitização",
];

export const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-white" size={20} />
              </div>
              <span className="text-lg font-semibold text-gray-700">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};