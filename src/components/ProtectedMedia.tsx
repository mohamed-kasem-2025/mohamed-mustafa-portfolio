import { ReactNode, useEffect, useRef } from 'react';

interface ProtectedMediaProps {
  children: ReactNode;
  className?: string;
}

const ProtectedMedia = ({ children, className = '' }: ProtectedMediaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // منع الكليك يمين
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // منع السحب والإفلات
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // منع تحديد النص والعناصر
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // منع اختصارات لوحة المفاتيح للحفظ والطباعة
    const handleKeyDown = (e: KeyboardEvent) => {
      // منع Ctrl+S (حفظ)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // منع Ctrl+P (طباعة)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // منع Ctrl+A (تحديد الكل)
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // منع F12 (أدوات المطور)
      if (e.key === 'F12') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // منع Ctrl+Shift+I (أدوات المطور)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      // منع Ctrl+U (عرض المصدر)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // إضافة المستمعات
    container.addEventListener('contextmenu', handleContextMenu);
    container.addEventListener('dragstart', handleDragStart);
    container.addEventListener('selectstart', handleSelectStart);
    container.addEventListener('keydown', handleKeyDown);

    // العثور على جميع الصور والفيديوهات داخل المكون
    const images = container.querySelectorAll('img');
    const videos = container.querySelectorAll('video');

    // تطبيق الحماية على الصور
    images.forEach(img => {
      img.setAttribute('draggable', 'false');
      img.style.pointerEvents = 'none';
      img.style.userSelect = 'none';
      img.style.webkitUserSelect = 'none';
      (img.style as any).mozUserSelect = 'none';
      (img.style as any).msUserSelect = 'none';
      img.addEventListener('contextmenu', handleContextMenu);
      img.addEventListener('dragstart', handleDragStart);
    });

    // تطبيق الحماية على الفيديوهات
    videos.forEach(video => {
      video.setAttribute('controlsList', 'nodownload nofullscreen noremoteplayback');
      video.setAttribute('disablePictureInPicture', 'true');
      video.style.pointerEvents = 'none';
      video.style.userSelect = 'none';
      video.addEventListener('contextmenu', handleContextMenu);
      video.addEventListener('dragstart', handleDragStart);
    });

    // تنظيف المستمعات عند إلغاء التحميل
    return () => {
      container.removeEventListener('contextmenu', handleContextMenu);
      container.removeEventListener('dragstart', handleDragStart);
      container.removeEventListener('selectstart', handleSelectStart);
      container.removeEventListener('keydown', handleKeyDown);
      
      images.forEach(img => {
        img.removeEventListener('contextmenu', handleContextMenu);
        img.removeEventListener('dragstart', handleDragStart);
      });
      
      videos.forEach(video => {
        video.removeEventListener('contextmenu', handleContextMenu);
        video.removeEventListener('dragstart', handleDragStart);
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`select-none ${className}`}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTouchCallout: 'none',
        WebkitUserDrag: 'none',
        pointerEvents: 'auto'
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default ProtectedMedia;