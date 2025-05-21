
import { useState } from 'react';
import { Play } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
}

const PortfolioItem = ({ title, category, image, videoUrl }: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        {videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/20 p-3">
              <Play size={24} className="text-white" />
            </div>
          </div>
        )}
        <div>
          <p className="text-drone text-sm">{category}</p>
          <h4 className="text-white text-lg font-medium">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
