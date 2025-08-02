
import { Brain, Camera, Upload, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
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

  const services = [
    {
      icon: Brain,
      title: 'الذكاء الاصطناعي',
      titleEn: 'Artificial Intelligence',
      description: 'حلول ذكية ومبتكرة باستخدام أحدث تقنيات الذكاء الاصطناعي',
      descriptionEn: 'Smart and innovative solutions using the latest AI technology',
      details: 'أقدم خدمات متقدمة ومتطورة باستخدام أحدث تقنيات الذكاء الاصطناعي تشمل تحسين وترقية جودة الصور بدقة فائقة، إنشاء المحتوى البصري الإبداعي من النصوص، والتصميم الذكي التفاعلي. أستخدم أقوى الأدوات والمنصات المتاحة مثل Midjourney، DALL-E، وStable Diffusion لتقديم حلول إبداعية ومبتكرة تتجاوز التوقعات وتلبي احتياجاتك بكفاءة عالية وجودة استثنائية.',
      detailsEn: 'I provide advanced services using the latest AI technology including enhancing image quality with incredible precision, creating amazing visual content from text, and smart interactive design. I use the most powerful tools like Midjourney, DALL-E, and Stable Diffusion to deliver creative solutions that go beyond expectations and meet your needs with high quality and exceptional results.'
    },
    {
      icon: Camera,
      title: 'ترميم وتلوين الصور القديمة',
      titleEn: 'Photo Restoration & Colorization',
      description: 'برجع الذكريات للحياة بجودة عالية باستخدام أحدث التقنيات',
      descriptionEn: 'Bringing your memories back to life with high quality using the latest technology',
      details: 'أقدم خدمة ترميم احترافية للصور القديمة المتضررة والتالفة، بما يشمل إزالة البقع والخدوش والتشققات، تحسين الوضوح والجودة، وإضافة الألوان الطبيعية للصور بالأبيض والأسود بدقة تاريخية. أستخدم أحدث تقنيات الفوتوشوب المتقدمة مع أدوات الذكاء الاصطناعي المتطورة لضمان نتائج طبيعية ومذهلة تعيد للصور رونقها الأصلي وتحافظ على تفاصيلها التاريخية الثمينة.',
      detailsEn: 'I offer professional restoration for old and damaged photos, including removing spots, scratches, and cracks, improving clarity and quality, and adding natural colors to black and white photos with historical accuracy. I use advanced Photoshop techniques with cutting-edge AI tools to ensure natural and stunning results that restore the original beauty of your photos while preserving their precious historical details.'
    },
    {
      icon: Upload,
      title: 'تصميمات السوشيال ميديا',
      titleEn: 'Social Media Design',
      description: 'تصميمات جذابة ومؤثرة لجميع منصات التواصل الاجتماعي',
      descriptionEn: 'Eye-catching and impactful designs for all social media platforms',
      details: 'أقدم خدمات تصميم محتوى السوشيال ميديا الاحترافية لجميع المنصات الرقمية بما يشمل فيسبوك، إنستجرام، تويتر، لينكدإن، وسناب شات. أصمم منشورات جذابة، بانرات إعلانية، قوالب ستوريز، وكفرات صفحات بأسلوب عصري ومبتكر يتماشى مع هوية علامتك التجارية. أستخدم أحدث اتجاهات التصميم الرقمي مع تقنيات الذكاء الاصطناعي لإنتاج محتوى بصري يحقق أعلى معدلات التفاعل والانتشار، مع التركيز على الألوان الجذابة والتايبوجرافي المؤثر والتخطيط المتوازن الذي يجذب الانتباه ويحفز على المشاركة.',
      detailsEn: 'I provide professional social media design services for all digital platforms including Facebook, Instagram, Twitter, LinkedIn, and Snapchat. I design attractive posts, advertising banners, story templates, and page covers with a modern and innovative style that matches your brand identity. I use the latest digital design trends with AI technology to create visual content that achieves the highest engagement rates, focusing on attractive colors, impactful typography, and balanced layouts that grab attention and encourage sharing.'
    },
    {
      icon: Video,
      title: 'إنشاء ومونتاج الفيديو',
      titleEn: 'Video Creation & Editing',
      description: 'إنتاج ومونتاج احترافي للفيديوهات التسويقية والإعلانية',
      descriptionEn: 'Professional production and editing of marketing and advertising videos',
      details: 'أقدم خدمات إنتاج ومونتاج الفيديو الاحترافية للشركات والأفراد، بما يشمل الفيديوهات التسويقية، الإعلانية، التعريفية، والترويجية. أستخدم أحدث برامج المونتاج المتخصصة مثل Adobe Premiere Pro وDaVinci Resolve مع تقنيات الذكاء الاصطناعي المتطورة لإنتاج محتوى بصري عالي الجودة والدقة. أركز على السرد البصري المؤثر، التأثيرات الحديثة، والموسيقى التصويرية المناسبة لإنتاج فيديوهات تحقق أهدافك التسويقية وتترك انطباعاً لا يُنسى.',
      detailsEn: 'I offer professional video production and editing services for companies and individuals, including marketing, advertising, informational, and promotional videos. I use the latest specialized editing software like Adobe Premiere Pro and DaVinci Resolve with advanced AI technology to produce high-quality visual content. I focus on impactful visual storytelling, modern effects, and appropriate soundtracks to create videos that achieve your marketing goals and leave an unforgettable impression.'
    }
  ];

  return (
    <section id="services" className="portfolio-section bg-portfolio-bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-4">
              <span className="text-white">{isEnglish ? 'My Services' : 'الخدمات'}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-portfolio-text-muted font-montserrat max-w-2xl mx-auto">
              {isEnglish ? 'Complete design services to meet all your digital needs' : 'خدمات تصميم متكاملة لتلبية جميع احتياجاتك الرقمية'}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isExpanded = expandedService === index;
              return (
                <div key={index} className="portfolio-card text-center group py-6">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-portfolio-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-portfolio-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-cairo font-bold text-white mb-4">
                    {isEnglish ? service.titleEn : service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-portfolio-text-muted font-montserrat mb-6 leading-relaxed">
                    {isEnglish ? service.descriptionEn : service.description}
                  </p>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mb-6 animate-fade-in">
                      <p className="text-portfolio-text-muted font-montserrat text-sm leading-relaxed text-justify">
                        {isEnglish ? service.detailsEn : service.details}
                      </p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="btn-secondary border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-primary"
                    onClick={() => setExpandedService(isExpanded ? null : index)}
                  >
                    {isExpanded ? (isEnglish ? 'Show Less' : 'اعرض أقل') : (isEnglish ? 'Learn More' : 'اعرف أكثر')}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
