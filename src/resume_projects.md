# Projects

## Linguistic Precursors to Financial Restatements

**Description:**  
A research-oriented NLP project investigating whether subtle linguistic patterns in corporate earnings calls can signal future financial restatements before they become public. The project compares scripted executive remarks with unscripted analyst Q&A and uses explainability methods to understand which language patterns influence model predictions.

**Tech Stack / Tags:**  
Python, NLP, FinBERT, Longformer, LLM Prompting, SHAP, Integrated Gradients, Text Classification, Financial Text Analysis, Explainable AI

**Highlights:**
- Built a benchmark dataset linking SEC Form 8-K restatement filings to earnings call transcripts.
- Designed a transcript segmentation pipeline to separate prepared remarks from analyst Q&A.
- Evaluated lexicon baselines, domain-specific transformer models, and LLM prompting approaches.
- Applied SHAP and integrated gradients to interpret model behavior.

---

## The Sound of Each Decade

**Description:**  
An interactive data storytelling project exploring how popular music changed from 1960 to 2020. It focuses on trends in features such as danceability, valence, loudness, and acousticness, including the contrast between increasingly danceable music and sadder emotional tone.

**Tech Stack / Tags:**  
Python, Pandas, NumPy, React, D3.js, Data Visualization, Visual Storytelling, Exploratory Data Analysis

**Highlights:**
- Analyzed 160,000+ Spotify tracks across seven decades.
- Cleaned and engineered features across 13 numerical musical attributes.
- Identified long-term trends in valence, loudness, acousticness, and danceability.
- Built an interactive React and D3.js narrative visualization.

---

## Real-Time Scoring for Rhubarb Dice Game

**Description:**  
A real-time computer vision system for detecting, tracking, and scoring cards and colored dice in a physical game setting. The project focuses on robust object detection and score stabilization under challenging visual conditions such as rotation, occlusion, motion blur, and small-object detection.

**Tech Stack / Tags:**  
Python, OpenCV, YOLOv8, YOLO-CLS, Computer Vision, Object Detection, Object Tracking, Kalman Filtering, K-Means

**Highlights:**
- Built an end-to-end vision pipeline for detecting cards and dice in real time.
- Used YOLOv8 for object detection and YOLO-CLS for dice value classification.
- Applied K-Means clustering for dice color classification.
- Implemented tracking and association using IoU, centroid matching, Kalman filtering, EMA, and overlap-based methods.
- Replaced event-based scoring with frame-level snapshot scoring to improve stability.

---

## Standardized Analysis of Celiac Disease Gut Microbiomes Using QIIME2

**Description:**  
A biomedical data analysis project studying gut microbiome differences associated with celiac disease using 16S rRNA sequencing data. The project focuses on building a reproducible microbiome analysis pipeline and interpreting microbial community differences through taxonomic and phylogeny-aware methods.

**Tech Stack / Tags:**  
QIIME2, DADA2, SILVA, UniFrac, Bray-Curtis, Faith’s PD, Shannon Diversity, 16S rRNA, Bioinformatics, Microbiome Analysis

**Highlights:**
- Designed and executed an end-to-end 16S rRNA microbiome analysis pipeline using QIIME2.
- Performed quality control and denoising using DADA2.
- Conducted taxonomy assignment using the SILVA database.
- Built phylogenetic trees and performed alpha/beta diversity analyses.
- Interpreted results showing preserved taxonomic richness but reduced phylogenetic diversity and lineage-level restructuring in celiac samples.

---

## Adaptive Traffic Congestion Control

**Description:**  
A reinforcement learning project focused on dynamically optimizing traffic light timings at a four-way intersection. The system uses simulated traffic conditions to support adaptive decision-making based on real-time traffic density.

**Tech Stack / Tags:**  
Python, Reinforcement Learning, Deep Q-Learning, SUMO, Deep Neural Networks, Traffic Simulation, Sequential Decision-Making

**Highlights:**
- Used Deep Q-Learning to adjust traffic signal timings dynamically.
- Modeled lane-level traffic flow and intersection configurations using SUMO.
- Enabled decision-making across four predefined traffic light phases.
- Built a Deep Neural Network to select traffic control actions based on traffic conditions.

---

## Image Super-Resolution

**Description:**  
A deep learning project focused on improving the resolution and visual quality of low-resolution images. The project implements a Super-Resolution Generative Adversarial Network to generate sharper and more detailed high-resolution outputs.

**Tech Stack / Tags:**  
Python, GANs, SRGAN, Deep Learning, Computer Vision, Image Super-Resolution, Perceptual Loss

**Highlights:**
- Implemented a Super-Resolution GAN for 4x image up-sampling.
- Used perceptual loss based on features from a pre-trained deep neural network.
- Generated more photo-realistic images with improved texture and detail.

---

## ClashPoint — Online Debating Forum

**Description:**  
A full-stack online debating platform that supports real-time discussion, argument posting, replies, voting, and content moderation. The project combines threaded discussion design with toxicity detection to support safer online debate.

**Tech Stack / Tags:**  
Flask, PostgreSQL, TensorFlow.js, JavaScript, AJAX, Full-Stack Development, Web Application, Content Moderation

**Highlights:**
- Developed the main debate page for viewing, posting, replying to, editing, and deleting arguments.
- Implemented nested threaded discussions with recursive AJAX-based rendering.
- Added voting and server-side score computation.
- Integrated real-time toxicity moderation using TensorFlow.js to prevent offensive content from being posted.

---

## MediMate — Medication Tracking Web App

**Description:**  
A full-stack medication management application designed to help users scan prescriptions, schedule medications, track doses, monitor inventory, and receive reminders. The project focuses on making medication tracking more structured, flexible, and reliable.

**Tech Stack / Tags:**  
Vue.js, Firebase, Tesseract.js, OCR, JavaScript, Full-Stack Development, Medication Tracking, Web Application

**Highlights:**
- Built OCR-based prescription scanning using Tesseract.js.
- Designed medication add/edit workflows with flexible scheduling options.
- Implemented real-time dose tracking, inventory tracking, and reminder logic.
- Developed dynamic dose logging and undo behavior with transactional consistency.
- Added fallback scheduling logic for medications without specified times.
