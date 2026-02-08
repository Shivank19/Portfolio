import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';

const AllProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get filter from URL params or state
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get('filter');
    if (filterParam) {
      setSelectedFilter(filterParam);
    }
  }, [location]);

  const allProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js'],
      featured: true,
      category: 'Full Stack',
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Interactive dashboard using machine learning to provide business insights with real-time data visualization and predictive analytics.',
      image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL'],
      featured: true,
      category: 'AI/ML',
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile app for fitness tracking with social features, workout planning, and progress analytics.',
      image: 'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      featured: false,
      category: 'Mobile',
    },
    {
      title: 'Creative Portfolio CMS',
      description: 'Custom content management system for creative professionals with drag-and-drop portfolio builder and client management.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'PHP'],
      featured: false,
      category: 'Web',
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with real-time messaging, file sharing, and video calls using WebRTC technology.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB'],
      featured: false,
      category: 'Full Stack',
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure voting platform built on Ethereum blockchain ensuring transparency and immutability of votes.',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask'],
      featured: false,
      category: 'Blockchain',
    },
    {
      title: 'Weather Prediction ML Model',
      description: 'Machine learning model for weather prediction using historical data and neural networks with 95% accuracy.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
      featured: false,
      category: 'AI/ML',
    },
    {
      title: 'Task Management PWA',
      description: 'Progressive web app for task management with offline capabilities, push notifications, and team collaboration.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['React', 'PWA', 'Service Workers', 'IndexedDB', 'Push API'],
      featured: false,
      category: 'Web',
    },
  ];

  // Get all unique tags for filtering
  const allTags = ['All', ...Array.from(new Set(allProjects.flatMap(project => project.tags)))];

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'All'
    ? allProjects
    : allProjects.filter(project => project.tags.includes(selectedFilter));

  const handleTagClick = (tag: string) => {
    setSelectedFilter(tag);
    setIsFilterOpen(false);
    // Update URL without navigation
    const params = new URLSearchParams();
    if (tag !== 'All') {
      params.set('filter', tag);
    }
    window.history.replaceState({}, '', `${location.pathname}${params.toString() ? '?' + params.toString() : ''}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-app-bg-primary to-primary-900/20 flex flex-col items-center justify-center p-4">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 px-4 py-2 bg-accent-800/70 backdrop-blur-sm rounded-full hover:bg-accent-800 transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </button>
      </div>

      <div className="text-center space-y-8 max-w-2xl bg-app-bg-secondary/60 backdrop-blur-md p-12 rounded-3xl border border-primary-500/20 shadow-2xl shadow-primary/10">
        <div className="inline-block p-4 bg-primary-900/40 rounded-full mb-2">
          <Github size={48} className="text-primary-400" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary-accent">
          Coming Soon
        </h1>
        
        <p className="text-xl text-app-text-tertiary">
          I'm currently curating my best projects to showcase here. For now, you can explore all my code and contributions directly on GitHub.
        </p>

        <a 
          href="https://github.com/Shivank19" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-800 hover:bg-primary-900 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
        >
          <Github size={20} />
          <span className="font-medium">Explore my GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default AllProjectsPage;