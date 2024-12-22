import { Facebook, Instagram, MapPin, Phone, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <a 
                href="tel:3112345678" 
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone size={20} />
                (31) 1234-5678
              </a>
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => window.open("https://wa.me/5531912345678", "_blank")}
              >
                <MessageSquare className="mr-2" size={20} />
                Fale no WhatsApp
              </Button>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Localização</h3>
            <div className="flex items-start gap-2">
              <MapPin size={20} />
              <p>Rua Exemplo, 123 – Belo Horizonte, MG</p>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="#" 
                className="hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block hover:text-secondary transition-colors">
                Termos de Serviço
              </a>
              <a href="#" className="block hover:text-secondary transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};