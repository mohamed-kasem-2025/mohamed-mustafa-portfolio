
import { Mail, Phone, MapPin, Send, MessageCircle, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, useEffect } from 'react';

const Contact = () => {
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
  const contactInfo = [
    {
      icon: Mail,
      label: 'البريد الإلكتروني',
      labelEn: 'Email',
      value: 'mohamed.mostapha.kasem@gmail.com',
      link: 'mailto:mohamed.mostapha.kasem@gmail.com'
    },
    {
      icon: Phone,
      label: 'رقم الهاتف',
      labelEn: 'Phone Number',
      value: '+20 122 452 1271',
      link: 'tel:+201224521271'
    },
    {
      icon: MapPin,
      label: 'الموقع',
      labelEn: 'Location',
      value: 'القاهرة، مصر',
      valueEn: 'Cairo, Egypt',
      link: 'https://maps.app.goo.gl/A1TJQy71hSsDo6Jo7'
    }
  ];

  const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
    { icon: MapPin, label: 'Location', href: '#' }
  ];

  return (
    <section id="contact" className="portfolio-section bg-portfolio-bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-4">
              <span className="text-white">{isEnglish ? 'Get In Touch' : 'تواصل معايا'}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-portfolio-text-muted font-montserrat max-w-2xl mx-auto">
              {isEnglish ? 'Let me help you turn your ideas into stunning visual reality' : 'خليني أساعدك في تحويل أفكارك إلى واقع بصري مذهل'}
            </p>
          </div>

          {/* Social Media Icons - With Real Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="mailto:mohamed.mostapha.kasem@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-portfolio-card border border-portfolio-border rounded-full flex items-center justify-center hover:bg-portfolio-accent hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Mail size={24} className="text-portfolio-text hover:text-portfolio-primary" />
            </a>
            <a 
              href="https://wa.me/201224521271" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-portfolio-card border border-portfolio-border rounded-full flex items-center justify-center hover:bg-portfolio-accent hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <MessageCircle size={24} className="text-portfolio-text hover:text-portfolio-primary" />
            </a>
            <a 
              href="https://www.facebook.com/Senior.PhotoShop.Designer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-portfolio-card border border-portfolio-border rounded-full flex items-center justify-center hover:bg-portfolio-accent hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Facebook size={24} className="text-portfolio-text hover:text-portfolio-primary" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-mustafa-portfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-portfolio-card border border-portfolio-border rounded-full flex items-center justify-center hover:bg-portfolio-accent hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Linkedin size={24} className="text-portfolio-text hover:text-portfolio-primary" />
            </a>
            <a 
              href="https://maps.app.goo.gl/A1TJQy71hSsDo6Jo7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-portfolio-card border border-portfolio-border rounded-full flex items-center justify-center hover:bg-portfolio-accent hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <MapPin size={24} className="text-portfolio-text hover:text-portfolio-primary" />
            </a>
          </div>

          {/* Call to Action Card */}
          <div className="max-w-md mx-auto">
            <div className="portfolio-card text-center bg-gradient-accent">
              <h3 className="text-2xl font-cairo font-bold text-portfolio-primary mb-4">
                {isEnglish ? 'Ready to Start Your Project?' : 'جاهز لبدء مشروعك؟'}
              </h3>
              <p className="text-portfolio-primary font-montserrat mb-6">
                {isEnglish ? 'Contact me now and let us turn your ideas into amazing designs' : 'تواصل معي الآن ودعنا نحول أفكارك إلى تصميمات مذهلة'}
              </p>
              <a 
                href="https://www.fiverr.com/s/6Y86mVN" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-portfolio-primary"
                >
                  {isEnglish ? 'Start Your Project' : 'ابدأ مشروعك'}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
