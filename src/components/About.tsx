
import { Camera, Video, Palette, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const About = () => {
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

  const skills = [
    'الإليستريتور',
    'موشن جرافيك', 
    'انتاج الفيديو',
    'أدوات الذكاء الاصطناعي'
  ];

  const stats = [
    { icon: Camera, value: '+19', label: 'سنوات خبرة', labelEn: 'Years Experience' },
    { icon: Video, value: '+5000', label: 'مشروع مكتمل', labelEn: 'Completed Projects' },
    { icon: Palette, value: '24/7', label: 'متاح للعمل', labelEn: 'Available to Work' },
    { icon: Zap, value: '3', label: 'ساعات ابدع شتليم', labelEn: 'Hours Quick Delivery' },
  ];

  return (
    <section id="about" className="portfolio-section bg-portfolio-bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-4">
              <span className="text-white">{isEnglish ? 'About Me' : 'نبذة عني'}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Skills Section */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-cairo font-bold text-portfolio-accent mb-6">
                {isEnglish ? 'Technical Skills' : 'المهارات التقنية'}
              </h3>
              
              <p className="text-portfolio-text-muted mb-8 font-montserrat leading-relaxed text-lg">
                {isEnglish ? 
                  "I'm Mohamed, a passionate graphic designer with over 19 years of experience creating engaging and impactful visual experiences. Using various design software including Illustrator, After Effects, DaVinci, and AI tools, my journey started with a love for colors, shapes, and design. This passion grew with me and turned into a strong balance between creativity and application, to deliver visual work that reaches people and builds trust in them. I worked with photography studios and service companies throughout Egypt, where my work always focused on turning ideas into tangible designs that leave a real mark." :
                  'أنا محمد، مصمم جرافيك شغوف، عندي خبرة أكثر من 19 سنة في تصميم تجارب بصرية جذابة ومؤثرة. بإستخدام مختلف برامج التصميم منها الإليستريتر والإليزاتورز وكافينا وأكيد أدوات الذكاء الاصطناعي، بدأت رحلتي بحب الألوان والأشكال والتصميم والحب ده كبر معايا وتحول لمحارب قوي بين الإبداع والتطبيق، عشان أقدم شغل بصري يوصل للناس ولناء فيهم، اشتغلت مع استوديوهات تصوير فوتوغرافي وشركات خدمية. جوه زغرة مصر كان شغلي دايقاً يركز على تحويل الأفكار لتصميمات ملموسة وتتسب بصمة حقيقية.'
                }
              </p>

            </div>

            {/* Image Section */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-portfolio-card rounded-2xl p-8 shadow-portfolio-glow">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 bg-portfolio-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent size={24} className="text-portfolio-primary" />
                          </div>
                          <div className="text-2xl font-cairo font-bold text-portfolio-accent mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm text-portfolio-text-muted font-montserrat">
                            {isEnglish ? stat.labelEn : stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
