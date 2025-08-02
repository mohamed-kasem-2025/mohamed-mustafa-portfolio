import { useState } from 'react';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  description: string;
}

const BeforeAfterComparison = ({ beforeImage, afterImage, description }: BeforeAfterComparisonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="portfolio-card group cursor-pointer">
      <div 
        className="relative overflow-hidden rounded-lg mb-4 bg-portfolio-card"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ minHeight: '200px' }}
      >
        {/* Before Image */}
        <img
          src={beforeImage}
          alt="الصورة قبل الترميم"
          className={`w-full h-auto max-h-80 object-contain transition-all duration-500 ease-in-out ${
            isHovering ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />
        
        {/* After Image */}
        <img
          src={afterImage}
          alt="الصورة بعد الترميم"
          className={`absolute top-0 left-0 w-full h-auto max-h-80 object-contain transition-all duration-500 ease-in-out ${
            isHovering ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
        
      </div>
      
      <p className="text-portfolio-text-muted font-montserrat">
        {description}
      </p>
    </div>
  );
};

export default BeforeAfterComparison;