import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Using Lucide for the menu/close icons like before
import { FaFlag } from 'react-icons/fa'; // Using FontAwesome for the flag logo as per new content

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar (Original Style)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '/' },
    { name: 'পরিচিতি', href: '/about' },
    { name: 'ইশতেহার', href: '/vision' }, // Mapped to Vision section
    { name: 'গ্যালারি', href: '/gallery' }, // Placeholder for Gallery
    { name: 'পরামর্শ', href: '/advice' },
    { name: 'যোগাযোগ', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Content updated to "Rafiqul Islam", Style preserved but integrated Flag */}
          <div className="flex-shrink-0 flex items-center gap-2">
             <div className={`text-2xl ${scrolled ? 'text-bd-green' : 'text-white'} transition-colors`}>
                <FaFlag />
             </div>
             <a href="/" className={`font-bold text-2xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              আবু <span className="text-bd-red">সুফিয়ান</span>
            </a>
          </div>

          {/* Desktop Menu - Original Layout, New Content */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 hover:text-bd-red ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-bd-red focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-bd-green hover:bg-green-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
