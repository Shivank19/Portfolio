import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>
        About <span>Me</span>
      </h2>
      <p className='p-text-about'>
        As a recent Computer Science Engineering graduate, I am passionate about
        leveraging technology to solve complex problems and drive innovation.
        Throughout my academic journey, I delved into various programming
        languages, data structures, and algorithms, gaining a strong foundation
        in software development. I also took specialized courses in artificial
        intelligence and machine learning, fueling my interest in the exciting
        world of AI applications.
      </p>
      <p className='p-text-about'>  
        I am now seeking opportunities to contribute my technical skills and
        collaborate with like-minded professionals to create cutting-edge
        solutions that make a positive impact on society.
      </p>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profiles-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
