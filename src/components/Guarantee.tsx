import { Shield } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Garantia Absoluta: Ou Você Fica 100% Satisfeito ou Devolvemos Seu
            Dinheiro!
          </h2>
          <p className="text-xl opacity-90">
            Se o problema persistir ou você não ficar totalmente satisfeito, nós
            devolvemos o valor pago. Seu risco é zero!
          </p>
        </div>
      </div>
    </section>
  );
};