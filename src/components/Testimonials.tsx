import React from "react";

export const Testimonials = () => {
  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/BFprVfMgF54",
      title: "Depoimento Cliente 1",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/_cnEsf8Ntac",
      title: "Depoimento Cliente 2",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/19yYn5ZYzJ4",
      title: "Depoimento Cliente 3",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          O Que Os Clientes Falam da Gente
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative w-full aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src={video.url}
                title={video.title}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};