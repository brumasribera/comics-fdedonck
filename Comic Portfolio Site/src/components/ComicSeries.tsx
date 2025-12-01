import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function ComicSeries() {
  const noPlaneSeries = [
    {
      title: "Morocco",
      description: "Short comics from travels without taking the airplane",
      image: "https://images.unsplash.com/photo-1661166275202-10bc98002bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwdHJhdmVsJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2NDUxOTkyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://github.com/fdedonck/Comics/tree/main/No%20Plane%20Adventures"
    }
  ];

  const otherComics = [
    {
      title: "Othering",
      subtitle: "Border Forensics & Swiss police-related deaths",
      link: "https://github.com/fdedonck/Comics/tree/main/Other%20comics"
    },
    {
      title: "Another one breathes the dust",
      subtitle: "Op-ed for REVOLVE — Car emissions & social inequalities in Geneva",
      link: "https://github.com/fdedonck/Comics/tree/main/Other%20comics"
    },
    {
      title: "Summer Palimpsest",
      subtitle: "Overflowing with emotions",
      link: "https://github.com/fdedonck/Comics/tree/main/Other%20comics"
    },
    {
      title: "When the pain takes over",
      subtitle: "Introspection and resilience",
      link: "https://github.com/fdedonck/Comics/tree/main/Other%20comics"
    },
    {
      title: "al-Ard (فلسطين)",
      subtitle: "Reflections on land, loss, and solidarity",
      link: "https://github.com/fdedonck/Comics/tree/main/Other%20comics"
    },
    {
      title: "Line 3 replacement",
      subtitle: "Water protectors and care for Earth",
      link: "https://github.com/fdedonck/Comics/tree/main/Other%20comics"
    }
  ];

  return (
    <section className="bg-neutral-50">
      
      {/* No Plane Adventures */}
      <div className="py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="text-neutral-400 tracking-[0.3em] uppercase mb-4">Series</p>
            <h2 className="mb-6">No Plane Adventures</h2>
            <div className="w-16 h-0.5 bg-neutral-900 mb-6" />
            <p className="text-neutral-600 leading-relaxed">
              A series of short comics from travels without taking the airplane. 
              Slow journeys, deep observations, and the stories found along the way.
            </p>
          </div>

          <div className="relative aspect-[21/9] overflow-hidden mb-8">
            <ImageWithFallback 
              src={noPlaneSeries[0].image}
              alt={noPlaneSeries[0].title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <a 
            href={noPlaneSeries[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-900 hover:border-neutral-600 pb-1"
          >
            Explore the series →
          </a>
        </div>
      </div>

      {/* Other Comics */}
      <div className="py-32 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20 max-w-3xl">
            <p className="text-neutral-400 tracking-[0.3em] uppercase mb-4">Collection</p>
            <h2 className="mb-6">Standalone Stories</h2>
            <div className="w-16 h-0.5 bg-neutral-900 mb-6" />
            <p className="text-neutral-600 leading-relaxed">
              Individual narratives exploring themes of justice, environment, emotion, and solidarity. 
              Each piece stands alone, yet connects to broader conversations about our shared world.
            </p>
          </div>

          <div className="space-y-1">
            {otherComics.map((comic, index) => (
              <a
                key={index}
                href={comic.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-b border-neutral-200 hover:bg-neutral-50 transition-colors px-6 -mx-6"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-neutral-400 tracking-[0.2em] uppercase w-12">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-neutral-900 group-hover:text-neutral-600 transition-colors">
                        {comic.title}
                      </h3>
                    </div>
                    <p className="text-neutral-500 ml-16">
                      {comic.subtitle}
                    </p>
                  </div>
                  <div className="text-neutral-400 group-hover:text-neutral-900 transition-colors pt-1">
                    →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
