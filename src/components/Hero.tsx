import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/fa9f2865-d5bd-42df-8a4d-55b30f2e11ff.png')] bg-cover bg-center"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mais de 50.000 Clientes Livres de Pragas!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Pague em Até 6x no Cartão com Garantia Absoluta
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