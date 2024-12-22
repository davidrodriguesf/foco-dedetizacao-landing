import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-white font-bold text-xl">Foco Dedetizadora</div>
        <div className="flex items-center gap-4">
          <a href="tel:3112345678" className="hidden md:flex items-center gap-2 text-white hover:text-secondary transition-colors">
            <Phone size={20} />
            <span>(31) 1234-5678</span>
          </a>
          <Button
            variant="secondary"
            className="flex items-center gap-2 font-semibold"
            onClick={() => window.open("https://wa.me/5531912345678", "_blank")}
          >
            <MessageSquare size={20} />
            <span className="hidden md:inline">Fale no WhatsApp</span>
            <span className="md:hidden">WhatsApp</span>
          </Button>
        </div>
      </div>
    </header>
  );
};