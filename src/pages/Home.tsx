import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';

const Home = () => {
  return (
    // <div>
    //   <h1>Welcome to My Portfolio</h1>
    //   <p>This is the main page.</p>
    // </div>
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
