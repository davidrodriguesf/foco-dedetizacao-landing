import { Star } from "lucide-react";

export const Ratings = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            A Dedetizadora MAIS BEM AVALIADA do Brasil
          </h2>
          <p className="text-xl text-gray-700">
            Mais de 2.100 Avaliações 5 Estrelas no Google!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-secondary fill-current"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Excelente serviço! Muito profissional e eficiente. Recomendo totalmente!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
                <div className="ml-3">
                  <div className="font-semibold">Cliente {i}</div>
                  <div className="text-sm text-gray-500">Serviço Residencial</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};