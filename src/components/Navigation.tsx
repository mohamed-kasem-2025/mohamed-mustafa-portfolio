import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isEnglish, setIsEnglish] = useState(true);

  const navItems = [
    { name: 'الرئيسية', href: '#home', nameEn: 'Home' },
    { name: 'نبذة عني', href: '#about', nameEn: 'About' },
    { name: 'الخدمات', href: '#services', nameEn: 'Services' },
    { name: 'نبذة من شغلي', href: '#portfolio', nameEn: 'Portfolio' },
    { name: 'آراء العملاء', href: '#testimonials', nameEn: 'Testimonials' },
    { name: 'تواصل معايا', href: '#contact', nameEn: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
    document.documentElement.lang = isEnglish ? 'en' : 'ar';
  }, [isEnglish]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-portfolio-bg/95 backdrop-blur-sm border-b border-portfolio-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-cairo font-bold text-white">
              {isEnglish ? 'MOHAMED MOSTAPHA' : 'محمد مصطفى'}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`hover:text-portfolio-accent transition-colors duration-300 font-montserrat font-medium ${
                    activeSection === item.href.substring(1) ? 'text-portfolio-accent font-bold' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isEnglish ? item.nameEn : item.name}
                </a>
              ))}
            </div>
          </div>
            
          {/* Language Toggle */}
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="border border-portfolio-accent text-portfolio-accent px-3 py-1.5 rounded-md font-montserrat font-medium hover:bg-portfolio-accent hover:text-portfolio-primary transition-colors duration-300"
          >
            {isEnglish ? 'AR' : 'EN'}
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-portfolio-accent transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-portfolio-card rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 hover:text-portfolio-accent transition-colors duration-300 font-montserrat font-medium ${
                    activeSection === item.href.substring(1) ? 'text-portfolio-accent font-bold' : 'text-portfolio-text'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isEnglish ? item.nameEn : item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;