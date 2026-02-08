import React, { useState } from 'react';
import { Home, User, FolderOpen, FileText, Mail } from 'lucide-react';

interface VerticalNavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const VerticalNavigation: React.FC<VerticalNavigationProps> = ({ activeSection, onSectionClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'resume', icon: FileText, label: 'Resume' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const handleSectionClick = (sectionId: string) => {
    // Enhanced smooth scrolling with offset for better positioning
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for better visual positioning
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    onSectionClick(sectionId);
  };

  return (
    <div 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`
        bg-accent-800/90 backdrop-blur-sm transition-all duration-500 ease-in-out
        ${isExpanded 
          ? 'px-6 py-8 rounded-3xl shadow-2xl shadow-accent-800/40' 
          : 'px-3 py-6 rounded-full shadow-lg shadow-accent-800/30'
        }
      `}>
        <div className={`
          flex flex-col items-center transition-all duration-500
          ${isExpanded ? 'space-y-6' : 'space-y-4'}
        `}>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`
                  flex flex-col items-center transition-all duration-500 relative group
                  ${isExpanded ? 'space-y-2' : ''}
                  ${isActive 
                    ? 'text-white' 
                    : 'text-accent-300 hover:text-white'
                  }
                `}
              >
                {/* Icon and label */}
                <div className="flex flex-col items-center transition-all duration-500">
                  <div className={`
                    p-2 rounded-full transition-all duration-300 group-hover:scale-110
                    ${isActive 
                      ? 'bg-primary-700 shadow-lg shadow-primary-700/40 text-white' 
                      : 'hover:bg-accent-700 group-hover:shadow-md group-hover:shadow-accent-700/30 text-accent-300 hover:text-white'
                    }
                  `}>
                    <Icon size={16} />
                  </div>
                  <span className={`
                    text-xs mt-1 whitespace-nowrap font-medium transition-all duration-500 origin-top
                    ${isExpanded ? 'opacity-100 scale-100 max-h-8' : 'opacity-0 scale-0 max-h-0'}
                  `}>
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VerticalNavigation;