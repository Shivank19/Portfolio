import { useRef } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'This website you’re looking at!',
    tech: ['React', 'Vite', 'Framer Motion'],
    github: 'https://github.com/yourname/portfolio',
    live: '',
  },
  {
    title: 'OpenGL Renderer',
    description:
      'A custom real-time renderer built using C++, OpenGL, and GLSL.',
    tech: ['C++', 'OpenGL', 'GLFW'],
    github: 'https://github.com/yourname/opengl-renderer',
    live: '',
  },
  {
    title: 'Clustered Deferred Demo',
    description: 'Demo of a clustered forward+ renderer using compute shaders.',
    tech: ['GLSL', 'Forward+', 'Compute Shaders'],
    github: 'https://github.com/yourname/clustered-rendering',
    live: '',
  },
  {
    title: 'Personal Portfolio 1',
    description: 'This website you’re looking at!',
    tech: ['React', 'Vite', 'Framer Motion'],
    github: 'https://github.com/yourname/portfolio',
    live: '',
  },
  {
    title: 'OpenGL Renderer 1',
    description:
      'A custom real-time renderer built using C++, OpenGL, and GLSL.',
    tech: ['C++', 'OpenGL', 'GLFW'],
    github: 'https://github.com/yourname/opengl-renderer',
    live: '',
  },
  {
    title: 'Clustered Deferred Demo 1',
    description: 'Demo of a clustered forward+ renderer using compute shaders.',
    tech: ['GLSL', 'Forward+', 'Compute Shaders'],
    github: 'https://github.com/yourname/clustered-rendering',
    live: '',
  },
  {
    title: 'Personal Portfolio 2',
    description: 'This website you’re looking at!',
    tech: ['React', 'Vite', 'Framer Motion'],
    github: 'https://github.com/yourname/portfolio',
    live: '',
  },
  {
    title: 'OpenGL Renderer 2',
    description:
      'A custom real-time renderer built using C++, OpenGL, and GLSL.',
    tech: ['C++', 'OpenGL', 'GLFW'],
    github: 'https://github.com/yourname/opengl-renderer',
    live: '',
  },
  {
    title: 'Clustered Deferred Demo 2',
    description: 'Demo of a clustered forward+ renderer using compute shaders.',
    tech: ['GLSL', 'Forward+', 'Compute Shaders'],
    github: 'https://github.com/yourname/clustered-rendering',
    live: '',
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  //  const scroll = (direction: number) => {
  //   const container = scrollRef.current;
  //   if (!container) return;

  //   const cardWidth = 300;
  //   const gap = 30;
  //   const groupSize = 3;
  //   const scrollAmount = cardWidth * groupSize + gap * (groupSize - 1); // 990

  //   const maxScrollLeft = container.scrollWidth - container.clientWidth;

  //   if (direction === 1 && Math.ceil(container.scrollLeft) >= maxScrollLeft) {
  //     container.scrollTo({ left: 0, behavior: 'smooth' });
  //   } else if (direction === -1 && container.scrollLeft === 0) {
  //     container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
  //   } else {
  //     container.scrollBy({
  //       left: scrollAmount * direction,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const scroll = (direction: number) => {
  //   const container = scrollRef.current;
  //   if (!container) return;

  //   const containerWidth = container.clientWidth;

  //   // Calculate group size dynamically
  //   let groupSize = 1;
  //   if (containerWidth >= 960) groupSize = 3;
  //   else if (containerWidth >= 600) groupSize = 2;
  //   else groupSize = 1;

  //   const cardWidth = 300;
  //   const gap = 30;
  //   const scrollAmount = cardWidth * groupSize + gap * (groupSize - 1);

  //   const maxScrollLeft = container.scrollWidth - container.clientWidth;

  //   if (direction === 1 && Math.ceil(container.scrollLeft) >= maxScrollLeft) {
  //     container.scrollTo({ left: 0, behavior: 'smooth' });
  //   } else if (direction === -1 && container.scrollLeft === 0) {
  //     container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
  //   } else {
  //     container.scrollBy({
  //       left: scrollAmount * direction,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const scroll = (direction: number) => {
  //   const container = scrollRef.current;
  //   if (!container) return;

  //   const containerWidth = container.clientWidth;

  //   let groupSize = 1;
  //   let cardWidth = 240;

  //   if (containerWidth >= 990) {
  //     groupSize = 3;
  //     cardWidth = 300;
  //   } else if (containerWidth >= 570) {
  //     groupSize = 2;
  //     cardWidth = 270;
  //   }

  //   const gap = 30;
  //   const scrollAmount = cardWidth * groupSize + gap * (groupSize - 1);
  //   const maxScrollLeft = container.scrollWidth - container.clientWidth;

  //   if (direction === 1 && Math.ceil(container.scrollLeft) >= maxScrollLeft) {
  //     container.scrollTo({ left: 0, behavior: 'smooth' });
  //   } else if (direction === -1 && container.scrollLeft === 0) {
  //     container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
  //   } else {
  //     container.scrollBy({
  //       left: scrollAmount * direction,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  const scroll = (direction: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;

    let groupSize = 1;
    let cardWidth = 240;
    const gap = 30;

    if (containerWidth >= 990) {
      groupSize = 3;
      cardWidth = 300;
    } else if (containerWidth >= 700) {
      groupSize = 2;
      cardWidth = 270;
    }

    const scrollAmount = cardWidth * groupSize + gap * (groupSize - 1);
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === 1 && Math.ceil(container.scrollLeft) >= maxScrollLeft) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction === -1 && container.scrollLeft === 0) {
      container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
    } else {
      container.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth',
      });
    }
  };

  return (
    // <section className='projects-container'>
    //   <h2 className='projects-title'>Projects</h2>

    //   <div className='carousel-layout'>
    //     <button className='scroll-btn left' onClick={() => scroll(-1)}>
    //       ←
    //     </button>

    //     <div className='projects-wrapper'>
    //       <div className='projects-scroll-row' ref={scrollRef}>
    //         {projects.map((proj, index) => (
    //           <motion.div
    //             className='project-card'
    //             key={index}
    //             initial={{ opacity: 0, y: 20 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             viewport={{ once: true }}
    //             transition={{ duration: 0.5, delay: index * 0.1 }}
    //           >
    //             <h3>{proj.title}</h3>
    //             <p>{proj.description}</p>
    //             <div className='tech-tags'>
    //               {proj.tech.map((tag, i) => (
    //                 <span key={i}>{tag}</span>
    //               ))}
    //             </div>
    //             <div className='project-links'>
    //               {proj.github && (
    //                 <a href={proj.github} target='_blank'>
    //                   GitHub
    //                 </a>
    //               )}
    //               {proj.live && (
    //                 <a href={proj.live} target='_blank'>
    //                   Live
    //                 </a>
    //               )}
    //             </div>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>

    //     <button className='scroll-btn right' onClick={() => scroll(1)}>
    //       →
    //     </button>
    //   </div>
    // </section>

    <section className='projects-container'>
      <h2 className='projects-title'>Projects</h2>

      <div className='carousel-layout'>
        <button className='scroll-btn left' onClick={() => scroll(-1)}>
          ←
        </button>

        <div className='projects-wrapper'>
          <div className='projects-scroll-row' ref={scrollRef}>
            {projects.concat(projects).map(
              (
                proj,
                index // Duplicate list here
              ) => (
                <motion.div
                  className='project-card'
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true }}
                  viewport={{ amount: 0.8 }} // ✅ triggers if 80% in view
                  // transition={{
                  //   duration: 0.5,
                  //   delay: (index % projects.length) * 0.1,
                  // }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                >
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <div className='tech-tags'>
                    {proj.tech.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div className='project-links'>
                    {proj.github && (
                      <a href={proj.github} target='_blank' rel='noreferrer'>
                        GitHub
                      </a>
                    )}
                    {proj.live && (
                      <a href={proj.live} target='_blank' rel='noreferrer'>
                        Live
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>

        <button className='scroll-btn right' onClick={() => scroll(1)}>
          →
        </button>
      </div>
    </section>
  );
};

export default Projects;
