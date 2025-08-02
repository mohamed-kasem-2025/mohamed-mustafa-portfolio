import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const handleLanguageChange = () => {
      const htmlElement = document.documentElement;
      setIsEnglish(htmlElement.lang === 'en');
    };

    handleLanguageChange();
    
    const observer = new MutationObserver(handleLanguageChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-portfolio-primary border-t border-portfolio-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Bottom Section */}
          <div className="text-center py-8">
            <div className="text-portfolio-text-muted font-montserrat">
              <span>
                {isEnglish 
                  ? `© ${currentYear} Mohamed Mostafa. All rights reserved` 
                  : `© ${currentYear} محمد مصطفى. جميع الحقوق محفوظة`
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;