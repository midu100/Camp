import { ArrowRight } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import candidate from "../assets/img/abu-sufian2.jpg";
import { Link, useNavigate } from "react-router-dom";
import Btn from "./common/Btn";

export default function Hero() {
  const navigate = useNavigate()

  const handleBtn = ()=>{
    navigate('/advice')
  }


  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Local Image Asset - reliable loading */}
        <img
          src="/hero-bg.png"
          alt="Campaign Crowd Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Green Overlay Gradient - EXACT match to reference style */}
        <div className="absolute inset-0 bg-bd-green/90 mix-blend-multiply"></div>
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content (Left Side) */}
          <div className="text-center md:text-left space-y-6 animate-fade-in-up">
            <h2 className="text-xl md:text-2xl font-semibold text-white/90">
              উন্নয়নের মার্কা,ধানের শীষ মার্কা।
            </h2>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              দেশ গড়বো <br />
              <span className="text-bd-red drop-shadow-md">নতুন শপথে</span>
            </h1>

            <p className="text-lg text-white/80 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              আপনার এলাকার উন্নয়নে, সততা ও নিষ্ঠার সাথে পাশে থাকবো। আসুন সবাই
              মিলে এক নতুন বাংলাদেশ গড়ে তুলি।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 items-center">
              {/* <button onClick={handleBtn} className="flex items-center justify-center gap-2 bg-bd-red text-white px-8 py-3 rounded shadow-lg hover:bg-red-700 transition-all font-bold text-lg">
                যোগাযোগ করুন
              </button> */}
              <Btn onClick={handleBtn} Name={'যোগাযোগ করুন'}/>
              
              {/* Social Media Links */}
              <div className="flex gap-4">
                  <Link to="#" className="w-12 h-12 bg-white text-[#1877F2] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform group">
                     <FaFacebook size={24} />
                  </Link>
                  <Link to="#" className="w-12 h-12 bg-white text-[#FF0000] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#FF0000] hover:text-white transition-all duration-300 transform group">
                     <FaYoutube size={24} />
                  </Link>
              </div>
            </div>
          </div>

          {/* Hero Image (Right Side) */}
          <div className="relative flex justify-center md:justify-end">
            {/* Circular Image Container with White Border */}
            {/* <div className="flex-1 hidden md:flex justify-center">
              <img
                src={candidate}
                alt="Candidate"
                className="w-[380px] h-[380px] rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div> */}

             <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full border-[12px] border-white/90 shadow-2xl overflow-hidden bg-gray-200 flex items-center justify-center shrink-0">
               <div className="flex-1 md:flex justify-center">
                  {/* <span className="text-6xl mb-2">👋</span>
                  <p className="text-xl font-medium">Candidate Photo</p> */}
                  <img src={candidate} alt='img'  className="w-[380px] h-[380px] rounded-full border-4 border-white object-cover shadow-lg"/>
               </div>
               {/* Placeholder for Candidate Image */}
               
               {/* Optional: If actual image exists, remove the above div and use img tag */}
               {/* <img src="/path/to/image.jpg" alt="Candidate" className="w-full h-full object-cover" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
