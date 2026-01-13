import { BookOpen, Stethoscope, Hammer, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export default function Vision() {
  const visions = [
    {
      icon: <BookOpen size={28} />,
      title: "মানসম্মত শিক্ষা",
      desc: "প্রতিটি গ্রাম ও মহল্লায় শিক্ষার আলো ছড়িয়ে দেওয়া এবং স্কুল-কলেজের অবকাঠামোগত উন্নয়ন।"
    },
    {
      icon: <Stethoscope size={28} />,
      title: "উন্নত স্বাস্থ্যসেবা",
      desc: "কমিউনিটি ক্লিনিক আধুনিকায়ন এবং সকল নাগরিকের জন্য স্বাস্থ্যসেবা নিশ্চিত করা।"
    },
    {
      icon: <Hammer size={28} />,
      title: "অবকাঠামো উন্নয়ন",
      desc: "রাস্তাঘাট পাকা করা এবং ড্রেনেজ ব্যবস্থার স্থায়ী সমাধান, যাতে জলাবদ্ধতা নিরসন হয়।"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "কর্মসংস্থান",
      desc: "বেকার যুবকদের জন্য কারিগরি প্রশিক্ষণের ব্যবস্থা এবং নতুন কর্মসংস্থান তৈরি করা।"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "মাদকমুক্ত সমাজ",
      desc: "যুব সমাজকে মাদকের করাল গ্রাস থেকে বাঁচাতে খেলাধুলা ও সাংস্কৃতিক চর্চার প্রসার।"
    },
    {
      icon: <Users size={28} />,
      title: "নারীর ক্ষমতায়ন",
      desc: "নারীদের আত্মনির্ভরশীল করে গড়ে তোলা এবং তাদের নিরাপত্তা নিশ্চিত করা।"
    }
  ];

  return (
    <section id="vision" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-bd-red font-bold tracking-widest uppercase text-sm">আমাদের অঙ্গীকার</span>
          <h3 data-aos="fade-up" data-aos-duration="1500" className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">ভবিষ্যৎ কর্মপরিকল্পনা</h3>
          <div className="w-24 h-1 bg-bd-green mx-auto rounded-full"></div>
        </div>

        <div data-aos="fade-up"  data-aos-duration="1500" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visions.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded border-b-4 border-transparent hover:border-bd-red shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center text-bd-green mb-6 group-hover:bg-bd-green group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
