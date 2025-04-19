import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ModuleCardProps {
  id: number;
  title: string;
  description: string;
  isIntroduction?: boolean;
}

const ModuleCard = ({ id, title, description, isIntroduction = false }: ModuleCardProps) => {
  const path = isIntroduction ? '/einfuehrung' : `/module/${id}`;
  
  return (
    <div className="module-card">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">
          {isIntroduction ? title : `Modul ${id}: ${title}`}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <NavLink 
        to={path} 
        className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-200 bg-accent text-white hover:bg-accent/90 hover:translate-y-[-2px] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 group"
        aria-label={`Zu ${isIntroduction ? 'Einführung' : `Modul ${id}`} wechseln`}
      >
        <span>Mehr erfahren</span>
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </NavLink>
    </div>
  );
};

export default ModuleCard;
