export type Experience = {
  role: string;
  org: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Development Engineer",
    org: "Teleperformance",
    location: "India",
    start: "Nov 2023",
    end: "May 2025",
    bullets: [
      "Developed full-stack web applications tailored to diverse client requirements, utilizing C#, .NET Framework, MVC architecture, HTML, CSS and JavaScript.",
      "Optimized stored procedures in SQL Server by restructuring queries and leveraging indexing strategies, reducing processing times by ~50%. ",
      "Spearheaded the development of a collaborative real-time document editor, using ReactJS, TypeScript, Express, Socket.io and PostgreSQL, ensuring seamless synchronization.",
    ],
  },
  {
    role: "Summer Intern",
    org: "GGSIPU USS ACM",
    location: "Delhi, India",
    start: "July 2022",
    end: "Sept 2022",
    bullets: [
      "Developed a decentralized system to mint academic credentials as NFTs on the Ethereum blockchain securely.",
      "Designed web interface (MERN stack, Web3.js) and smart contracts using Solidity to manage document uploads, NFT minting and wallet-based certificate transfers with guaranteed transparency.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    org: "Teleperformance",
    location: "India",
    start: "Dec 2021",
    end: "April 2022",
    bullets: [
      "Developed a Face Recognition-Based Attendance System, with Django and OpenCV, to create a dynamic web application for seamless attendance management.",
      "Integrated role-based access control with Admin and User Logins, enabling personalized dashboards and secure data access.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "GGSIPU USS ACM",
    location: "Delhi, India",
    start: "Aug 2021",
    end: "Sept 2021",
    bullets: [
      "Developed a Real-time Drowsiness Detection System leveraging computer vision and deep learning techniques to enhance road safety by alerting drivers showing signs of fatigue.",
      "Implemented face and eye detection using OpenCV and Haar Cascade Classifiers, leveraging the Viola-Jones algorithm to implement robust face and eye region detection in real-time from live video streams.",
      "Designed and trained a stacked deep convolutional neural network (CNN) and employed MobileNet for transfer learning to extract dynamic features from keyframes in video sequences.",
      "Integrated a Sigmoid classifier layer in the CNN architecture to predict the driver’s state as drowsy or alert, triggering an alarm when drowsiness was detected continuously.",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  start: string;
  end: string;
  detail: string;
};

export const education: Education[] = [
  {
    degree: "M.S. in Computer Science",
    school: "University of Minnesota - Twin Cities",
    start: "2025",
    end: "2027 (expected)",
    detail: "Research focus: ML for finance and biology. GPA 4.0/4.0.",
  },
  {
    degree: "B.Tech in Computer Science",
    school: "Guru Gobind Singh Indraprastha University",
    start: "2019",
    end: "2023",
    detail: "GPA 8.87/10.00",
  },
];
