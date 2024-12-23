import { Shield, Clock, Smile } from "lucide-react";
import { Button } from "./ui/button";

export const Guarantee = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground">
            A Garantia Foco: Sua Tranquilidade, Nosso Compromisso!
          </h2>
          <p className="text-xl mb-12 text-secondary-foreground/90">
            Não estamos felizes até que você esteja feliz.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/90 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Garantia Total</h3>
              <p className="text-gray-600">
                Voltamos ao seu local quantas vezes forem necessárias até eliminarmos as pragas.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/90 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">30 Dias de Reembolso</h3>
              <p className="text-gray-600">
                Garantia de reembolso de 30 dias caso não esteja satisfeito.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/90 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Satisfação Garantida</h3>
              <p className="text-gray-600">
                Manter sua casa ou empresa segura e lhe proporcionar tranquilidade é o que fazemos de melhor.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg"
          >
            Saiba Mais Sobre Nossa Garantia
          </Button>
        </div>
      </div>
    </section>
  );
};