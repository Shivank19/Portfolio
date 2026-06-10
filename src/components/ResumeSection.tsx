import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, GraduationCap, Award, Code, Database, Palette, Server, Layers, GitBranch, ScanEye, TextCursorInput, BrainCog, BrainCircuit, Waypoints, Monitor } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import umnLogo from '../assets/University-of-Minnesota-Logo-PNG3.png';
import ggsipuLogo from '../assets/GGSIU_logo.png';
import tpLogo from '../assets/tp_logo.png';
import acmLogo from '../assets/acm_logo.png';

const ResumeSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const navigate = useNavigate();

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
        bg: isHovered ? 'skill-badge skill-badge-primary skill-badge-active' : 'skill-badge skill-badge-primary',
        border: '',
        text: 'text-current',
        progress: 'bg-primary-500'
      },
      accent: {
        bg: isHovered ? 'skill-badge skill-badge-accent skill-badge-active' : 'skill-badge skill-badge-accent',
        border: '',
        text: 'text-current',
        progress: 'bg-accent-500'
      },
      highlight: {
        bg: isHovered ? 'skill-badge skill-badge-highlight skill-badge-active' : 'skill-badge skill-badge-highlight',
        border: '',
        text: 'text-current',
        progress: 'bg-highlight-500'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const handleSkillClick = (skillName: string) => {
    navigate(`/projects?filter=${encodeURIComponent(skillName)}`);
  };
  return (
    <section id="resume" className="min-h-screen py-20 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 border-b border-app-border-primary pb-8">
          <ScrollReveal direction="up" delay={200}>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary-600">Archive notes</p>
            <h2 className="text-5xl leading-none text-app-text-primary md:text-7xl">
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
                <h3 className="text-3xl text-app-text-secondary">Education</h3>
              </div>
            </ScrollReveal>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <ScrollReveal key={index} direction="right" delay={600 + index * 200}>
                  <div className="group relative overflow-hidden rounded-lg border border-app-border-primary bg-app-bg-secondary p-8 shadow-[0_22px_52px_rgba(35,35,51,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-app-border-accent">
                    <div className="absolute left-0 top-0 h-full w-1 bg-primary-600 opacity-70"></div>
                    <div className="flex flex-col sm:flex-row gap-6 mb-4">
                      {/* Logo Placeholder */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-app-bg-primary overflow-hidden border border-app-border-primary shadow-sm">
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
                          <span className="mt-2 w-fit whitespace-nowrap rounded-full border border-app-border-primary bg-app-bg-tertiary px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-app-text-muted sm:mt-0">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-primary-600 font-medium text-lg mb-2">{edu.school}</p>
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
                <h3 className="text-3xl text-app-text-secondary">Experience</h3>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-app-border-primary"></div>

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <ScrollReveal key={index} direction="left" delay={600 + index * 200}>
                    <div className="relative flex items-start space-x-6">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full border border-app-border-primary bg-app-bg-secondary flex items-center justify-center shadow-lg shadow-[rgb(var(--color-shadow-primary)/0.06)]">
                          <Briefcase size={20} className="text-primary-600" />
                        </div>
                        {/* Connecting line to content */}
                        <div className="absolute top-6 left-12 w-6 h-0.5 bg-gradient-to-r from-primary-600 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="ml-6 flex-1 rounded-lg border border-app-border-primary bg-app-bg-secondary p-6 shadow-[0_22px_52px_rgba(35,35,51,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-app-border-accent">
                        <div className="flex flex-col sm:flex-row gap-4 mb-3">
                          {/* Logo Placeholder */}
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-app-bg-primary overflow-hidden border border-app-border-primary shadow-sm">
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
                              <span className="mt-2 w-fit rounded-full border border-app-border-primary bg-app-bg-tertiary px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-primary-600 sm:mt-0">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-primary-600 font-medium mt-1">{exp.company}</p>
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
              <h3 className="text-3xl text-app-text-secondary">Technical Skills</h3>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <ScrollReveal direction="up" delay={300 + categoryIndex * 100}>
                  <h4 className="mb-6 text-center font-mono text-xs font-bold uppercase tracking-[0.14em] text-app-text-muted">{category.category}</h4>
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
                            relative w-32 h-32 rounded-lg border flex flex-col items-center justify-center transition-all duration-300 cursor-pointer
                            ${colorClasses.bg} ${colorClasses.border}
                            hover:-translate-y-1
                            backdrop-blur-sm
                          `}>
                            {/* Icon and Name */}
                            <div className="flex flex-col items-center space-y-2">
                              <div className={`
                                skill-icon-chip p-2 rounded-full transition-all duration-300
                              `}>
                                {'iconClass' in skill && skill.iconClass ? (
                                  <i className={`${skill.iconClass} text-2xl transition-colors duration-300 ${colorClasses.text}`}></i>
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
