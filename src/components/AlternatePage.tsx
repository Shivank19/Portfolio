import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Sparkles } from 'lucide-react';

const AlternatePage: React.FC = () => {
  const navigate = useNavigate();

  /* const experiments = [
    {
      title: 'Generative Art with AI',
      description: 'Exploring the intersection of artificial intelligence and creative expression through algorithmic art generation.',
      image: 'https://images.pexels.com/photos/1568618/pexels-photo-1568618.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'AI Art',
    },
    {
      title: 'Interactive Sound Visualization',
      description: 'Real-time audio visualization using WebGL and frequency analysis to create immersive digital experiences.',
      image: 'https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'WebGL',
    },
    {
      title: 'Augmented Reality Sketches',
      description: 'Experimental AR applications that blend physical and digital worlds through creative storytelling.',
      image: 'https://images.pexels.com/photos/2521543/pexels-photo-2521543.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'AR/VR',
    },
  ]; */

  /* const artworks = [
    {
      title: 'Digital Dreamscapes',
      description: 'A series exploring surreal landscapes created through digital manipulation and generative algorithms.',
      image: 'https://images.pexels.com/photos/1568618/pexels-photo-1568618.jpeg?auto=compress&cs=tinysrgb&w=500',
      medium: 'Digital Art',
    },
    {
      title: 'Neon Abstractions',
      description: 'Vibrant abstract compositions inspired by cyberpunk aesthetics and urban nightlife.',
      image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=500',
      medium: 'Mixed Media',
    },
    {
      title: 'Minimalist Geometries',
      description: 'Clean, mathematical forms that explore the beauty of simplicity and precision.',
      image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=500',
      medium: 'Vector Art',
    },
  ]; */

  const photos = [
    {
      title: 'Urban Shadows',
      description: 'Street photography capturing the dramatic interplay of light and shadow in metropolitan environments.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=500',
      location: 'New York City',
    },
    {
      title: 'Natural Patterns',
      description: 'Macro photography revealing the intricate patterns and textures found in nature.',
      image: 'https://images.pexels.com/photos/1022345/pexels-photo-1022345.jpeg?auto=compress&cs=tinysrgb&w=500',
      location: 'Pacific Northwest',
    },
    {
      title: 'Architectural Dreams',
      description: 'Modern architecture photographed with an emphasis on geometric forms and futuristic aesthetics.',
      image: 'https://images.pexels.com/photos/1776574/pexels-photo-1776574.jpeg?auto=compress&cs=tinysrgb&w=500',
      location: 'Los Angeles',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-violet-900/50">
      <div className="relative">
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800/70 backdrop-blur-sm rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          <div className="text-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              The Other Side
            </h1>
            <p className="text-gray-500 text-sm">Where creativity meets experimentation</p>
          </div>
          <div className="w-32"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 text-center py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-6xl mb-6 animate-pulse">🎭</div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              Creative Experiments
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              This is where I explore, experiment, and push the boundaries of creativity. 
              A space for artistic expression beyond the conventional.
            </p>
          </div>
        </div>

        {/* Experiments Section */}
        {/* <div className="relative z-10 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-12">
              <Lightbulb className="text-yellow-400" size={28} />
              <h3 className="text-3xl font-bold text-gray-200">Experiments</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {experiments.map((experiment, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:scale-105">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={experiment.image} 
                      alt={experiment.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="inline-block px-3 py-1 bg-yellow-600/30 text-yellow-400 rounded-full text-xs w-fit mb-3">
                      {experiment.category}
                    </span>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">{experiment.title}</h4>
                    <p className="text-gray-400 text-sm">{experiment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Art Section */}
        {/* <div className="relative z-10 py-16 px-4 bg-gray-800/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-12">
              <Palette className="text-pink-400" size={28} />
              <h3 className="text-3xl font-bold text-gray-200">Digital Art</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {artworks.map((artwork, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:scale-105">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="inline-block px-3 py-1 bg-pink-600/30 text-pink-400 rounded-full text-xs w-fit mb-3">
                      {artwork.medium}
                    </span>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">{artwork.title}</h4>
                    <p className="text-gray-400 text-sm">{artwork.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Photography Section */}
        <div className="relative z-10 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-12">
              <Camera className="text-violet-400" size={28} />
              <h3 className="text-3xl font-bold text-gray-200">Photography</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:scale-105">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={photo.image} 
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="inline-block px-3 py-1 bg-violet-600/30 text-violet-400 rounded-full text-xs w-fit mb-3">
                      {photo.location}
                    </span>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">{photo.title}</h4>
                    <p className="text-gray-400 text-sm">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative z-10 py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Sparkles className="text-purple-400 mx-auto" size={48} />
            <h3 className="text-3xl font-bold text-gray-200">Ready to Collaborate?</h3>
            <p className="text-gray-400">
              Whether you're looking for technical expertise or creative collaboration, 
              I'm always excited to work on projects that push boundaries.
            </p>
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="px-8 py-3 bg-gradient-to-r from-pink-800 via-purple-800 to-violet-800 hover:from-pink-900 hover:via-purple-900 hover:to-violet-900 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-800/40"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternatePage;
