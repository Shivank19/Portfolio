// import { useEffect, useRef } from 'react';
import SectionNav from '../components/SectionNav';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
// const Home = () => {
//   return (
//     // <div>
//     //   <h1>Welcome to My Portfolio</h1>
//     //   <p>This is the main page.</p>
//     // </div>
//     // <>
//     //   <Hero />
//     //   <About />
//     //   <Projects />
//     // </>

//     <main className='snap-container'>
//       <section id='section-0'>
//         <Hero />
//       </section>
//       <section id='section-1'>
//         <About />
//       </section>
//       <section id='section-2'>
//         <Projects />
//       </section>
//       {/* Add Experience, Contact, etc */}
//     </main>
//   );
// };
// import Experience from '../components/Experience'; // add more as needed

// const Home = () => {
//   const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const sectionCount = 3; // Update this if you add more sections
//   let currentIndex = 0;

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       e.preventDefault();

//       if (scrollTimeout.current) return;

//       scrollTimeout.current = setTimeout(() => {
//         scrollTimeout.current = null;
//       }, 800); // debounce delay

//       const delta = Math.sign(e.deltaY);

//       let next = currentIndex + delta;
//       next = Math.max(0, Math.min(sectionCount - 1, next));
//       const el = document.getElementById(`section-${next}`);
//       el?.scrollIntoView({ behavior: 'smooth' });
//       currentIndex = next;
//     };

//     window.addEventListener('wheel', handleWheel, { passive: false });

//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//     };
//   }, []);

//   return (
//     <main className='page-container'>
//       <section id='section-0' className='snap-section'>
//         <Hero />
//       </section>

//       <section id='section-1' className='snap-section'>
//         <About />
//       </section>

//       <section id='section-2' className='snap-section'>
//         <Projects />
//       </section>

//       {/*
//       <section id="section-3" className="snap-section">
//         <Experience />
//       </section>
//       */}
//     </main>
//   );
// };

const Home = () => {
  // const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // const sectionCount = 4; // update if more sections added
  // const currentIndex = useRef(0); // now using useRef to preserve across events

  // useEffect(() => {
  //   const scrollToSection = (next: number) => {
  //     const clamped = Math.max(0, Math.min(sectionCount - 1, next));
  //     const el = document.getElementById(`section-${clamped}`);
  //     el?.scrollIntoView({ behavior: 'smooth' });
  //     currentIndex.current = clamped;
  //   };

  //   const handleWheel = (e: WheelEvent) => {
  //     e.preventDefault();
  //     if (scrollTimeout.current) return;

  //     scrollTimeout.current = setTimeout(() => {
  //       scrollTimeout.current = null;
  //     }, 800);

  //     const direction = Math.sign(e.deltaY);
  //     scrollToSection(currentIndex.current + direction);
  //   };

  //   const handleKey = (e: KeyboardEvent) => {
  //     if (scrollTimeout.current) return;

  //     if (['ArrowDown', 'PageDown'].includes(e.key)) {
  //       e.preventDefault();
  //       scrollTimeout.current = setTimeout(() => {
  //         scrollTimeout.current = null;
  //       }, 800);
  //       scrollToSection(currentIndex.current + 1);
  //     } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
  //       e.preventDefault();
  //       scrollTimeout.current = setTimeout(() => {
  //         scrollTimeout.current = null;
  //       }, 800);
  //       scrollToSection(currentIndex.current - 1);
  //     }
  //   };

  //   window.addEventListener('wheel', handleWheel, { passive: false });
  //   window.addEventListener('keydown', handleKey);

  //   return () => {
  //     window.removeEventListener('wheel', handleWheel);
  //     window.removeEventListener('keydown', handleKey);
  //   };
  // }, []);

  return (
    <main className='page-container'>
      <section id='section-0' className='snap-section'>
        <Hero />
      </section>

      <section id='section-1' className='snap-section'>
        <About />
      </section>

      <section id='section-2' className='snap-section'>
        <Projects />
      </section>

      <section id='section-3' className='free-section'>
        <Experience />
      </section>

      <SectionNav />
    </main>
  );
};

export default Home;
