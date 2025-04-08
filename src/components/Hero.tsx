import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import './Hero.css'; // You'll create this next

const Hero = () => {
  return (
    <div className='hero-container'>
      <Parallax speed={-10}>
        <motion.h1
          className='hero-title'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hey, I'm Zero<span className='cursor'>_</span>
        </motion.h1>
      </Parallax>

      <motion.p
        className='hero-subtitle'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Developer, Builder & Curious Human.
      </motion.p>

      <motion.div
        className='scroll-down'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        ↓ Scroll Down
      </motion.div>
    </div>
  );
};

export default Hero;
