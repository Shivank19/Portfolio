import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate('/alt');
  };

  return (
    <section className='about-container'>
      <motion.div
        className='profile-pic'
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleProfileClick}
      >
        <img src='/profile.png' alt='Profile' />
        <span className='doorway-glow'>→</span>
      </motion.div>

      <div className='about-dev'>
        <h2>About Me</h2>
        <p>
          I'm a developer who loves building immersive experiences and
          experimenting with creative tech.
        </p>
        <p className='hotspot'>
          Curious minds may find hidden doors if they hover wisely 👀
          <span className='tooltip'>Psst... click the pic 👁</span>
        </p>
      </div>
    </section>
  );
};

export default About;
