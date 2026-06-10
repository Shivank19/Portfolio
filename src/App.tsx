import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import MainPortfolio from './components/MainPortfolio';
import AllProjectsPage from './components/AllProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';

type Theme = 'dark' | 'light';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
  };

  const ThemeIcon = theme === 'dark' ? Sun : Moon;
  const nextThemeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <Router>
      <div className="min-h-screen bg-app-bg-primary text-app-text-primary transition-colors duration-500">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          {/* <Route path="/alternate" element={<AlternatePage />} /> */}
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>

        <button
          type="button"
          onClick={toggleTheme}
          className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-app-border-primary bg-[rgb(var(--color-bg-secondary)/0.88)] text-app-text-secondary shadow-xl shadow-[rgb(var(--color-shadow-primary)/0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-app-border-accent hover:text-app-text-primary"
          aria-label={nextThemeLabel}
          title={nextThemeLabel}
        >
          <ThemeIcon size={18} />
        </button>
      </div>
    </Router>
  );
}

export default App;
