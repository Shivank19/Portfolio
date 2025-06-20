import { useEffect, useState } from 'react';
import './SectionNav.css';
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaDownload,
} from 'react-icons/fa';

const sections = [
  { id: 'section-0', icon: <FaHome />, label: 'Home' },
  { id: 'section-1', icon: <FaUser />, label: 'About' },
  { id: 'section-2', icon: <FaCode />, label: 'Projects' },
  { id: 'section-3', icon: <FaBriefcase />, label: 'Experience' },
  { id: 'section-4', icon: <FaBriefcase />, label: 'Skills' },
  { id: 'section-5', icon: <FaBriefcase />, label: 'Contact' },
];

const SectionNav = () => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sections.findIndex((s) => s.id === entry.target.id);
          if (entry.isIntersecting) {
            setActive(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`section-nav-container ${hovered ? 'expanded' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='section-nav-inner'>
        {sections.map((s, i) => (
          <div
            key={s.id}
            className={`nav-item ${active === i ? 'active' : ''}`}
            onClick={() => scrollTo(s.id)}
            title={s.label}
          >
            <div className='nav-dot'>
              {hovered ? (
                s.icon
              ) : (
                <div
                  className={`dot-indicator ${active === i ? 'active' : ''}`}
                />
              )}
            </div>
            {hovered && <div className='nav-label'>{s.label}</div>}
          </div>
        ))}

        {/* {sections.map((s, i) => (
          <div
            key={s.id}
            className={`nav-item ${active === i ? 'active' : ''}`}
            onClick={() => scrollTo(s.id)}
            title={s.label}
            style={{ transitionDelay: hovered ? `${i * 0.08}s` : '0s' }}
          >
            <div className='nav-dot'>
              {hovered ? (
                s.icon
              ) : (
                <div
                  className={`dot-indicator ${active === i ? 'active' : ''}`}
                />
              )}
            </div>
            {hovered && <div className='nav-label'>{s.label}</div>}
          </div>
        ))} */}

        <div
          className='nav-item fixed'
          onClick={() => window.open('/resume.pdf', '_blank')}
          title='Resume'
        >
          <div className='nav-dot'>
            {hovered ? <FaDownload /> : <div className='dot-indicator' />}
          </div>
          {hovered && <div className='nav-label'>Resume</div>}{' '}
        </div>
      </div>
    </div>
  );
};

export default SectionNav;
