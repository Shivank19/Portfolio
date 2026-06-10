import React from 'react';
import { Home, User, FolderOpen, FileText, Mail } from 'lucide-react';

interface VerticalNavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const VerticalNavigation: React.FC<VerticalNavigationProps> = ({ activeSection, onSectionClick }) => {
  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'resume', icon: FileText, label: 'Resume' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ] as const;
  const homeItem = navigationItems[0];
  const secondaryItems = navigationItems.slice(1);

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

  const renderNavButton = (item: typeof navigationItems[number]) => {
    const isActive = activeSection === item.id;

    return (
      <button
        key={item.id}
        onClick={() => handleSectionClick(item.id)}
        className={`
          rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300
          ${isActive
            ? 'bg-app-bg-secondary text-app-text-primary shadow-lg shadow-[rgb(var(--color-shadow-primary)/0.06)] ring-1 ring-[rgb(var(--color-border-accent)/0.45)]'
            : 'text-app-text-muted hover:bg-app-bg-secondary hover:text-app-text-primary'
          }
        `}
      >
        {item.label}
      </button>
    );
  };

  return (
    <div className="fixed left-1/2 top-4 z-50 w-[min(calc(100vw-2rem),72rem)] -translate-x-1/2">
      <nav className="w-full rounded-full border border-[rgb(var(--color-border-primary)/0.78)] bg-[rgb(var(--color-bg-primary)/0.9)] px-5 py-2.5 shadow-xl shadow-[rgb(var(--color-shadow-primary)/0.06)] backdrop-blur-xl">
        <div className="hidden sm:flex items-center justify-between gap-10">
          <button
            onClick={() => handleSectionClick(homeItem.id)}
            className={`
              flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300
              ${activeSection === homeItem.id
                ? 'border-[rgb(var(--color-border-accent)/0.45)] bg-app-text-primary text-app-text-inverse shadow-lg shadow-[rgb(var(--color-shadow-primary)/0.12)]'
                : 'border-app-border-primary bg-app-bg-secondary text-app-text-primary hover:border-app-border-accent hover:bg-[rgb(var(--color-bg-tertiary)/0.75)]'
              }
            `}
            aria-label="Home"
          >
            <Home size={18} />
          </button>

          <div className="flex items-center justify-end gap-2">
            {secondaryItems.map(renderNavButton)}
          </div>
        </div>

        {/* Mobile: compact icon-only bar */}
        <div className="flex sm:hidden items-center justify-between gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`rounded-full p-2.5 transition-colors duration-200 ${isActive ? 'bg-app-bg-secondary text-app-text-primary ring-1 ring-app-border-accent' : 'text-app-text-muted hover:bg-app-bg-secondary hover:text-app-text-primary'}`}
                aria-label={item.label}
              >
                <Icon size={16} />
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default VerticalNavigation;
