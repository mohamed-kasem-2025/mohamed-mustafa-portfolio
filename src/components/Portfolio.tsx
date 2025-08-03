import { useState, useEffect, useRef } from 'react';
import { X, Play } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import BeforeAfterComparison from './BeforeAfterComparison';
import ProtectedMedia from './ProtectedMedia';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [lightboxContent, setLightboxContent] = useState<{type: 'image' | 'video', src: string, embedSrc?: string} | null>(null);
  const [isEnglish, setIsEnglish] = useState(false);
  const [openPopover, setOpenPopover] = useState<string | null>(null);

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

  const categories = [
    { ar: 'ترميم وتلوين الصور القديمة', en: 'Photo Restoration & Colorization' },
    { ar: 'مطبوعات وسوشيال ميديا', en: 'Print & Social Media' },
    { ar: 'انتاج ومونتاج فيديو', en: 'Video Production & Editing' },
    { ar: 'الذكاء الاصطناعي', en: 'Artificial Intelligence' }
  ];

  // Portfolio items with real work
  const portfolioItems = [
    {
      id: 1,
      category: 'الذكاء الاصطناعي',
      title: 'تغيير الملابس باحترافية',
      titleEn: 'Professional Clothing Change',
      description: 'إنتاج فيديو باستخدام تقنيات الذكاء الاصطناعي المتقدمة',
      descriptionEn: 'Video production using advanced artificial intelligence techniques',
      image: 'https://drive.google.com/thumbnail?id=13vNXIZWr3chlq-3hsRXP8292AuUmHIF6&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/13vNXIZWr3chlq-3hsRXP8292AuUmHIF6/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/13vNXIZWr3chlq-3hsRXP8292AuUmHIF6/preview',
      details: {
        tools: 'AI Tools, Adobe After Effects',
        year: '2024',
        category: 'AI Video Production'
      }
    },
    {
      id: 47,
      category: 'الذكاء الاصطناعي',
      title: 'خلفيات مناسبة تليق بمنتجك',
      titleEn: 'Suitable Backgrounds for Your Product',
      description: 'فيديو إبداعي منتج بتقنيات الذكاء الاصطناعي',
      descriptionEn: 'Creative video produced with artificial intelligence techniques',
      image: 'https://drive.google.com/thumbnail?id=1GVXTxmwTZqXlTx1eabzfBdQwS2FOmSTg&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1GVXTxmwTZqXlTx1eabzfBdQwS2FOmSTg/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1GVXTxmwTZqXlTx1eabzfBdQwS2FOmSTg/preview',
      details: {
        tools: 'AI Tools, Adobe After Effects',
        year: '2024',
        category: 'AI Video Production'
      }
    },
    {
      id: 48,
      category: 'الذكاء الاصطناعي',
      title: 'تحريك صورة ثابتة حركة بناءا على طلبك',
      titleEn: 'Animate Static Image Based on Your Request',
      description: 'محتوى بصري مبتكر باستخدام الذكاء الاصطناعي',
      descriptionEn: 'Innovative visual content using artificial intelligence',
      image: 'https://drive.google.com/thumbnail?id=1MgS0_Zr2ld22bjGI7eJ092jEVooFYqf-&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1MgS0_Zr2ld22bjGI7eJ092jEVooFYqf-/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1MgS0_Zr2ld22bjGI7eJ092jEVooFYqf-/preview',
      details: {
        tools: 'AI Tools, Adobe After Effects',
        year: '2024',
        category: 'AI Video Production'
      }
    },
    {
      id: 49,
      category: 'الذكاء الاصطناعي',
      title: 'تغيير المناخ والاضاءة والتوقيت لاى صورة او مكان',
      titleEn: 'Change Climate, Lighting and Timing for Any Image or Place',
      description: 'عمل فني بصري متطور باستخدام تقنيات الذكاء الاصطناعي',
      descriptionEn: 'Advanced visual artwork using artificial intelligence techniques',
      image: 'https://drive.google.com/thumbnail?id=1TIqzIZSGugHioF5isIdb7f8cSFAX_-JS&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1TIqzIZSGugHioF5isIdb7f8cSFAX_-JS/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1TIqzIZSGugHioF5isIdb7f8cSFAX_-JS/preview',
      details: {
        tools: 'AI Tools, Adobe After Effects',
        year: '2024',
        category: 'AI Video Production'
      }
    },
    {
      id: 50,
      category: 'الذكاء الاصطناعي',
      title: 'تصميم تخيلى لديكور غرفتك حسب طلبك',
      titleEn: 'Imaginative Design for Your Room Decor as Requested',
      description: 'محتوى مرئي احترافي منتج بالذكاء الاصطناعي',
      descriptionEn: 'Professional visual content produced with artificial intelligence',
      image: 'https://drive.google.com/thumbnail?id=1YlyDYe54dC9sI-gckoBX_gBX3vXJng5K&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1YlyDYe54dC9sI-gckoBX_gBX3vXJng5K/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1YlyDYe54dC9sI-gckoBX_gBX3vXJng5K/preview',
      details: {
        tools: 'AI Tools, Adobe After Effects',
        year: '2024',
        category: 'AI Video Production'
      }
    },
    {
      id: 51,
      category: 'الذكاء الاصطناعي',
      title: 'تغيير حالة وخامة العناصر والبيئة المحيطة لنفس العنصر',
      titleEn: 'Change Elements State, Texture and Environment',
      description: 'إبداع بصري متقدم باستخدام تقنيات الذكاء الاصطناعي الحديثة',
      descriptionEn: 'Advanced visual creativity using modern artificial intelligence techniques',
      image: 'https://drive.google.com/thumbnail?id=1jBaKAkOCrpxrqpJNAvAYyQdY89iTvr70&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1jBaKAkOCrpxrqpJNAvAYyQdY89iTvr70/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1jBaKAkOCrpxrqpJNAvAYyQdY89iTvr70/preview',
      details: {
        tools: 'AI Tools, Adobe After Effects',
        year: '2024',
        category: 'AI Video Production'
      }
    },
    {
      id: 52,
      category: 'الذكاء الاصطناعي',
      title: 'تغيير هيئة العناصر و الافراد والبيئة المحيطة حسب الطلب',
      titleEn: 'Change Elements, People and Environment as Requested',
      description: 'فيديو فني مميز باستخدام أحدث تقنيات الذكاء الاصطناعي',
      descriptionEn: 'Distinctive artistic video using latest artificial intelligence technologies',
      image: 'https://drive.google.com/thumbnail?id=1keSXxFGYNMUXijRtb0X032cielQSgki4&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1keSXxFGYNMUXijRtb0X032cielQSgki4/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1keSXxFGYNMUXijRtb0X032cielQSgki4/preview',
      details: {
        tools: 'AI Tools, Adobe After Effects',
        year: '2024',
        category: 'AI Video Production'
      }
    },
    {
      id: 53,
      category: 'الذكاء الاصطناعي',
      title: 'اختيار موديل مناسب لعرض الملابس',
      titleEn: 'Choose Suitable Model for Clothing Display',
      description: 'عمل بصري إبداعي متطور يظهر قوة الذكاء الاصطناعي في الإنتاج',
      descriptionEn: 'Advanced creative visual work showcasing the power of AI in production',
      image: 'https://drive.google.com/thumbnail?id=1lEJ8eJCL3WP1qvraRLlPr3HkPAMOfiV7&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1lEJ8eJCL3WP1qvraRLlPr3HkPAMOfiV7/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1lEJ8eJCL3WP1qvraRLlPr3HkPAMOfiV7/preview',
      details: {
        tools: 'AI Tools, Adobe After Effects',
        year: '2024',
        category: 'AI Video Production'
      }
    },
    {
      id: 54,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو مونتاج احترافي جديد',
      titleEn: 'New Professional Video Editing',
      description: 'إنتاج ومونتاج فيديو بأحدث التقنيات والأساليب الإبداعية',
      descriptionEn: 'Video production and editing with latest techniques and creative methods',
      image: 'https://drive.google.com/thumbnail?id=1G7GZFU1LQoJHCSFMYaVAPXm-KxWJ1Y8b&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1G7GZFU1LQoJHCSFMYaVAPXm-KxWJ1Y8b/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1G7GZFU1LQoJHCSFMYaVAPXm-KxWJ1Y8b/preview',
      details: {
        duration: 'متنوع',
        durationEn: 'Various',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Professional Video Editing'
      }
    },
    {
      id: 2,
      category: 'ترميم وتلوين الصور القديمة',
      title: 'ترميم الصور التاريخية - المجموعة الأولى',
      titleEn: 'Historical Photo Restoration - Set 1',
      description: 'زوجان مسنان في صورة عائلية قديمة تم ترميمها من حالة التلف والتشقق إلى وضوح تام',
      descriptionEn: 'Elderly couple in vintage family photo restored from damaged and cracked condition to perfect clarity',
      type: 'beforeAfter',
      beforeImage: '/lovable-uploads/4b156190-efad-4d4f-8e17-5aec6cfbf3c3.png',
      afterImage: '/lovable-uploads/4677e7f0-c14a-4829-9309-30a924558d38.png'
    },
    {
      id: 25,
      category: 'ترميم وتلوين الصور القديمة',
      title: 'ترميم الصور التاريخية - المجموعة الثانية',
      titleEn: 'Historical Photo Restoration - Set 2',
      description: 'طفلة صغيرة في صورة قديمة تالفة تم إعادة ترميمها وتلوينها بشكل كامل',
      descriptionEn: 'Little girl in damaged vintage photo fully restored and colorized',
      type: 'beforeAfter',
      beforeImage: '/lovable-uploads/b76a04af-72a1-4e6e-81bd-32736cb35d78.png',
      afterImage: '/lovable-uploads/3e848493-c9b4-4737-a79d-9dbe10ab2a23.png'
    },
    {
      id: 26,
      category: 'ترميم وتلوين الصور القديمة',
      title: 'ترميم الصور التاريخية - المجموعة الثالثة',
      titleEn: 'Historical Photo Restoration - Set 3',
      description: 'فتاة صغيرة في صورة بالأبيض والأسود تم ترميمها وتلوينها بدقة عالية',
      descriptionEn: 'Young girl in black and white photo meticulously restored and colorized',
      type: 'beforeAfter',
      beforeImage: '/lovable-uploads/e6741d40-334d-409e-9a32-0a50caa4abbb.png',
      afterImage: '/lovable-uploads/295de224-a3f8-4fcf-8ceb-1a4d68bde477.png'
    },
    {
      id: 27,
      category: 'ترميم وتلوين الصور القديمة',
      title: 'ترميم الصور التاريخية - المجموعة الرابعة',
      titleEn: 'Historical Photo Restoration - Set 4',
      description: 'فتاة في صورة قديمة متشققة تم إصلاحها وتلوينها بالكامل',
      descriptionEn: 'Girl in cracked old photo completely repaired and colorized',
      type: 'beforeAfter',
      beforeImage: '/lovable-uploads/3b3019ba-a660-46cd-b4d1-97f4f248a7dc.png',
      afterImage: '/lovable-uploads/f1bcf7fd-6d94-4ef6-8bab-abb84333e021.png'
    },
    {
      id: 28,
      category: 'ترميم وتلوين الصور القديمة',
      title: 'ترميم الصور التاريخية - المجموعة الخامسة',
      titleEn: 'Historical Photo Restoration - Set 5',
      description: 'صورة عائلية قديمة تالفة تم ترميمها وإحياؤها بألوان زاهية',
      descriptionEn: 'Damaged old family photo restored and brought to life with vibrant colors',
      type: 'beforeAfter',
      beforeImage: '/lovable-uploads/40e9bd24-fa09-4535-8933-d235bb48cad1.png',
      afterImage: '/lovable-uploads/ab4e23fd-04b0-46c5-bc44-40f37e0871cd.png'
    },
    {
      id: 29,
      category: 'ترميم وتلوين الصور القديمة',
      title: 'ترميم الصور التاريخية - المجموعة السادسة',
      titleEn: 'Historical Photo Restoration - Set 6',
      description: 'طفل صغير في صورة قديمة ممزقة تم ترميمها وتلوينها بشكل رائع',
      descriptionEn: 'Small child in torn old photo beautifully restored and colorized',
      type: 'beforeAfter',
      beforeImage: '/lovable-uploads/1ff9d72e-59ba-4b38-8899-dff9d380ff9f.png',
      afterImage: '/lovable-uploads/78bf7a3c-26fa-42d9-b9ae-6ad21b656621.png'
    },
    {
      id: 30,
      category: 'ترميم وتلوين الصور القديمة',
      title: 'ترميم الصور التاريخية - المجموعة السابعة',
      titleEn: 'Historical Photo Restoration - Set 7',
      description: 'صورة عائلية قديمة بالأبيض والأسود لزوجين وطفل تم ترميمها وتلوينها بشكل كامل',
      descriptionEn: 'Old black and white family photo of couple and child fully restored and colorized',
      type: 'beforeAfter',
      beforeImage: '/lovable-uploads/fd3ff585-79b6-4a98-a92b-7ef52d7f7c5f.png',
      afterImage: '/lovable-uploads/7ddda56f-2821-48cc-852d-64041c001002.png'
    },
    {
      id: 31,
      category: 'ترميم وتلوين الصور القديمة',
      title: 'ترميم الصور التاريخية - المجموعة الثامنة',
      titleEn: 'Historical Photo Restoration - Set 8',
      description: 'صورة عسكرية تاريخية لجنديين في زي عسكري تم ترميمها وتلوينها بدقة عالية',
      descriptionEn: 'Historical military photo of two soldiers in uniform meticulously restored and colorized',
      type: 'beforeAfter',
      beforeImage: '/lovable-uploads/0d1fb543-7e1b-4fcf-b4c9-cd2b8184afea.png',
      afterImage: '/lovable-uploads/93ed9f72-0cdc-450d-964a-f1830217d11e.png'
    },
    {
      id: 3,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان DAHUA SEMINAR',
      titleEn: 'DAHUA SEMINAR Advertisement',
      description: 'تصميم إعلان احترافي للشركة اليابانية للتكنولوجيا - ندوة DAHUA',
      descriptionEn: 'Professional advertisement design for Japanese Technology Company - DAHUA Seminar',
      image: '/lovable-uploads/acb9882a-af0f-444a-9ffe-0eb36ff572c0.png',
      type: 'image',
      details: {
        client: 'شركة اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Company',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Event Advertisement'
      }
    },
    {
      id: 5,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان منتج ZKP8012',
      titleEn: 'ZKP8012 Product Advertisement',
      description: 'تصميم إعلان احترافي لمنتج ZKTeco - جهاز طباعة الهوية الذكية',
      descriptionEn: 'Professional advertisement design for ZKTeco product - Smart ID card printer',
      image: '/lovable-uploads/89b2de87-5dea-40e4-98a8-b3af147001ad.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Product Advertisement'
      }
    },
    {
      id: 6,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان كاميرا Tenda CT3',
      titleEn: 'Tenda CT3 Camera Advertisement',
      description: 'تصميم إعلان لكاميرا المراقبة الخارجية عالية الدقة من Tenda',
      descriptionEn: 'Advertisement design for Tenda outdoor high-definition surveillance camera',
      image: '/lovable-uploads/f7612adc-6934-4c6c-9433-1c787614bc1a.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Product Advertisement'
      }
    },
    {
      id: 7,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان توظيف',
      titleEn: 'Job Hiring Advertisement',
      description: 'تصميم إعلان توظيف جذاب لمسؤول مبيعات بدوام كامل',
      descriptionEn: 'Attractive job hiring advertisement design for full-time sales manager',
      image: '/lovable-uploads/c7103997-2f74-4141-a6e7-2668ccddfce9.png',
      type: 'image',
      details: {
        client: 'عميل خاص',
        clientEn: 'Private Client',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'HR Advertisement'
      }
    },
    {
      id: 8,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان جهاز ZKTeco MB20',
      titleEn: 'ZKTeco MB20 Device Advertisement',
      description: 'تصميم إعلان احترافي لجهاز الحضور والانصراف الذكي MB20',
      descriptionEn: 'Professional advertisement for MB20 smart attendance device',
      image: '/lovable-uploads/eec88503-1363-4d14-bd9c-4035573f680c.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Product Advertisement'
      }
    },
    {
      id: 9,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان عيادات انفينيتي الطبية',
      titleEn: 'Infinity Medical Clinics Advertisement',
      description: 'تصميم إعلان طبي احترافي للدكتورة هالة محمود إبراهيم - أخصائي الأمراض الجلدية',
      descriptionEn: 'Professional medical advertisement for Dr. Hala Mahmoud Ibrahim - Dermatologist',
      image: '/lovable-uploads/7ead6686-ff35-40ca-be7b-6994545d163e.png',
      type: 'image',
      details: {
        client: 'عيادات انفينيتي الطبية',
        clientEn: 'Infinity Medical Clinics',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Medical Advertisement'
      }
    },
    {
      id: 10,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'بوستر حفل موسيقي',
      titleEn: 'Musical Concert Poster',
      description: 'تصميم بوستر حفل موسيقي لـ Mr. Kordy و Muslim في فاميلي بارك بالرحاب',
      descriptionEn: 'Musical concert poster design for Mr. Kordy and Muslim at Family Park Rehab',
      image: '/lovable-uploads/f0eda35e-8cc8-408a-8a84-2ecaf6c34b28.png',
      type: 'image',
      details: {
        client: 'فاميلي بارك',
        clientEn: 'Family Park',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Event Poster'
      }
    },
    {
      id: 11,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'كولاج صور شخصي',
      titleEn: 'Personal Photo Collage',
      description: 'تصميم كولاج إبداعي لعرض الصور الشخصية بأسلوب فني مميز',
      descriptionEn: 'Creative photo collage design showcasing personal photos in a distinctive artistic style',
      image: '/lovable-uploads/8db8f6e2-3221-464e-80f7-4bec3c2b1101.png',
      type: 'image',
      details: {
        client: 'عميل خاص',
        clientEn: 'Private Client',
        tools: 'Adobe Photoshop',
        year: '2023',
        category: 'Personal Design'
      }
    },
    {
      id: 12,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان لوحة مفاتيح AULA F2058',
      titleEn: 'AULA F2058 Keyboard Advertisement',
      description: 'تصميم إعلان احترافي للوحة مفاتيح الألعاب AULA F2058 مع إضاءة RGB',
      descriptionEn: 'Professional advertisement design for AULA F2058 gaming keyboard with RGB lighting',
      image: '/lovable-uploads/bd7a6a3a-c40c-4c8c-954d-540347fbf605.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Product Advertisement'
      }
    },
    {
      id: 13,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان كاميرا Dahua SD-2A200HB',
      titleEn: 'Dahua SD-2A200HB Camera Advertisement',
      description: 'تصميم إعلان احترافي لكاميرا المراقبة الذكية من Dahua مع تقنية التتبع التلقائي',
      descriptionEn: 'Professional advertisement for Dahua smart surveillance camera with auto tracking technology',
      image: '/lovable-uploads/e43c15ce-63d3-4131-a7b9-a1d65c83e416.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Product Advertisement'
      }
    },
    {
      id: 14,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان قريباً Coming Soon',
      titleEn: 'Coming Soon Advertisement',
      description: 'تصميم إعلان تشويقي بتأثير الورق الممزق لإعلان افتتاح قريب',
      descriptionEn: 'Teaser advertisement design with torn paper effect for upcoming launch',
      image: '/lovable-uploads/b7af9676-c6e8-4b7c-806c-f2af67bf7479.png',
      type: 'image',
      details: {
        client: 'عميل خاص',
        clientEn: 'Private Client',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Teaser Advertisement'
      }
    },
    {
      id: 15,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'دعوة زفاف - أفراح آل الشماع',
      titleEn: 'Wedding Invitation - Al Shammaa Family',
      description: 'تصميم دعوة زفاف أنيقة بلمسة فنية راقية وألوان متناسقة',
      descriptionEn: 'Elegant wedding invitation design with artistic touch and harmonious colors',
      image: '/lovable-uploads/ec3900cb-75f8-4e2b-b84f-306d22f661a6.png',
      type: 'image',
      details: {
        client: 'عائلة الشماع',
        clientEn: 'Al Shammaa Family',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Wedding Invitation'
      }
    },
    {
      id: 16,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان كاميرا Tenda CT6',
      titleEn: 'Tenda CT6 Camera Advertisement',
      description: 'تصميم إعلان جذاب لكاميرا المراقبة الخارجية عالية الدقة 2K من Tenda',
      descriptionEn: 'Attractive advertisement design for Tenda outdoor 2K high-definition surveillance camera',
      image: '/lovable-uploads/226249e0-eebf-4359-9da6-34d5d2d0c969.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Product Advertisement'
      }
    },
    {
      id: 17,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان Kingston USB Flash Drive',
      titleEn: 'Kingston USB Flash Drive Advertisement',
      description: 'تصميم إعلان احترافي لذاكرة Kingston USB بسعات متنوعة',
      descriptionEn: 'Professional advertisement design for Kingston USB flash drive with various capacities',
      image: '/lovable-uploads/5fe72cc0-2a08-46a8-9907-24c3d18aaef1.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Product Advertisement'
      }
    },
    {
      id: 18,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'منيو مطعم مودرن',
      titleEn: 'Modern Restaurant Menu',
      description: 'تصميم منيو مطعم عصري ومتكامل بتصميم جذاب وتنظيم مميز للأطباق والأسعار',
      descriptionEn: 'Modern and comprehensive restaurant menu design with attractive layout and organized dishes and prices',
      image: '/lovable-uploads/a9ecb27d-226c-4e2e-aa8f-320a0e9278c2.png',
      type: 'image',
      details: {
        client: 'مطعم مودرن',
        clientEn: 'Modern Restaurant',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Menu Design'
      }
    },
    {
      id: 19,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان معمل اليسر للتحاليل الطبية',
      titleEn: 'Al-Yosr Laboratory Medical Tests Advertisement',
      description: 'تصميم إعلان طبي احترافي لمعمل التحاليل الطبية مع عرض الخدمات المتوفرة',
      descriptionEn: 'Professional medical advertisement design for laboratory with available services display',
      image: '/lovable-uploads/5d3edb47-2449-470f-9c4d-c19ec5f5ebe8.png',
      type: 'image',
      details: {
        client: 'معمل اليسر',
        clientEn: 'Al-Yosr Laboratory',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Medical Advertisement'
      }
    },
    {
      id: 20,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'تصميم كتاب أطفال تعليمي',
      titleEn: 'Educational Children\'s Book Design',
      description: 'تصميم غلاف وصفحات كتاب تعليمي للأطفال بألوان زاهية وشخصيات كرتونية جذابة',
      descriptionEn: 'Educational children\'s book cover and pages design with bright colors and attractive cartoon characters',
      image: '/lovable-uploads/03a31cc9-7dbf-49fb-b8d7-6507be88e511.png',
      type: 'image',
      details: {
        client: 'دار نشر',
        clientEn: 'Publishing House',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Book Design'
      }
    },
    {
      id: 21,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'كولاج صور أطفال',
      titleEn: 'Children\'s Photo Collage',
      description: 'تصميم كولاج إبداعي لصور الأطفال بأسلوب فني مميز وألوان مرحة',
      descriptionEn: 'Creative children\'s photo collage design with distinctive artistic style and cheerful colors',
      image: '/lovable-uploads/8b8b163c-9dc6-4b9b-a94b-aaf7bb89881c.png',
      type: 'image',
      details: {
        client: 'عميل خاص',
        clientEn: 'Private Client',
        tools: 'Adobe Photoshop',
        year: '2024',
        category: 'Photo Collage'
      }
    },
    {
      id: 22,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان تدريس اللغة الإنجليزية',
      titleEn: 'English Teaching Advertisement',
      description: 'تصميم إعلان جذاب لتدريس اللغة الإنجليزية بعناصر تعليمية مميزة',
      descriptionEn: 'Attractive advertisement design for English teaching with distinctive educational elements',
      image: '/lovable-uploads/1256ed8f-a206-46d0-a891-beaec97cdc83.png',
      type: 'image',
      details: {
        client: 'مس رحاب سعيد',
        clientEn: 'Miss Rehab Saied',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Educational Advertisement'
      }
    },
    {
      id: 23,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'شعار FIT MASTER',
      titleEn: 'FIT MASTER Logo',
      description: 'تصميم شعار احترافي لنادي اللياقة البدنية FIT MASTER بألوان جذابة ومميزة',
      descriptionEn: 'Professional logo design for FIT MASTER fitness club with attractive and distinctive colors',
      image: '/lovable-uploads/e070b56b-231f-4b15-a829-794a872c45d0.png',
      type: 'image',
      details: {
        client: 'FIT MASTER Gym',
        clientEn: 'FIT MASTER Gym',
        tools: 'Adobe Illustrator, Adobe Photoshop',
        year: '2024',
        category: 'Logo Design'
      }
    },
    {
      id: 24,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان جراب الجاوي - عروض السنة الجديدة',
      titleEn: 'Garab Al-Gawi New Year Offers Advertisement',
      description: 'تصميم إعلان احتفالي لعروض السنة الجديدة 2024 بعروض وخصومات مميزة',
      descriptionEn: 'Festive advertisement design for New Year 2024 offers with special deals and discounts',
      image: '/lovable-uploads/7096544d-2094-4bec-a7bc-2203b45044a3.png',
      type: 'image',
      details: {
        client: 'جراب الجاوي',
        clientEn: 'Garab Al-Gawi',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Promotional Advertisement'
      }
    },
    {
      id: 25,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'منيو بوفيه المول',
      titleEn: 'Mall Buffet Menu',
      description: 'تصميم منيو شامل لبوفيه المول مع عرض الأطباق والأسعار بتصميم جذاب ومنظم',
      descriptionEn: 'Comprehensive menu design for Mall Buffet with dishes and prices display in attractive and organized layout',
      image: '/lovable-uploads/a744353e-9e33-49a1-be3d-965775bd4557.png',
      type: 'image',
      details: {
        client: 'بوفيه المول',
        clientEn: 'Mall Buffet',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Menu Design'
      }
    },
    {
      id: 26,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'كارت عمل قسم الصيانة والدعم الفني',
      titleEn: 'Technical Support Department Business Card',
      description: 'تصميم كارت عمل احترافي لقسم الصيانة والدعم الفني لشركة اليابانية للتكنولوجيا',
      descriptionEn: 'Professional business card design for Technical Support Department of Japanese Technology Company',
      image: '/lovable-uploads/a8e96df1-5f8b-460a-a59b-aaf88c1b2d94.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Business Card'
      }
    },
    {
      id: 27,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'كارت شخصي اليابانية للتكنولوجيا',
      titleEn: 'Japanese Technology Store Business Card',
      description: 'تصميم كارت شخصي احترافي لشركة اليابانية للتكنولوجيا مع QR Code',
      descriptionEn: 'Professional business card design for Japanese Technology Store with QR Code',
      image: '/lovable-uploads/c91c7293-e57b-4e84-b57c-5838158eb722.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Business Card'
      }
    },
    {
      id: 28,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'كارت شخصي م. شريف حسيني',
      titleEn: 'Eng. Sherif Hosseini Business Card',
      description: 'تصميم كارت شخصي احترافي للمهندس شريف حسيني - مدير فرع العبور',
      descriptionEn: 'Professional business card design for Eng. Sherif Hosseini - Al-Obour Branch Manager',
      image: '/lovable-uploads/14b9206a-aeb6-4bb5-9fa0-a487e15f1b36.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Business Card'
      }
    },
    {
      id: 29,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان كاميرا HiLook THC-B150',
      titleEn: 'HiLook THC-B150 Camera Advertisement',
      description: 'تصميم إعلان احترافي لكاميرا المراقبة HiLook بدقة 5 ميجابكسل وتصميم مضغوط',
      descriptionEn: 'Professional advertisement design for HiLook 5 MP fixed mini bullet camera with compact design',
      image: '/lovable-uploads/82ac8275-4235-4d78-931f-ab82c0c2cb80.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Product Advertisement'
      }
    },
    {
      id: 30,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان EZVIZ TY2 بتصميم إنستغرام',
      titleEn: 'EZVIZ TY2 Instagram-Style Advertisement',
      description: 'تصميم إعلان مبتكر بأسلوب منشور إنستغرام لكاميرا EZVIZ TY2 الذكية',
      descriptionEn: 'Innovative Instagram post-style advertisement design for EZVIZ TY2 smart camera',
      image: '/lovable-uploads/ca665631-f3ac-4c8a-8230-50068f5cc390.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Social Media Advertisement'
      }
    },
    {
      id: 31,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان Skyworth Security LC-2308',
      titleEn: 'Skyworth Security LC-2308 Advertisement',
      description: 'تصميم إعلان احترافي لكاميرا المراقبة اللاسلكية Skyworth بدقة 3 ميجابكسل',
      descriptionEn: 'Professional advertisement design for Skyworth 3MP Dual-Light Wi-Fi security camera',
      image: '/lovable-uploads/f469c437-ac36-47d3-bd29-83fa9006454c.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Product Advertisement'
      }
    },
    {
      id: 32,
      category: 'مطبوعات وسوشيال ميديا',
      title: 'إعلان UNV UAC-P112-AF40-W',
      titleEn: 'UNV UAC-P112-AF40-W Advertisement',
      description: 'تصميم إعلان متقدم لكاميرا المراقبة UNV مع تقنيات حديثة وجودة عالية',
      descriptionEn: 'Advanced advertisement design for UNV surveillance camera with modern technology and high quality',
      image: '/lovable-uploads/7f0ce513-44ea-4a03-bc07-e0386b6b95cc.png',
      type: 'image',
      details: {
        client: 'اليابانية للتكنولوجيا',
        clientEn: 'Japanese Technology Store',
        tools: 'Adobe Photoshop, Adobe Illustrator',
        year: '2024',
        category: 'Product Advertisement'
      }
    },
    {
      id: 40,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو ترويجي احترافي',
      titleEn: 'Professional Promotional Video',
      description: 'إنتاج ومونتاج فيديو ترويجي احترافي بأعلى معايير الجودة',
      descriptionEn: 'Professional promotional video production and editing with highest quality standards',
      image: 'https://drive.google.com/thumbnail?id=1HXCjRNju5v8YIt8pXBSLXtoTwePVyD3s&sz=w400-h225', // Video thumbnail from Google Drive
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1HXCjRNju5v8YIt8pXBSLXtoTwePVyD3s/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1HXCjRNju5v8YIt8pXBSLXtoTwePVyD3s/preview',
      details: {
        duration: '2:30 دقيقة',
        durationEn: '2:30 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Promotional Video'
      }
    },
    {
      id: 33,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو إعلاني تجاري',
      titleEn: 'Commercial Advertisement Video',
      description: 'إنتاج فيديو إعلاني تجاري احترافي للشركات والمنتجات',
      descriptionEn: 'Professional commercial advertisement video production for companies and products',
      image: 'https://drive.google.com/thumbnail?id=1-TcbPI5uynoRKDaoqShaf_B2Lf6AUVW_&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1-TcbPI5uynoRKDaoqShaf_B2Lf6AUVW_/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1-TcbPI5uynoRKDaoqShaf_B2Lf6AUVW_/preview',
      details: {
        duration: '1:45 دقيقة',
        durationEn: '1:45 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Commercial Video'
      }
    },
    {
      id: 34,
      category: 'انتاج ومونتاج فيديو',
      title: 'مونتاج فيديو موسيقي',
      titleEn: 'Music Video Editing',
      description: 'مونتاج احترافي للفيديوهات الموسيقية مع التأثيرات البصرية',
      descriptionEn: 'Professional music video editing with visual effects',
      image: 'https://drive.google.com/thumbnail?id=1IRpTfRvolLCJTZmiTEdrA5s89fx8e9u1&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1IRpTfRvolLCJTZmiTEdrA5s89fx8e9u1/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1IRpTfRvolLCJTZmiTEdrA5s89fx8e9u1/preview',
      details: {
        duration: '3:20 دقيقة',
        durationEn: '3:20 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Music Video'
      }
    },
    {
      id: 35,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو تعليمي تفاعلي',
      titleEn: 'Interactive Educational Video',
      description: 'إنتاج فيديو تعليمي تفاعلي بأسلوب شيق وجذاب',
      descriptionEn: 'Interactive educational video production with engaging and attractive style',
      image: 'https://drive.google.com/thumbnail?id=1KbLnG-vg3Y5exfBe4WdXWu46GPCUpFoV&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1KbLnG-vg3Y5exfBe4WdXWu46GPCUpFoV/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1KbLnG-vg3Y5exfBe4WdXWu46GPCUpFoV/preview',
      details: {
        duration: '4:15 دقيقة',
        durationEn: '4:15 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Educational Video'
      }
    },
    {
      id: 36,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو منتج احترافي',
      titleEn: 'Professional Product Video',
      description: 'إنتاج فيديو عرض منتج احترافي لإظهار المميزات والفوائد',
      descriptionEn: 'Professional product showcase video production highlighting features and benefits',
      image: 'https://drive.google.com/thumbnail?id=1M6f_1fyEqCKiVSq47oRy-QQFwzwHcvW1&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1M6f_1fyEqCKiVSq47oRy-QQFwzwHcvW1/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1M6f_1fyEqCKiVSq47oRy-QQFwzwHcvW1/preview',
      details: {
        duration: '2:10 دقيقة',
        durationEn: '2:10 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Product Video'
      }
    },
    {
      id: 37,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو مؤسسي للشركات',
      titleEn: 'Corporate Company Video',
      description: 'إنتاج فيديو مؤسسي يعكس هوية ورؤية الشركة',
      descriptionEn: 'Corporate video production reflecting company identity and vision',
      image: 'https://drive.google.com/thumbnail?id=1NIRaCGgV0KL6K18tN7KGkLbIjWcKG49n&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1NIRaCGgV0KL6K18tN7KGkLbIjWcKG49n/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1NIRaCGgV0KL6K18tN7KGkLbIjWcKG49n/preview',
      details: {
        duration: '5:30 دقيقة',
        durationEn: '5:30 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Corporate Video'
      }
    },
    {
      id: 38,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو موشن جرافيك',
      titleEn: 'Motion Graphics Video',
      description: 'إنتاج فيديو موشن جرافيك متحرك بتأثيرات بصرية مميزة',
      descriptionEn: 'Animated motion graphics video production with distinctive visual effects',
      image: 'https://drive.google.com/thumbnail?id=1PmdoVz3pEUF0frLWCxxiCqBBKNhZZyeM&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1PmdoVz3pEUF0frLWCxxiCqBBKNhZZyeM/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1PmdoVz3pEUF0frLWCxxiCqBBKNhZZyeM/preview',
      details: {
        duration: '1:30 دقيقة',
        durationEn: '1:30 minutes',
        tools: 'Adobe After Effects, Adobe Premiere Pro',
        year: '2024',
        category: 'Motion Graphics'
      }
    },
    {
      id: 39,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو إعلان خدمات',
      titleEn: 'Services Advertisement Video',
      description: 'إنتاج فيديو إعلاني للخدمات بأسلوب جذاب ومقنع',
      descriptionEn: 'Services advertisement video production with attractive and convincing style',
      image: 'https://drive.google.com/thumbnail?id=1PoVDd4N1X9oON6YWEmTCpCHLhU_Bl2DT&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1PoVDd4N1X9oON6YWEmTCpCHLhU_Bl2DT/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1PoVDd4N1X9oON6YWEmTCpCHLhU_Bl2DT/preview',
      details: {
        duration: '2:45 دقيقة',
        durationEn: '2:45 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Services Video'
      }
    },
    {
      id: 4,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو توضيحي للمنتجات',
      titleEn: 'Product Demonstration Video',
      description: 'فيديو توضيحي مفصل لطريقة استخدام المنتجات',
      descriptionEn: 'Detailed demonstration video for product usage',
      image: 'https://drive.google.com/thumbnail?id=1SwGpVvLalDry3Qpu3R0_YfzbF03cIQMu&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1SwGpVvLalDry3Qpu3R0_YfzbF03cIQMu/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1SwGpVvLalDry3Qpu3R0_YfzbF03cIQMu/preview',
      details: {
        duration: '3:55 دقيقة',
        durationEn: '3:55 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Demonstration Video'
      }
    },
    {
      id: 41,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو عرض حفل زفاف',
      titleEn: 'Wedding Showcase Video',
      description: 'مونتاج احترافي لفيديو عرض حفل زفاف بلمسة سينمائية',
      descriptionEn: 'Professional wedding showcase video editing with cinematic touch',
      image: 'https://drive.google.com/thumbnail?id=1_2Uwg4Boz15eXEwrwxLxi-Tt8ox0wG3l&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1_2Uwg4Boz15eXEwrwxLxi-Tt8ox0wG3l/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1_2Uwg4Boz15eXEwrwxLxi-Tt8ox0wG3l/preview',
      details: {
        duration: '6:20 دقيقة',
        durationEn: '6:20 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Wedding Video'
      }
    },
    {
      id: 42,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو تسويقي للعقارات',
      titleEn: 'Real Estate Marketing Video',
      description: 'إنتاج فيديو تسويقي للعقارات بأسلوب سينمائي جذاب',
      descriptionEn: 'Real estate marketing video production with attractive cinematic style',
      image: 'https://drive.google.com/thumbnail?id=1fXk4hSs0Ufh4DlbN6sl1NYKwZRzKpXHP&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1fXk4hSs0Ufh4DlbN6sl1NYKwZRzKpXHP/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1fXk4hSs0Ufh4DlbN6sl1NYKwZRzKpXHP/preview',
      details: {
        duration: '4:10 دقيقة',
        durationEn: '4:10 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Real Estate Video'
      }
    },
    {
      id: 43,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو مراجعة المنتجات',
      titleEn: 'Product Review Video',
      description: 'إنتاج فيديو مراجعة شاملة للمنتجات بأسلوب احترافي',
      descriptionEn: 'Comprehensive product review video production with professional style',
      image: 'https://drive.google.com/thumbnail?id=1fbuLTpJDdcfohYIXpISXBjZcM_h4zwxg&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1fbuLTpJDdcfohYIXpISXBjZcM_h4zwxg/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1fbuLTpJDdcfohYIXpISXBjZcM_h4zwxg/preview',
      details: {
        duration: '7:30 دقيقة',
        durationEn: '7:30 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Review Video'
      }
    },
    {
      id: 44,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو دعائي للفعاليات',
      titleEn: 'Event Promotional Video',
      description: 'إنتاج فيديو دعائي للفعاليات والمؤتمرات بأعلى جودة',
      descriptionEn: 'Event and conference promotional video production with highest quality',
      image: 'https://drive.google.com/thumbnail?id=1hkvCTE3hD84YAGN2qzn4svkKdxHdtb8C&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1hkvCTE3hD84YAGN2qzn4svkKdxHdtb8C/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1hkvCTE3hD84YAGN2qzn4svkKdxHdtb8C/preview',
      details: {
        duration: '2:25 دقيقة',
        durationEn: '2:25 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Event Video'
      }
    },
    {
      id: 45,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو تقديمي للخدمات',
      titleEn: 'Service Presentation Video',
      description: 'فيديو تقديمي شامل للخدمات المقدمة بأسلوب مقنع',
      descriptionEn: 'Comprehensive service presentation video with convincing style',
      image: 'https://drive.google.com/thumbnail?id=1oxe5Wt0ObN7qHqKhYiyU912dcqBDtRFL&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1oxe5Wt0ObN7qHqKhYiyU912dcqBDtRFL/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1oxe5Wt0ObN7qHqKhYiyU912dcqBDtRFL/preview',
      details: {
        duration: '5:15 دقيقة',
        durationEn: '5:15 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Presentation Video'
      }
    },
    {
      id: 46,
      category: 'انتاج ومونتاج فيديو',
      title: 'فيديو اجتماعي تفاعلي',
      titleEn: 'Interactive Social Video',
      description: 'إنتاج فيديو اجتماعي تفاعلي لمنصات التواصل الاجتماعي',
      descriptionEn: 'Interactive social video production for social media platforms',
      image: 'https://drive.google.com/thumbnail?id=1y15sfHLZVLHGqd-7xfaEjKuDexOk3WCh&sz=w400-h225',
      type: 'video',
      videoUrl: 'https://drive.google.com/file/d/1y15sfHLZVLHGqd-7xfaEjKuDexOk3WCh/view?usp=sharing',
      videoEmbedUrl: 'https://drive.google.com/file/d/1y15sfHLZVLHGqd-7xfaEjKuDexOk3WCh/preview',
      details: {
        duration: '1:20 دقيقة',
        durationEn: '1:20 minutes',
        tools: 'Adobe Premiere Pro, After Effects',
        year: '2024',
        category: 'Social Media Video'
      }
    }
  ];

  const filteredItems = selectedCategory ? portfolioItems.filter(item => 
    isEnglish 
      ? categories.find(cat => cat.ar === item.category)?.en === selectedCategory
      : item.category === selectedCategory
  ) : [];

  return (
    <section id="portfolio" className="portfolio-section bg-portfolio-bg relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/5678a094-d98d-4353-9a67-c24bf235a153.png')`,
        }}
      ></div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10">{/* This ensures content appears above background */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-4">
              <span className="text-white">{isEnglish ? 'My Work' : 'نبذة من شغلي'}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-portfolio-text-muted font-montserrat max-w-2xl mx-auto">
              {isEnglish ? 'A selected collection of my work across various fields' : 'مجموعة مختارة من أعمالي في مختلف المجالات'}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.ar}
                onClick={() => setSelectedCategory(isEnglish ? category.en : category.ar)}
                className={`px-6 py-3 rounded-full font-montserrat font-medium transition-all duration-300 ${
                  selectedCategory === (isEnglish ? category.en : category.ar)
                    ? 'bg-portfolio-accent text-portfolio-primary'
                    : 'bg-portfolio-secondary text-portfolio-text hover:bg-portfolio-accent hover:text-portfolio-primary'
                }`}
              >
                {isEnglish ? category.en : category.ar}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          {selectedCategory ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
              item.type === 'beforeAfter' ? (
                <BeforeAfterComparison
                  key={item.id}
                  beforeImage={item.beforeImage!}
                  afterImage={item.afterImage!}
                  description={isEnglish ? item.descriptionEn : item.description}
                />
              ) : (
                <div
                  key={item.id}
                  className="portfolio-card group cursor-pointer"
                  onClick={() => {
                    if (item.type === 'video') {
                      setLightboxContent({
                        type: 'video',
                        src: item.videoUrl || '',
                        embedSrc: item.videoEmbedUrl || ''
                      });
                    } else {
                      setLightboxContent({
                        type: 'image',
                        src: item.image
                      });
                    }
                  }}
                >
                  <ProtectedMedia>
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 bg-portfolio-primary/50 flex items-center justify-center">
                          <Play className="w-12 h-12 text-portfolio-accent" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-portfolio-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-portfolio-accent font-montserrat font-semibold">
                          {isEnglish ? 'View' : 'عرض'}
                        </span>
                      </div>
                    </div>
                  </ProtectedMedia>
                  {item.category !== 'انتاج ومونتاج فيديو' && item.category !== 'Video Production & Editing' && (
                    <>
                      <h3 className="text-xl font-cairo font-bold text-portfolio-text mb-2">
                        {isEnglish ? item.titleEn : item.title}
                      </h3>
                      <p className="text-portfolio-text-muted font-montserrat">
                        {isEnglish ? item.descriptionEn : item.description}
                      </p>
                    </>
                  )}
                </div>
              )
            ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-portfolio-text-muted font-montserrat">
                {isEnglish ? 'Please select a category to view the work' : 'يرجى اختيار قسم لعرض الأعمال'}
              </p>
            </div>
          )}
        </div>
      </div>
      </div>

      {/* Lightbox */}
      {lightboxContent && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxContent(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxContent(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-portfolio-accent transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <X size={32} />
            </button>
            
            {lightboxContent.type === 'image' ? (
              <ProtectedMedia>
                <img
                  src={lightboxContent.src}
                  alt="Portfolio item"
                  className="max-w-full max-h-full object-contain mx-auto rounded-lg w-auto h-auto"
                  style={{ maxWidth: '100vw', maxHeight: '100vh' }}
                />
              </ProtectedMedia>
            ) : (
              <ProtectedMedia>
                <div className="w-full max-w-4xl h-[70vh] bg-black rounded-lg overflow-hidden mx-auto">
                  <iframe
                    src={lightboxContent.embedSrc}
                    className="w-full h-full"
                    allow="autoplay"
                    title="Portfolio video"
                    onClick={(e) => e.stopPropagation()}
                  ></iframe>
                </div>
              </ProtectedMedia>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;