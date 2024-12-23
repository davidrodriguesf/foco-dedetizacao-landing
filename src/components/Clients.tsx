import React from "react";

export const Clients = () => {
  const clients = [
    {
      name: "Axial",
      logo: "/lovable-uploads/fc06adee-4c20-49c1-8fbe-7a18a0b6253a.png",
    },
    {
      name: "Med Senior",
      logo: "/lovable-uploads/44082742-d2d2-4cde-b8b2-287b2dfbf82c.png",
    },
    {
      name: "Grupo Arcor",
      logo: "/lovable-uploads/aa7d9196-5b61-464d-bef1-5ec4a1aae510.png",
    },
    {
      name: "Santander",
      logo: "/lovable-uploads/831ca9f0-8a45-4997-9db5-b7782451d15e.png",
    },
    {
      name: "Prosegur",
      logo: "/lovable-uploads/58275435-95fd-4595-b6aa-31e185b9a983.png",
    },
    {
      name: "Band",
      logo: "/lovable-uploads/25db03e6-5842-4f2e-b972-48b33952f980.png",
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#34c87e" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Mais de 50.000 Clientes Já Escolheram a Foco Dedetizadora!
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-full max-w-[180px] h-[80px] flex items-center justify-center p-4"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};