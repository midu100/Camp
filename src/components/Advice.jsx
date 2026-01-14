import { Link } from "react-router";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFacebookF } from "react-icons/fa";

export default function Advice() {
  const representatives = [
    {
      name: "জনাব আব্দুল মালেক",
      title: "প্রধান সমন্বয়ক",
      phone: "+8801788523456",
      displayPhone: "০১৭৮৮-৫২৩৪৫৬",
      actionType: "whatsapp",
      actionText: "WhatsApp এ মেসেজ দিন",
      actionLink: "https://wa.me/8801788523456",
      icon: <FaWhatsapp size={20} />,
      btnColor: "text-green-600",
      borderColor: "border-bd-green"
    },
    {
      name: "ব্যারিস্টার সুমন আহমেদ",
      title: "আইন বিষয়ক উপদেষ্টা",
      phone: "+8801899987654",
      displayPhone: "০১৮৯৯-৯৮৭৬৫৪",
      actionType: "email",
      actionText: "lawyer@example.com",
      actionLink: "mailto:lawyer@example.com",
      icon: <FaEnvelope size={20} />,
      btnColor: "text-gray-700",
      borderColor: "border-bd-red"
    },
    {
      name: "মোঃ ইব্রাহিম খলিল",
      title: "যুব প্রতিনিধি",
      phone: "+8801566567890",
      displayPhone: "০১৫৬৬-৫৬৭৮৯০",
      actionType: "facebook",
      actionText: "ফেসবুকে নক দিন",
      actionLink: "https://facebook.com/",
      icon: <FaFacebookF size={20} />,
      btnColor: "text-blue-600",
      borderColor: "border-bd-green"
    }
  ];

  return (
    <section id="advice" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-3xl md:text-5xl font-bold text-bd-green"
          >
            অভিযোগ ও পরামর্শ
          </h2>
          <div className="w-24 h-1 bg-bd-red mx-auto rounded-full"></div>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-gray-600 text-lg max-w-2xl mx-auto pt-4"
          >
            আপনার এলাকার উন্নয়নে যে কোনো পরামর্শ বা অভিযোগ জানাতে আমাদের
            প্রতিনিধিদের সাথে সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {representatives.map((rep, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 ${rep.borderColor} p-8 text-center group`}
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-bd-green mb-1">
                {rep.name}
              </h3>
              <p className="text-bd-red font-semibold mb-6">{rep.title}</p>

              <div className="space-y-3">
                {/* Call */}
                <Link
                  to={`tel:${rep.phone}`}
                  className="flex items-center justify-center gap-2 text-gray-700 font-medium hover:underline"
                >
                  <FaPhoneAlt className="text-bd-green" />
                  <span>{rep.displayPhone}</span>
                </Link>

                {/* Action */}
                <Link
                  to={rep.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 font-medium ${rep.btnColor}`}
                >
                  {rep.icon}
                  <span>{rep.actionText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
