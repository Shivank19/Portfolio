import React from 'react';
import Resume from '../assets/Resume/Shivank Sapra - Resume.pdf';

import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
  BsNewspaper,
} from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div style={{ cursor: 'pointer' }}>
        <a
          href={Resume}
          download='Shivank Sapra - Resume'
          target={'_blank'}
          rel='noreferrer'
        >
          <BsNewspaper />
        </a>
      </div>

      <div style={{ cursor: 'pointer' }}>
        <a
          href='https://www.linkedin.com/in/shivank-sapra/'
          target={'_blank'}
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>

      <div style={{ cursor: 'pointer' }}>
        <a
          href='https://github.com/Shivank19'
          target={'_blank'}
          rel='noreferrer'
        >
          <BsGithub />
        </a>
      </div>

      <div style={{ cursor: 'pointer' }}>
        <a
          href='https://leetcode.com/alpha_192/'
          target={'_blank'}
          rel='noreferrer'
        >
          <SiLeetcode />
        </a>
      </div>

      <div style={{ cursor: 'pointer' }}>
        <a
          href='https://www.instagram.com/shivank.ss/'
          target={'_blank'}
          rel='noreferrer'
        >
          <BsInstagram />
        </a>
      </div>

      <div style={{ cursor: 'pointer' }}>
        <a
          href='https://twitter.com/ShSap19'
          target={'_blank'}
          rel='noreferrer'
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
