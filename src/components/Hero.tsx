import { Download, X } from 'lucide-react';
const profileImage = '/lovable-uploads/a9fc3c32-d0e1-4f3c-bce4-f57330712d21.png';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);

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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-portfolio-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-portfolio-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-portfolio-accent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-60 h-60 mx-auto relative cursor-pointer" onClick={() => setShowImagePopup(true)}>
              <div className="absolute inset-0 bg-gradient-accent rounded-full p-1">
                <img
                  src={profileImage}
                  alt="Mohamed Mustafa"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: '50% 15%' }}
                />
              </div>
              <div className="absolute -inset-2 bg-portfolio-accent rounded-full blur opacity-8 animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-cairo font-bold mb-6">
            {isEnglish ? (
              <>
                <span className="text-white">Mohamed </span>
                <span className="text-white">Mostafa</span>
              </>
            ) : (
              <>
                <span className="text-white">محمد </span>
                <span className="text-white">مصطفى</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-4 font-cairo font-medium">
            {isEnglish 
              ? "Senior Graphic Designer & Visual Marketer"
              : "مصمم جرافيك محترف ومسوق بصري"
            }
          </p>

          {/* Description */}
          <p className="text-white mb-8 max-w-4xl mx-auto font-cairo font-light leading-relaxed">
            {isEnglish
              ? <span className="text-sm whitespace-nowrap">"Over 19 years of transforming design into images and videos that tell stories and deliver messages"</span>
              : "\"أكثر من 19 سنة بحلي التصميم في صورة أو فيديو يحكي قصة ويوصل الرسالة\""
            }
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <a
              href="#portfolio"
              className="btn-primary inline-flex items-center gap-3 text-lg font-montserrat"
            >
              <Download size={20} />
              {isEnglish ? "View My Work" : "شوف شغلي"}
            </a>
          </div>

        </div>
      </div>

      {/* Image Popup */}
      {showImagePopup && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setShowImagePopup(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setShowImagePopup(false)}
              className="absolute -top-12 right-0 text-white hover:text-portfolio-accent transition-colors z-10"
            >
              <X size={32} />
            </button>
            <img
              src={profileImage}
              alt="Mohamed Mustafa"
              className="w-full h-full object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;