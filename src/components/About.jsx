import { CheckCircle } from "lucide-react";
import candidate from "../assets/img/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  const highlights = [
    "বিশিষ্ট সমাজ সেবক",
    "সাবেক ছাত্রনেতা",
    "গরীব ও দুঃখী মানুষের বন্ধু",
    "শিক্ষা ও উন্নয়নের রূপকার",
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 md:order-1 flex justify-center group">
            {/* Image Card */}
            <div
              className="relative aspect-[3/4] w-[260px] sm:w-[300px] md:w-[340px] 
               rounded-2xl overflow-hidden border-4 border-white 
               shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
            >
              <img
                src={candidate}
                alt="Candidate"
                loading="lazy"
                className="w-full h-full object-cover 
                 transition-transform duration-500 ease-out 
                 group-hover:scale-110"
              />
            </div>

            {/* Decorative Blurs (No hover effect) */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-bd-red/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-bd-green/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text Section */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <span className="bg-green-100 text-bd-green px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                পরিচিতি
              </span>
              <h3 data-aos="fade-up" data-aos-duration="1500" className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
                জনগণের পাশে, <br />{" "}
                <span className="text-bd-red">সর্বদাই নির্ভীক</span>
              </h3>
            </div>

            <p data-aos="fade-up" data-aos-duration="2000" className="text-gray-600 leading-relaxed text-lg border-l-4 border-bd-green pl-6">
              তিনি একজন নিবেদিত প্রাণ সমাজকর্মী। দীর্ঘ ২০ বছর ধরে তিনি এ এলাকার
              মানুষের সুখে-দুখে পাশে আছেন। তার মূল লক্ষ্য হলো একটি অপরাধমুক্ত,
              শিক্ষিত এবং উন্নত সমাজ গড়ে তোলা।
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="flex items-center space-x-3 text-gray-700 font-medium bg-gray-50 p-3 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <CheckCircle className="text-bd-green shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <button className="bg-bd-dark-green text-white px-8 py-3 rounded shadow hover:bg-bd-green transition-all font-semibold">
                বিস্তারিত জানুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
