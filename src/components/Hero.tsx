import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Mais de 50.000 Clientes Atendidos com Sucesso!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Controle de Pragas Profissional com Garantia Total de Satisfação!
            Pague em Até 6x no Cartão.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="animate-float text-lg font-semibold"
            onClick={() => window.open("https://wa.me/5531912345678", "_blank")}
          >
            <MessageSquare className="mr-2" size={24} />
            Solicite Orçamento em 2 Minutos
          </Button>
        </div>
      </div>
    </section>
  );
};