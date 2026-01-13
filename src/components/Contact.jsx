import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="">
      {/* 1. The Main Form Section (Matches User Image) */}
      <div className="bg-bd-green py-20 relative overflow-hidden">
        {/* Background Pattern (Optional texture) */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-10">
            <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-5xl font-bold text-white mb-4">যোগাযোগ করুন / স্বেচ্ছাসেবী হন</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="space-y-2">
                {/* <label className="text-white text-sm font-semibold ml-1">আপনার নাম</label> */}
                <input data-aos="fade-up" data-aos-duration="1000"
                  type="text" 
                  placeholder="আপনার নাম" 
                  className="w-full px-5 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:ring-4 focus:ring-green-400/30 focus:outline-none transition-all shadow-sm" 
                />
              </div>

              <div className="space-y-2">
                 {/* <label className="text-white text-sm font-semibold ml-1">আপনার ইমেইল/ফোন</label> */}
                <input data-aos="fade-up" data-aos-duration="1500"
                  type="text" 
                  placeholder="আপনার ইমেইল/ফোন" 
                  className="w-full px-5 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:ring-4 focus:ring-green-400/30 focus:outline-none transition-all shadow-sm" 
                />
              </div>

              <div className="space-y-2">
                 {/* <label className="text-white text-sm font-semibold ml-1">আপনার বার্তা বা পরামর্শ</label> */}
                <textarea data-aos="fade-up" data-aos-duration="2000"
                  rows="4" 
                  placeholder="আপনার বার্তা বা পরামর্শ..." 
                  className="w-full px-5 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:ring-4 focus:ring-green-400/30 focus:outline-none transition-all resize-none shadow-sm"
                ></textarea>
              </div>

              <button className="w-full bg-white text-bd-green font-bold text-xl py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                বার্তা পাঠান
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* 2. Secondary Info Section (Map & Address - Kept for utility but visually separated) */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Info Cards */}
              <div className="space-y-6">
                 <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-bd-green pl-4">সরাসরি যোগাযোগ</h3>
                 </div>
                 
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-green-50 text-bd-green rounded-full flex items-center justify-center group-hover:bg-bd-green group-hover:text-white transition-colors">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <p className="font-bold text-gray-900">অফিস ঠিকারা</p>
                       <p className="text-gray-600">১২৩, প্রধান সড়ক, ঢাকা-১০০০</p>
                    </div>
                 </div>

                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-green-50 text-bd-green rounded-full flex items-center justify-center group-hover:bg-bd-green group-hover:text-white transition-colors">
                       <Phone size={24} />
                    </div>
                    <div>
                       <p className="font-bold text-gray-900">হটলাইন</p>
                       <p className="text-gray-600">+৮৮০ ১৭১১-০০০০০০</p>
                    </div>
                 </div>

                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-green-50 text-bd-green rounded-full flex items-center justify-center group-hover:bg-bd-green group-hover:text-white transition-colors">
                       <Mail size={24} />
                    </div>
                    <div>
                       <p className="font-bold text-gray-900">ইমেইল</p>
                       <p className="text-gray-600">contact@campaign.com</p>
                    </div>
                 </div>
              </div>

              {/* Mini Map */}
              <div className="bg-white p-2 rounded-xl shadow-lg h-[400px]">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223924372!2d90.27923775747219!3d23.780887456211758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{border:0, borderRadius: '8px'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
