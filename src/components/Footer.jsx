import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white border-t-4 border-bd-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          <div className="md:col-span-2 space-y-4">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-bd-green flex items-center justify-center rounded-sm font-bold text-white">আ</div>
                <span className="text-2xl font-bold">আবু সুফিয়ান</span>
             </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              একটি সমৃদ্ধ, উন্নত ও নিরাপদ বাংলাদেশ গড়ার লক্ষ্যে আমরা কাজ করছি। আপনার সমর্থন আমাদের একান্ত কাম্য।
            </p>
          </div>

          <div>
             <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">মেনু</h4>
             <ul className="space-y-3 text-gray-400">
                <li data-aos="fade-up" data-aos-duration="3000"><a href="#home" className="hover:text-bd-gold transition-colors block">হোম</a></li>
                <li data-aos="fade-up" data-aos-duration="3000"><a href="#about" className="hover:text-bd-gold transition-colors block">পরিচিতি</a></li>
                <li data-aos="fade-up" data-aos-duration="3000"><a href="#vision" className="hover:text-bd-gold transition-colors block">রূপকল্প ২০২৬</a></li>
                <li data-aos="fade-up" data-aos-duration="3000"><a href="#contact" className="hover:text-bd-gold transition-colors block">যোগাযোগ</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">অন্যান্য</h4>
             <ul className="space-y-3 text-gray-400">
                <li data-aos="fade-up" data-aos-duration="3000"><a href="#" className="hover:text-bd-gold transition-colors block">নির্বাচনী ইশতেহার</a></li>
                <li data-aos="fade-up" data-aos-duration="3000"><a href="#" className="hover:text-bd-gold transition-colors block">মিডিয়া গ্যালারি</a></li>
                <li data-aos="fade-up" data-aos-duration="3000"><a href="#" className="hover:text-bd-gold transition-colors block">স্বেচ্ছাসেবী নিবন্ধন</a></li>
             </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-gray-500 text-sm">
          <p>&copy; 2026 Election Campaign.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-bd-red fill-bd-red" /> for Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
