import gen1 from '../assets/gen1.jpg';
import spoton from '../assets/spoton1.png';
import rlTraffic from '../assets/traffic1.png';
import med from '../assets/medimate.png';
import viz from '../assets/viz.png';
import nlp_fin from '../assets/nlp_fin.png';

export type Project = {
  slug: string;
  title: string;
  description: string;
  summaryLines: [string, string];
  image: string;
  tags: string[];
  featured: boolean;
  liveLink: string;
  paperLink: string;
  codeLink: string;
  details: {
    overview: string;
    approach: string;
    outcome: string;
    learnings: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'linguistic-precursors-financial-restatements',
    title: 'Linguistic Precursors to Financial Restatements',
    description: 'An NLP research project studying whether subtle language patterns in earnings calls can signal future financial restatements before they become public.',
    summaryLines: [
      'An NLP research project studying whether subtle language patterns in earnings calls can signal future financial restatements.',
      'The work combines financial text analysis with explainable modeling to surface early warning signals before disclosure.',
    ],
    image: nlp_fin,
    tags: ['Python', 'NLP', 'Financial Analysis', 'Explainable AI'],
    featured: true,
    liveLink: '#',
    paperLink: 'https://drive.google.com/file/d/1slQYcuF04iPAdpiR4km4Vg5OAaVD-A-a/view?usp=drive_link',
    codeLink: 'https://github.com/Shivank19/CSCI5541-Final-Project',
    details: {
      overview: 'This project explored whether companies that later issue financial restatements show measurable linguistic differences in earnings-call language before those restatements become public. The goal was to turn noisy executive and analyst communication into signals that could support earlier risk assessment.',
      approach: 'I treated the transcripts as both financial documents and language artifacts, extracting textual features, comparing restatement and non-restatement groups, and using interpretable NLP methods to understand which cues mattered. The analysis emphasized explainability so the results could be read as evidence rather than a black-box prediction.',
      outcome: 'The project produced a research workflow that connected earnings-call language to potential restatement risk and documented the strongest language patterns in a paper-style report. It also gave me a reusable structure for combining domain data, NLP features, and model interpretation.',
      learnings: 'I learned how important careful framing is when applying machine learning to high-stakes financial data. The biggest lesson was that interpretability, dataset construction, and honest limitation-setting are just as important as predictive performance.',
    },
  },
  {
    slug: 'celiac-disease-gut-microbiome',
    title: 'Analysis of Celiac Disease Gut Microbiome',
    description: 'Standardized Pipeline and Analysis of Celiac Disease Gut Microbiomes Using QIIME 2.',
    summaryLines: [
      'A microbiome analysis project using QIIME 2 to study gut microbial patterns associated with celiac disease.',
      'The project focused on building a standardized, reproducible pipeline for statistical comparison and interpretation.',
    ],
    image: gen1,
    tags: ['QIIME 2', 'Statistical Analysis'],
    featured: true,
    liveLink: '#',
    paperLink: 'https://drive.google.com/file/d/1jO7yjOp-GHDYXxyduWchtFz4_PnwQe1a/view?usp=sharing',
    codeLink: 'https://github.com/nicholashinds/csci5481-final',
    details: {
      overview: 'This project analyzed gut microbiome data related to celiac disease, with an emphasis on making the workflow consistent, inspectable, and scientifically grounded. The central aim was to compare microbial communities while preserving the rigor needed for biological data analysis.',
      approach: 'The work used QIIME 2 to process microbiome data through a standardized pipeline, including quality control, taxonomic analysis, and statistical comparison. I focused on reproducibility and clear reporting so that each analytical step could be traced back to the data and methods.',
      outcome: 'The final result was a structured microbiome analysis and report describing observed community-level patterns and statistically relevant findings. The pipeline made it easier to reason about biological signal without losing sight of preprocessing choices.',
      learnings: 'I learned how sensitive biological analysis can be to pipeline design, metadata quality, and interpretation discipline. The project sharpened my ability to work with domain-specific tooling and explain computational findings in a scientific context.',
    },
  },
  {
    slug: 'spoton',
    title: 'SpotOn',
    description: 'A real-time scoring pipeline for a dexterity-based card and dice game called Rhubarb Dice Game.',
    summaryLines: [
      'A computer vision system for real-time scoring in a dexterity-based card and dice game.',
      'SpotOn uses image processing and an interactive app layer to detect game state and reduce manual scoring friction.',
    ],
    image: spoton,
    tags: ['Python', 'OpenCV', 'Streamlit'],
    featured: true,
    liveLink: '#',
    paperLink: 'https://drive.google.com/file/d/1t6EvX4iXCk-v47tobKsJoU2QuMYy_DM-/view?usp=sharing',
    codeLink: 'https://github.com/Stefhermann/cv5561-f25-team-spoton',
    details: {
      overview: 'SpotOn was built to score the Rhubarb Dice Game automatically from visual input. The project turned a physical tabletop game into a computer vision problem where cards, dice, and spatial relationships needed to be detected reliably enough for real-time feedback.',
      approach: 'The system combined OpenCV-based detection with a Streamlit interface so users could see the scoring pipeline in action. I worked through image preprocessing, object detection constraints, and game-rule translation to connect what the camera saw with meaningful score outputs.',
      outcome: 'The project delivered a functional scoring prototype and a paper documenting the vision pipeline, its strengths, and its limitations. It showed how lightweight computer vision tools can support playful, physical interactions without requiring a heavy production system.',
      learnings: 'I learned that real-world vision projects are shaped by lighting, camera angle, object variation, and interface feedback as much as algorithms. The experience made me more practical about testing under messy conditions and designing for quick iteration.',
    },
  },
  {
    slug: 'sound-of-each-decade',
    title: 'The Sound of Each Decade',
    description: 'An interactive data storytelling project exploring how popular music changed from 1960 to 2020, focusing on trends in audio features.',
    summaryLines: [
      'An interactive data storytelling project about how popular music changed from 1960 to 2020.',
      'The experience uses visual analytics to reveal decade-level shifts in audio features and listening trends.',
    ],
    image: viz,
    tags: ['Python', 'React', 'D3.js', 'Visual Storytelling', 'Data Visualization'],
    featured: true,
    liveLink: 'https://shivank19.github.io/CSCI5609_Final_Project/',
    paperLink: 'https://drive.google.com/file/d/1JuvtrlvQd1O59fQjGM7iJO3IBRAdnCzH/view?usp=sharing',
    codeLink: 'https://github.com/Shivank19/CSCI5609_Final_Project/tree/final-website',
    details: {
      overview: 'This project explored how the sound of popular music evolved across decades, using audio features as the backbone for an interactive narrative. The goal was to make broad historical trends feel explorable rather than buried in static charts.',
      approach: 'I combined Python-based data preparation with a React and D3.js frontend, shaping the dataset into views that supported comparison across time. The design emphasized guided discovery, letting users move through decade-level changes while still inspecting specific feature patterns.',
      outcome: 'The final site presented a polished visual story with interactive charts and supporting analysis. It translated a large music dataset into a more approachable experience for understanding how popular sound has shifted over time.',
      learnings: 'I learned how much data visualization depends on sequencing, interaction design, and restraint. The project strengthened my ability to move from raw data to a narrative interface that supports both exploration and explanation.',
    },
  },
  {
    slug: 'adaptive-traffic-congestion-control',
    title: 'Adaptive Traffic Congestion Control',
    description: 'A reinforcement learning system that dynamically adjusts traffic signal timings to reduce urban congestion and improve traffic flow.',
    summaryLines: [
      'A reinforcement learning project that adapts traffic signal timing to improve urban traffic flow.',
      'The system models congestion as a sequential decision problem and learns policies for signal control.',
    ],
    image: rlTraffic,
    tags: ['Python', 'Reinforcement Learning'],
    featured: false,
    liveLink: 'https://www.youtube.com/watch?v=xr_JjAukCBI',
    paperLink: '#',
    codeLink: '#',
    details: {
      overview: 'This project framed traffic-signal control as a reinforcement learning problem, where an agent learns how to adjust signal timing based on traffic conditions. The broader aim was to explore how adaptive policies can reduce congestion compared with static timing rules.',
      approach: 'I modeled the traffic environment around state, action, and reward choices that reflect congestion and flow. The implementation focused on training and evaluating policies that could respond dynamically as vehicle patterns changed.',
      outcome: 'The project produced a working reinforcement learning demonstration and helped show how learned signal policies can improve responsiveness in simulated traffic settings. It also highlighted the practical gap between simulation success and real-world deployment requirements.',
      learnings: 'I learned how much reinforcement learning depends on reward design, environment assumptions, and evaluation discipline. The project made me more attentive to whether an agent is learning a genuinely useful behavior or simply exploiting the structure of a simulation.',
    },
  },
  {
    slug: 'medimate',
    title: 'MediMate',
    description: 'An OCR-powered medication tracking system that converts real prescriptions into structured, actionable schedules with analytics and offers smart inventory tracking and reminders.',
    summaryLines: [
      'An OCR-powered medication tracking app that turns prescription text into structured schedules.',
      'MediMate combines reminders, analytics, and inventory tracking to make medication routines easier to manage.',
    ],
    image: med,
    tags: ['Vue.js', 'FireBase', 'OCR'],
    featured: false,
    liveLink: 'https://project2-e9097.web.app',
    paperLink: '#',
    codeLink: 'https://github.com/csci5117f25/project-2-four-loops-1',
    details: {
      overview: 'MediMate was designed to help users turn real prescription information into manageable medication schedules. The project focused on reducing the friction between receiving medication instructions and actually following them day to day.',
      approach: 'The application used OCR to extract prescription details, then organized that information into reminders, tracking views, analytics, and inventory signals. I worked on the product flow so scanned information could become useful actions rather than just captured text.',
      outcome: 'The result was a deployed web application that supports medication scheduling, smart reminders, and inventory awareness. It demonstrated how OCR and a thoughtful interface can turn a messy real-world input into a practical personal health workflow.',
      learnings: 'I learned that health-adjacent tools need especially clear flows, conservative assumptions, and careful error handling. The project reinforced the importance of making automation visible and editable when users are relying on it for daily routines.',
    },
  },
];

export const projectTags = ['All', ...Array.from(new Set(projects.flatMap((project) => project.tags)))];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
