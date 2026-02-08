import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, GraduationCap, Award, Code, Database, Palette, Server, Layers, GitBranch, ScanEye, TextCursorInput, BrainCog, BrainCircuit, Waypoints, Monitor } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import umnLogo from '../assets/University-of-Minnesota-Logo-PNG3.png';
import ggsipuLogo from '../assets/GGSIU_logo.png';
import tpLogo from '../assets/tp_logo.png';
import acmLogo from '../assets/acm_logo.png';

const ResumeSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experience = [
    {
      title: 'Software Development Engineer',
      company: 'Teleperformance',
      period: '11/2023 - 05/2025',
      description: [
        'Developed full-stack web applications tailored to diverse client requirements, utilizing C#, .NET Framework, MVC architecture, HTML, CSS, and JavaScript.',
        'Optimized stored procedures in SQL Server by restructuring queries and leveraging indexing strategies, reducing processing times by ~50%. ',
        'Spearheaded the development of a collaborative real-time document editor, using ReactJS, TypeScript, Express, Socket.io, and PostgreSQL, ensuring seamless synchronization.',
      ],
      logo: tpLogo,
    },
    {
      title: 'Summer Intern',
      company: 'GGSIPU USS ACM',
      period: '07/2022 - 09/2022',
      description: [
        'Developed a decentralized system to mint academic credentials as NFTs on the Ethereum blockchain securely.',
        'Designed web interface (MERN stack, Web3.js) and smart contracts using Solidity to manage document uploads, NFT minting, and wallet-based certificate transfers with guaranteed transparency.',
      ],
      logo: acmLogo,
    },
    {
      title: 'Software Development Engineer Intern',
      company: 'Teleperformance',
      period: '12/2021 - 05/2022',
      description: [
        'Developed a Face Recognition-Based Attendance System, with Django and OpenCV, to create a dynamic web application for seamless attendance management.',
        'Integrated role-based access control with Admin and User Logins, enabling personalized dashboards and secure data access.'
      ],
      logo: tpLogo,
    },
    {
      title: 'Machine Learning Intern',
      company: 'GGSIPU USS ACM',
      period: '08/2021 - 09/2021',
      description: [
        'Developed a Real-time Drowsiness Detection System leveraging computer vision and deep learning techniques to enhance road safety by alerting drivers showing signs of fatigue.',
        'Implemented face and eye detection using OpenCV and Haar Cascade Classifiers, leveraging the Viola-Jones algorithm to implement robust face and eye region detection in real-time from live video streams',
        'Designed and trained a stacked deep convolutional neural network (CNN) and employed MobileNet for transfer learning to extract dynamic features from keyframes in video sequences.',
        'Integrated a Sigmoid classifier layer in the CNN architecture to predict the driver’s state as drowsy or alert, triggering an alarm when drowsiness was detected continuously.'
      ],
      logo: acmLogo,
    },
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'University of Minnesota - Twin Cities',
      period: '2025 - Present',
      description: 'Grade: 4.00',
      logo: umnLogo,
    },
    {
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      school: 'University School of Information, Communication & Technology, GGSIPU',
      period: '2019 - 2023',
      description: 'Grade: 8.87',
      logo: ggsipuLogo,
    },
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'React Developer Certification',
  ];

  const skillCategories = [
    {
      category: 'Programming Languages',
      color: 'primary',
      skills: [
        { name: 'Python', icon: Code, iconClass: 'devicon-python-plain', level: 95 },
        { name: 'C++', icon: Code, iconClass: 'devicon-cplusplus-plain', level: 90 },
        { name: 'JavaScript', icon: Code, iconClass: 'devicon-javascript-plain', level: 85 },
        { name: 'C#', icon: Code, iconClass: 'devicon-csharp-plain', level: 85 },
        { name: 'SQL', icon: Database, iconClass: 'devicon-mysql-plain', level: 85 },
      ]
    },
    {
      category: 'AI & Machine Learning',
      color: 'accent',
      skills: [
        { name: 'Computer Vision', icon: ScanEye, level: 72 },
        { name: 'NLP', icon: TextCursorInput, level: 78 },
        { name: 'Machine Learning', icon: BrainCog, level: 78 },
        { name: 'Deep Learning', icon: BrainCircuit, level: 90 },
        { name: 'Reinforcement Learning', icon: Waypoints, level: 90 },
      ]
    },
    {
      category: 'Libraries and Frameworks',
      color: 'primary',
      skills: [
        { name: 'Tensorflow', icon: Code, iconClass: 'devicon-tensorflow-original', level: 95 },
        { name: 'NumPy', icon: Code, iconClass: 'devicon-numpy-plain', level: 95 },
        { name: 'Pandas', icon: Code, iconClass: 'devicon-pandas-plain', level: 95 },
        { name: 'OpenCV', icon: Code, iconClass: 'devicon-opencv-plain', level: 95 },
        { name: 'Matplotlib', icon: Code, iconClass: 'devicon-matplotlib-plain', level: 95 },
        { name: 'Flask', icon: Code, iconClass: 'devicon-flask-plain', level: 95 },
        { name: 'Vue.js', icon: Layers, iconClass: 'devicon-vuejs-plain', level: 85 },
        { name: '.NET', icon: Palette, iconClass: 'devicon-dotnetcore-plain', level: 92 },
        { name: 'PostgreSQL', icon: Server, iconClass: 'devicon-postgresql-plain', level: 90 },
        { name: 'Firebase', icon: Server, iconClass: 'devicon-firebase-plain', level: 90 },
        { name: 'Git & GitHub', icon: GitBranch, iconClass: 'devicon-git-plain', level: 80 },
      ]
    },
  ];

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colorMap = {
      primary: {
        bg: isHovered ? 'bg-primary-600' : 'bg-primary-800/30',
        border: 'border-primary-500/40',
        text: isHovered ? 'text-white' : 'text-primary-400',
        progress: 'bg-primary-500'
      },
      accent: {
        bg: isHovered ? 'bg-accent-600' : 'bg-accent-800/30',
        border: 'border-accent-500/40',
        text: isHovered ? 'text-white' : 'text-accent-400',
        progress: 'bg-accent-500'
      },
      highlight: {
        bg: isHovered ? 'bg-highlight-600' : 'bg-highlight-800/30',
        border: 'border-highlight-500/40',
        text: isHovered ? 'text-white' : 'text-highlight-400',
        progress: 'bg-highlight-500'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const handleSkillClick = (skillName: string) => {
    navigate(`/projects?filter=${encodeURIComponent(skillName)}`);
  };
  return (
    <section id="resume" className="min-h-screen py-20 px-4 bg-gradient-to-b from-accent-900/30 to-app-bg-primary relative overflow-hidden">
      {/* Subtle background elements */}
      <div
        className="absolute top-32 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-accent-600/5 to-highlight-600/5 blur-2xl"
        style={{
          transform: `translateY(${scrollY * 0.015}px)`,
        }}
      />
      <div
        className="absolute bottom-20 right-16 w-28 h-28 rounded-full bg-gradient-to-br from-primary-600/8 to-accent-600/8 blur-xl"
        style={{
          transform: `translateY(${scrollY * -0.01}px)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary-accent pb-2">
              Education & Experience
            </h2>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-20 max-w-4xl mx-auto">
          {/* Education */}
          <div className="w-full">
            <ScrollReveal direction="right" delay={400}>
              <div className="flex items-center justify-center space-x-3 mb-10">
                <GraduationCap className="text-primary-400" size={28} />
                <h3 className="text-3xl font-bold text-app-text-secondary">Education</h3>
              </div>
            </ScrollReveal>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <ScrollReveal key={index} direction="right" delay={600 + index * 200}>
                  <div className="bg-app-bg-secondary/60 backdrop-blur-sm p-8 rounded-xl hover:bg-app-bg-secondary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex flex-col sm:flex-row gap-6 mb-4">
                      {/* Logo Placeholder */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-app-bg-primary/50 overflow-hidden border border-primary-500/20 shadow-md">
                          <img
                            src={edu.logo}
                            alt={`${edu.school} logo`}
                            className="w-full h-full object-contain p-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                          <h4 className="text-xl font-semibold text-app-text-secondary">{edu.degree}</h4>
                          <span className="text-app-text-muted text-sm bg-app-bg-tertiary px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0 w-fit">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-primary-300 font-medium text-lg mb-2">{edu.school}</p>
                        <p className="text-app-text-tertiary text-base leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="w-full">
            <ScrollReveal direction="left" delay={400}>
              <div className="flex items-center justify-center space-x-3 mb-10">
                <Briefcase className="text-primary-400" size={28} />
                <h3 className="text-3xl font-bold text-app-text-secondary">Experience</h3>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-accent-600 to-primary-600"></div>

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <ScrollReveal key={index} direction="left" delay={600 + index * 200}>
                    <div className="relative flex items-start space-x-6">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary-accent rounded-full flex items-center justify-center shadow-lg shadow-primary">
                          <Briefcase size={20} className="text-white" />
                        </div>
                        {/* Connecting line to content */}
                        <div className="absolute top-6 left-12 w-6 h-0.5 bg-gradient-to-r from-primary-600 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-app-bg-secondary/60 backdrop-blur-sm p-6 rounded-xl hover:bg-app-bg-secondary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary ml-6">
                        <div className="flex flex-col sm:flex-row gap-4 mb-3">
                          {/* Logo Placeholder */}
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-app-bg-primary/50 overflow-hidden border border-primary-500/20 shadow-md">
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain p-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                              <h4 className="text-xl font-semibold text-app-text-secondary">{exp.title}</h4>
                              <span className="text-primary-400 text-sm font-medium bg-primary-900/30 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-primary-300 font-medium mt-1">{exp.company}</p>
                          </div>
                        </div>
                        <ul className="list-disc list-outside ml-4 space-y-2 text-app-text-tertiary">
                          {Array.isArray(exp.description) ? (
                            exp.description.map((point, i) => (
                              <li key={i} className="leading-relaxed pl-1">{point}</li>
                            ))
                          ) : (
                            <li className="leading-relaxed pl-1">{exp.description}</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="w-full hidden">
            <ScrollReveal direction="right" delay={800}>
              <div className="flex items-center justify-center space-x-3 mb-10">
                <Award className="text-primary-400" size={28} />
                <h3 className="text-3xl font-bold text-app-text-secondary">Certifications</h3>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <ScrollReveal key={index} direction="up" delay={1000 + index * 100}>
                  <div className="bg-app-bg-secondary/60 backdrop-blur-sm p-6 rounded-lg hover:bg-app-bg-secondary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary flex items-center space-x-3">
                    <div className="p-2 bg-primary-900/30 rounded-full">
                      <Award size={20} className="text-primary-400" />
                    </div>
                    <p className="text-app-text-secondary font-medium">{cert}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <ScrollReveal direction="up" delay={200}>
            <div className="flex items-center justify-center space-x-3 mb-10">
              <Monitor className="text-primary-400" size={28} />
              <h3 className="text-3xl font-bold text-app-text-secondary">Technical Skills</h3>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <ScrollReveal direction="up" delay={300 + categoryIndex * 100}>
                  <h4 className="text-xl font-semibold text-app-text-secondary mb-6 text-center">{category.category}</h4>
                </ScrollReveal>

                <div className="flex flex-wrap justify-center gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    const isHovered = hoveredSkill === `${categoryIndex}-${skillIndex}`;
                    const colorClasses = getColorClasses(category.color, isHovered);

                    return (
                      <ScrollReveal key={skillIndex} direction="up" delay={400 + skillIndex * 50}>
                        <div
                          className="group relative"
                          onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          onClick={() => handleSkillClick(skill.name)}
                        >
                          {/* Skill Badge */}
                          <div className={`
                            relative w-32 h-32 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer
                            ${colorClasses.bg} ${colorClasses.border}
                            hover:scale-110 hover:shadow-[0_0_20px_rgba(255,204,51,0.3)]
                            backdrop-blur-sm
                          `}>
                            {/* Icon and Name */}
                            <div className="flex flex-col items-center space-y-2">
                              <div className={`
                                p-2 rounded-full transition-all duration-300
                                ${isHovered ? 'bg-white/20' : 'bg-white/10'}
                              `}>
                                {(skill as any).iconClass ? (
                                  <i className={`${(skill as any).iconClass} text-2xl transition-colors duration-300 ${colorClasses.text}`}></i>
                                ) : (
                                  <Icon
                                    size={24}
                                    className={`transition-colors duration-300 ${colorClasses.text}`}
                                  />
                                )}
                              </div>
                              <div className="text-center px-2">
                                <h5 className={`font-semibold text-sm transition-colors duration-300 ${colorClasses.text}`}>
                                  {skill.name}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;