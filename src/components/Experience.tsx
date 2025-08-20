import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experience = [
  {
    company: 'Company A',
    role: 'Frontend Developer',
    duration: 'Jan 2022 – Present',
    description: [
      'Built reusable React components for the dashboard.',
      'Collaborated with design team to improve UX.',
      'Integrated APIs and handled dynamic data rendering.',
    ],
  },
  {
    company: 'Company B',
    role: 'Software Intern',
    duration: 'Jun 2021 – Dec 2021',
    description: [
      'Developed internal tools with JavaScript.',
      'Participated in agile sprint cycles and standups.',
      'Wrote unit tests and documented code thoroughly.',
    ],
  },
  {
    company: 'Company C',
    role: 'Frontend Developer',
    duration: 'Jan 2022 – Present',
    description: [
      'Built reusable React components for the dashboard.',
      'Collaborated with design team to improve UX.',
      'Integrated APIs and handled dynamic data rendering.',
    ],
  },
  {
    company: 'Company D',
    role: 'Frontend Developer',
    duration: 'Jan 2022 – Present',
    description: [
      'Built reusable React components for the dashboard.',
      'Collaborated with design team to improve UX.',
      'Integrated APIs and handled dynamic data rendering.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id='experience' className='experience-section'>
      <motion.h2
        className='experience-title'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className='experience-list'>
        {experience.map((exp, i) => (
          <motion.div
            className='experience-card'
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{exp.role}</h3>
            <p className='company'>{exp.company}</p>
            <p className='duration'>{exp.duration}</p>
            <ul className='description'>
              {exp.description.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
