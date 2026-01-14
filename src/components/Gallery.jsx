import SingleGallery from "./common/SingleGallery";
import g1 from '../assets/img/gallery1.jpg'
import g2 from '../assets/img/gallery2.jpg'
import g3 from '../assets/img/gallery3.jpg'
import g4 from '../assets/img/gallery4.jpg'


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
          {/* Image 1 */}
          <SingleGallery src={g1}/>
          <SingleGallery src={g2}/>
          <SingleGallery src={g3}/>
          <SingleGallery src={g4}/>
          </div>

        
      </div>
    </section>
  );
}
