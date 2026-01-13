export default function Gallery() {
  // Using the local placeholder as sample data, duplicated for the grid
  const images = [
    { src: "/hero-bg.png", alt: "Campaign Rally 1" },
    { src: "/hero-bg.png", alt: "Campaign Rally 2" },
    { src: "/hero-bg.png", alt: "Campaign Rally 3" },
    { src: "/hero-bg.png", alt: "Campaign Rally 4" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-5xl font-bold text-bd-green mb-4">প্রচারণা গ্যালারি</h2>
           <div className="w-24 h-1 bg-bd-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg border-2 border-transparent hover:border-bd-green transition-all duration-300">
               {/* Image Container */}
               <div className="aspect-square overflow-hidden">
                 <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
               </div>
               
               {/* Overlay (Optional) */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">জনসমুদ্র</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
