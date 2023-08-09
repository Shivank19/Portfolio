import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import Resume from '../../assets/Resume/Shivank Sapra - Resume.pdf';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋🏼</span>
            <div style={{ margin: 20 }}>
              <p className='p-text'>Hello, I Am</p>
              <h1 className='head-text'>Shivank</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Engineer</p>
            <p className='p-text'>Machine Learning Enthusiast</p>
          </div>

          <a
            href={Resume}
            download='Shivank Sapra - Resume'
            target='_blank'
            rel='noreferrer'
            className='tag-cmp app__flex dl-btn'
          >
            <p className='p-text'>Resume</p>
          </a>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildreen: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_picture'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.tf, images.py, images.cppHead].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='profile_bg' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
