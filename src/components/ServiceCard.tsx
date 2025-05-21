
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="p-6">
        <div className="service-icon mx-auto mb-4 flex items-center justify-center">
          <Icon size={24} className="text-drone" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
