const projects = [
  {
    slug: "financial-restatements-nlp",
    title: "Linguistic Precursors to Financial Restatements",
    summary: "NLP research on whether earnings-call language can signal future financial restatements before they become public.",
    year: "Recent",
    domain: "Finance",
    tech: [
      "Python",
      "NLP",
      "FinBERT",
      "Longformer",
      "LLM Prompting",
      "SHAP",
      "Integrated Gradients"
    ],
    featured: true,
    details: {
      overview: "A research-oriented NLP project investigating whether subtle linguistic patterns in corporate earnings calls can signal future financial restatements before they become public.",
      problem: "Financial restatements are often revealed after investors, analysts and regulators have already relied on inaccurate reporting. The project asks whether management language and analyst exchanges contain earlier warning signals.",
      approach: [
        "Built a benchmark dataset linking SEC Form 8-K restatement filings to earnings call transcripts.",
        "Designed a transcript segmentation pipeline to separate prepared executive remarks from analyst Q&A.",
        "Evaluated lexicon baselines, domain-specific transformer models and LLM prompting approaches.",
        "Applied SHAP and integrated gradients to interpret which language patterns influenced predictions."
      ],
      outcomes: [
        "Compared scripted and unscripted transcript segments as separate predictive signals.",
        "Created an explainable modeling workflow for financial text classification.",
        "Connected model predictions back to interpretable language patterns instead of treating outputs as black boxes."
      ],
      learnings: [
        "Segmentation quality matters as much as model choice in transcript analysis.",
        "Explainability is essential when modeling high-stakes financial language.",
        "Domain-specific models still need careful baselines to be meaningful."
      ],
      results: [
        { label: "Source filings", value: "8-K" },
        { label: "Transcript views", value: "2" },
        { label: "Explainability", value: "SHAP + IG" }
      ]
    }
  },
  {
    slug: "medirag-medical-literature",
    title: "MediRAG: A RAG System for Medical Literature",
    summary: "An end-to-end RAG pipeline over PubMed abstracts on mRNA cancer vaccines with source-grounded Llama 3 answers.",
    year: "Recent",
    domain: "Biotech",
    tech: ["Python", "RAG", "ChromaDB", "Llama 3", "Sentence Transformers", "PubMed"],
    featured: true,
    details: {
      overview: "A retrieval-augmented generation system built over 200 peer-reviewed PubMed abstracts on mRNA cancer vaccines using Llama 3 and ChromaDB.",
      problem: "Medical literature QA needs answers that stay grounded in source material, especially when questions move between core domain topics and off-domain boundary cases.",
      approach: [
        "Built full ingestion for parsing, chunking and local vector indexing of PubMed abstracts.",
        "Implemented retrieval with sentence-transformers embeddings, cosine similarity search and deduplication.",
        "Engineered a RAG prompt with source-grounding constraints and low-temperature Llama 3 generation.",
        "Evaluated the system across 30 core domain and off-domain boundary questions."
      ],
      outcomes: [
        "Achieved 0.879 answer relevancy and 0.797 groundedness on core-domain questions.",
        "Achieved 0.779 answer relevancy and 0.782 groundedness overall.",
        "Reduced hallucination risk through source-grounded prompting and low-temperature generation."
      ],
      learnings: [
        "Retrieval quality and deduplication strongly shape downstream answer faithfulness.",
        "Boundary-case evaluation is necessary for judging whether a RAG system knows when evidence is thin.",
        "Prompt constraints are most useful when paired with measurable groundedness checks."
      ],
      results: [
        { label: "Abstracts", value: "200" },
        { label: "Core relevancy", value: "0.879" },
        { label: "Core groundedness", value: "0.797" }
      ]
    }
  },
  {
    slug: "celiac-microbiome-qiime2",
    title: "Standardized Analysis of Celiac Disease Gut Microbiomes",
    summary: "A reproducible QIIME2 pipeline for studying gut microbiome differences associated with celiac disease.",
    year: "Recent",
    domain: "Biotech",
    tech: ["QIIME2", "DADA2", "SILVA", "UniFrac", "Bray-Curtis", "Faith's PD", "16S rRNA"],
    featured: true,
    details: {
      overview: "A biomedical data analysis project studying gut microbiome differences associated with celiac disease using 16S rRNA sequencing data.",
      problem: "Microbiome studies need reproducible preprocessing and phylogeny-aware interpretation to distinguish taxonomic richness from deeper lineage-level community changes.",
      approach: [
        "Designed and executed an end-to-end 16S rRNA microbiome analysis pipeline using QIIME2.",
        "Performed quality control and denoising using DADA2.",
        "Assigned taxonomy with the SILVA database.",
        "Built phylogenetic trees and performed alpha and beta diversity analyses."
      ],
      outcomes: [
        "Produced a standardized workflow for celiac disease gut microbiome analysis.",
        "Interpreted results showing preserved taxonomic richness alongside reduced phylogenetic diversity.",
        "Identified evidence of lineage-level restructuring in celiac samples."
      ],
      learnings: [
        "Taxonomic and phylogenetic diversity can tell different biological stories.",
        "A reproducible pipeline makes interpretation easier to audit.",
        "Preprocessing decisions carry through every downstream statistical result."
      ],
      results: [
        { label: "Sequencing", value: "16S" },
        { label: "Pipeline", value: "QIIME2" },
        { label: "Diversity", value: "Alpha/Beta" }
      ]
    }
  },
  {
    slug: "rhubarb-dice-scoring",
    title: "Real-Time Scoring for Rhubarb Dice Game",
    summary: "A computer vision system for detecting, tracking and scoring cards and colored dice in a physical game setting.",
    year: "Recent",
    domain: "ML",
    tech: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "YOLO-CLS",
      "Object Detection",
      "Kalman Filtering",
      "K-Means"
    ],
    featured: true,
    details: {
      overview: "A real-time computer vision system for detecting, tracking and scoring cards and colored dice under rotation, occlusion, motion blur and small-object detection challenges.",
      problem: "Physical tabletop scoring is visually messy: dice are small, cards rotate, pieces overlap and frame-by-frame detections can flicker enough to make scoring unreliable.",
      approach: [
        "Built an end-to-end vision pipeline for detecting cards and dice in real time.",
        "Used YOLOv8 for object detection and YOLO-CLS for dice value classification.",
        "Applied K-Means clustering for dice color classification.",
        "Implemented tracking and association using IoU, centroid matching, Kalman filtering, EMA and overlap-based methods.",
        "Replaced event-based scoring with frame-level snapshot scoring to improve stability."
      ],
      outcomes: [
        "Stabilized game-state detection across noisy visual conditions.",
        "Combined object detection, classification, color clustering and tracking into one scoring loop.",
        "Improved scoring reliability by grounding scores in frame-level snapshots."
      ],
      learnings: [
        "A good tracking layer can matter more than a slightly better detector.",
        "Small-object classification benefits from separate value and color handling.",
        "Snapshot scoring is easier to reason about than event streams when detections are noisy."
      ],
      results: [
        { label: "Detection", value: "YOLOv8" },
        { label: "Tracking", value: "Kalman" },
        { label: "Scoring", value: "Real-time" }
      ]
    }
  },
  {
    slug: "sound-of-each-decade",
    title: "The Sound of Each Decade",
    summary: "An interactive data story on how popular music changed from 1960 to 2020 across Spotify audio features.",
    year: "Recent",
    domain: "ML",
    tech: ["Python", "Pandas", "NumPy", "React", "D3.js", "Data Visualization", "EDA"],
    featured: false,
    details: {
      overview: "An interactive data storytelling project exploring how popular music changed from 1960 to 2020, including the contrast between increasingly danceable music and sadder emotional tone.",
      problem: "Large music datasets can hide long-term cultural patterns unless numerical audio features are cleaned, grouped and presented as an explorable narrative.",
      approach: [
        "Analyzed more than 160,000 Spotify tracks across seven decades.",
        "Cleaned and engineered features across 13 numerical musical attributes.",
        "Compared long-term trends in valence, loudness, acousticness and danceability.",
        "Built an interactive React and D3.js narrative visualization."
      ],
      outcomes: [
        "Surfaced decade-level shifts in musical mood, production and energy.",
        "Built a visual story around the tension between danceability and emotional tone.",
        "Turned exploratory audio analysis into an interactive reader experience."
      ],
      learnings: [
        "Data storytelling works best when each chart earns its place in the narrative.",
        "Feature engineering decisions strongly shape cultural interpretation.",
        "Interactivity is most useful when it lets readers compare, not just browse."
      ],
      results: [
        { label: "Tracks", value: "160K+" },
        { label: "Decades", value: "7" },
        { label: "Features", value: "13" }
      ]
    }
  },
  {
    slug: "adaptive-traffic-control",
    title: "Adaptive Traffic Congestion Control",
    summary: "Deep Q-learning for dynamically optimizing traffic light timings at a simulated four-way intersection.",
    year: "Recent",
    domain: "Systems",
    tech: ["Python", "Reinforcement Learning", "Deep Q-Learning", "SUMO", "Deep Neural Networks"],
    featured: false,
    details: {
      overview: "A reinforcement learning project focused on dynamically optimizing traffic light timings at a four-way intersection using simulated traffic conditions.",
      problem: "Fixed signal timings cannot adapt to real-time density changes, causing avoidable congestion when traffic patterns shift.",
      approach: [
        "Used Deep Q-Learning to adjust traffic signal timings dynamically.",
        "Modeled lane-level traffic flow and intersection configurations using SUMO.",
        "Enabled decision-making across four predefined traffic light phases.",
        "Built a deep neural network to select traffic control actions based on traffic conditions."
      ],
      outcomes: [
        "Created an adaptive signal-control system driven by simulated density.",
        "Connected lane-level observations to sequential decision-making.",
        "Explored reinforcement learning as a tool for urban traffic optimization."
      ],
      learnings: [
        "Simulation design defines the quality of the control policy.",
        "Traffic phases need clear constraints before an RL agent can behave usefully.",
        "Reward shaping is central to congestion-control behavior."
      ]
    }
  },
  {
    slug: "image-super-resolution",
    title: "Image Super-Resolution",
    summary: "An SRGAN-based deep learning project for generating sharper high-resolution images from low-resolution inputs.",
    year: "Recent",
    domain: "ML",
    tech: ["Python", "GANs", "SRGAN", "Deep Learning", "Computer Vision", "Perceptual Loss"],
    featured: false,
    details: {
      overview: "A deep learning project focused on improving the resolution and visual quality of low-resolution images using a Super-Resolution Generative Adversarial Network.",
      problem: "Pixel-wise upscaling often produces blurry outputs because it optimizes for average reconstruction rather than perceptual sharpness.",
      approach: [
        "Implemented a Super-Resolution GAN for 4x image up-sampling.",
        "Used perceptual loss based on features from a pre-trained deep neural network.",
        "Trained the model to generate more realistic textures and visual detail."
      ],
      outcomes: [
        "Generated sharper high-resolution outputs from low-resolution images.",
        "Explored the tradeoff between reconstruction accuracy and perceptual realism.",
        "Implemented a complete GAN training workflow for computer vision enhancement."
      ],
      learnings: [
        "Perceptual quality is not captured by pixel loss alone.",
        "GAN training benefits from disciplined visual checks throughout training.",
        "Texture recovery is as much about loss design as architecture."
      ]
    }
  },
  {
    slug: "clashpoint-debating-forum",
    title: "ClashPoint - Online Debating Forum",
    summary: "A full-stack debating platform with threaded arguments, voting, moderation and real-time toxicity detection.",
    year: "Recent",
    domain: "Systems",
    tech: ["Flask", "PostgreSQL", "TensorFlow.js", "JavaScript", "AJAX", "Content Moderation"],
    featured: false,
    details: {
      overview: "A full-stack online debating platform that supports real-time discussion, argument posting, replies, voting and content moderation.",
      problem: "Online debate tools need both rich threaded discussion mechanics and moderation safeguards to keep conversations usable.",
      approach: [
        "Developed the main debate page for viewing, posting, replying to, editing and deleting arguments.",
        "Implemented nested threaded discussions with recursive AJAX-based rendering.",
        "Added voting and server-side score computation.",
        "Integrated real-time toxicity moderation using TensorFlow.js to prevent offensive content from being posted."
      ],
      outcomes: [
        "Built a complete debate workflow from argument creation through moderation.",
        "Supported nested discussions without full-page reloads.",
        "Added automated client-side toxicity checks before submission."
      ],
      learnings: [
        "Threaded interfaces need careful recursive rendering and state handling.",
        "Moderation belongs in the product flow, not as an afterthought.",
        "Server-side score computation keeps voting behavior consistent."
      ]
    }
  },
  {
    slug: "medimate-medication-tracker",
    title: "MediMate - Medication Tracking Web App",
    summary: "A medication management app for prescription scanning, schedules, dose tracking, inventory and reminders.",
    year: "Recent",
    domain: "Systems",
    tech: ["Vue.js", "Firebase", "Tesseract.js", "OCR", "JavaScript", "Medication Tracking"],
    featured: false,
    details: {
      overview: "A full-stack medication management application designed to help users scan prescriptions, schedule medications, track doses, monitor inventory and receive reminders.",
      problem: "Medication tracking needs flexible schedules, reliable logging and inventory awareness while staying simple enough for repeated daily use.",
      approach: [
        "Built OCR-based prescription scanning using Tesseract.js.",
        "Designed medication add and edit workflows with flexible scheduling options.",
        "Implemented real-time dose tracking, inventory tracking and reminder logic.",
        "Developed dynamic dose logging and undo behavior with transactional consistency.",
        "Added fallback scheduling logic for medications without specified times."
      ],
      outcomes: [
        "Created a structured medication tracking workflow from scan to reminder.",
        "Supported flexible dose schedules and inventory-aware state updates.",
        "Improved reliability with transactional dose logging and undo behavior."
      ],
      learnings: [
        "Health-adjacent workflows need forgiving defaults and clear state transitions.",
        "OCR helps most when paired with easy correction paths.",
        "Undo behavior is a core reliability feature for tracking apps."
      ]
    }
  }
];
export {
  projects as p
};
