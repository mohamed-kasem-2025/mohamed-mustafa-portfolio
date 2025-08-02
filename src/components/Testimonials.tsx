import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import ProtectedMedia from './ProtectedMedia';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      nameEn: 'Ahmed Mohamed',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: 'شغل متقن جدًا وزوق في التعامل.',
      textEn: 'Very precise work and great taste in dealing.',
      rating: 5
    },
    {
      id: 2,
      name: 'فاطمة',
      nameEn: 'Fatma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      text: 'رجعلي صورة جدي القديمة كأنها اتصورت امبارح.',
      textEn: 'He restored my grandfather\'s old photo as if it was taken yesterday.',
      rating: 5
    },
    {
      id: 3,
      name: 'محمود حسن',
      nameEn: 'Mahmoud Hassan',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      text: 'التصميمات كانت دايمًا جاهزة قبل الميعاد.',
      textEn: 'The designs were always ready before the deadline.',
      rating: 5
    },
    {
      id: 4,
      name: 'مريم',
      nameEn: 'Maryam',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: 'أحسن مصمم تعاملت معاه، فاهم الشغل كويس.',
      textEn: 'Best designer I worked with, understands the work well.',
      rating: 5
    },
    {
      id: 5,
      name: 'عمر خالد',
      nameEn: 'Omar Khaled',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      text: 'الجودة عالية والأسعار معقولة جدًا.',
      textEn: 'High quality and very reasonable prices.',
      rating: 5
    },
    {
      id: 6,
      name: 'سارة محمد',
      nameEn: 'Sara Mohamed',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      text: 'صبور في التعديلات ومتفهم لكل التفاصيل.',
      textEn: 'Patient with revisions and understands every detail.',
      rating: 5
    },
    {
      id: 7,
      name: 'يوسف',
      nameEn: 'Youssef',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
      text: 'شغله نضيف ومرتب، وبيسلم في الوقت المحدد.',
      textEn: 'His work is clean and organized, and he delivers on time.',
      rating: 5
    },
    {
      id: 8,
      name: 'هدى صلاح',
      nameEn: 'Hoda Salah',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      text: 'فنان حقيقي، بيخلي الفكرة تطلع أحلى مما تتخيل.',
      textEn: 'A true artist, makes ideas come out better than you imagine.',
      rating: 5
    },
    {
      id: 9,
      name: 'كريم',
      nameEn: 'Karim',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face',
      text: 'تعامل راقي ومهني، أنصح بشدة بالتعامل معاه.',
      textEn: 'Elegant and professional dealing, I highly recommend working with him.',
      rating: 5
    },
    {
      id: 10,
      name: 'نور الدين',
      nameEn: 'Nour Eldin',
      avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
      text: 'بيفهم اللي عايزه بسرعة ومابيخليكيش تشرح كتير.',
      textEn: 'He understands what you want quickly and doesn\'t make you explain much.',
      rating: 5
    },
    {
      id: 11,
      name: 'رانيا',
      nameEn: 'Rania',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face',
      text: 'النتيجة النهائية كانت أكتر من توقعاتي بكتير.',
      textEn: 'The final result was way beyond my expectations.',
      rating: 5
    },
    {
      id: 12,
      name: 'طارق فؤاد',
      nameEn: 'Tarek Fouad',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      text: 'محترف في شغله وملتزم بالمواعيد دايمًا.',
      textEn: 'Professional in his work and always committed to deadlines.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-portfolio-accent fill-current' : 'text-portfolio-text-muted'}
      />
    ));
  };

  return (
    <section id="testimonials" className="portfolio-section bg-portfolio-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-4">
              <span className="text-white">{isEnglish ? 'Client Reviews' : 'آراء العملاء'}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-portfolio-text-muted font-montserrat max-w-2xl mx-auto">
              {isEnglish ? 'What our clients say about their experience with us' : 'عملاؤنا رأيهم اية بعد ما تعاملو معانا'}
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-6">
                      {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial) => (
                        <div key={testimonial.id} className="portfolio-card text-center">
                          {/* Profile Image */}
                          <div className="flex justify-center mb-4">
                            <ProtectedMedia>
                              <img
                                src={testimonial.avatar}
                                alt={isEnglish ? testimonial.nameEn : testimonial.name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-portfolio-accent"
                              />
                            </ProtectedMedia>
                          </div>

                          {/* Rating */}
                          <div className="flex justify-center gap-1 mb-4">
                            {renderStars(testimonial.rating)}
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-portfolio-text font-montserrat text-base mb-6 leading-relaxed">
                            {isEnglish ? testimonial.textEn : testimonial.text}
                          </p>

                          {/* Client Name */}
                          <h4 className="font-cairo font-bold text-portfolio-accent">
                            {isEnglish ? testimonial.nameEn : testimonial.name}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-portfolio-accent text-portfolio-primary w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-portfolio-accent text-portfolio-primary w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-portfolio-accent' : 'bg-portfolio-text-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;