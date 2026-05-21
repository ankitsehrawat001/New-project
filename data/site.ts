import { BarChart3, BrainCircuit, Code2, Cpu, Database, Globe2, Sparkles, Workflow, Zap } from "lucide-react";

export const profile = {
  name: "Ankit",
  role: "AI/ML Developer and React.js Portfolio Builder",
  email: "ankit.dev@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  location: "India"
};

export const stats = [
  ["04", "AI-focused projects"],
  ["15+", "Tools and libraries"],
  ["03", "Model workflows"],
  ["100%", "Learning mindset"]
];

export const services = [
  { icon: BrainCircuit, title: "Machine Learning", text: "Build supervised ML pipelines with clear preprocessing, training, evaluation, and readable results." },
  { icon: BarChart3, title: "Data Analysis", text: "Explore datasets, find patterns, create charts, and explain insights in simple product language." },
  { icon: Globe2, title: "React Interfaces", text: "Create responsive React.js and Next.js interfaces that make AI projects easy to understand." },
  { icon: Workflow, title: "Python Automation", text: "Write scripts and small tools for data cleaning, repetitive tasks, and workflow improvement." }
];

export const skills = [
  { group: "AI / ML", items: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Model Evaluation", "Feature Engineering"] },
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "Authentication Basics", "Databases", "Validation", "Testing"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Deployment", "Prompt Engineering"] }
];

export const projects = [
  {
    slug: "student-performance-predictor",
    title: "Student Performance Predictor",
    type: "Machine Learning",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
    stack: ["Python", "Pandas", "Scikit-learn", "Regression", "Model Evaluation"],
    summary: "A machine learning workflow that predicts student performance from study habits, attendance, and academic features.",
    challenge: "Turn a raw dataset into a model that is explainable, measurable, and useful for early academic support.",
    solution: "Cleaned the data, compared baseline models, measured error, and presented the most important factors clearly.",
    outcome: "A practical AI/ML project that shows the full path from dataset to prediction and insight.",
    href: "#"
  },
  {
    slug: "ai-dashboard",
    title: "AI Insight Dashboard",
    type: "React.js / Data UI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    stack: ["React.js", "Next.js", "Tailwind CSS", "Charts", "Data UX"],
    summary: "A responsive dashboard concept for displaying model metrics, dataset summaries, and prediction outputs.",
    challenge: "Make technical AI results easy to scan for users who need fast decisions instead of raw notebooks.",
    solution: "Designed metric cards, model-status sections, visual hierarchy, and responsive layouts for analysis workflows.",
    outcome: "A portfolio-ready interface that connects machine learning work with product presentation.",
    href: "#"
  },
  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis Tool",
    type: "Natural Language Processing",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    stack: ["Python", "NLP", "Text Cleaning", "Classification", "Evaluation"],
    summary: "A text classification prototype that identifies positive, neutral, and negative sentiment from user feedback.",
    challenge: "Build an NLP workflow that handles noisy text and communicates confidence without overcomplication.",
    solution: "Prepared text, trained a baseline classifier, reviewed predictions, and documented model behavior.",
    outcome: "A clear NLP case study suitable for internships, interviews, and future product expansion.",
    href: "#"
  },
  {
    slug: "atm-banking-system",
    title: "ATM Banking System",
    type: "Python / OOP",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop",
    stack: ["Python", "OOP", "CLI UX", "Validation", "Security Logic"],
    summary: "A banking simulation with account workflows, transaction rules, balance checks, and clean terminal interaction.",
    challenge: "Design reliable account actions while keeping the logic readable and easy to extend.",
    solution: "Structured banking operations around reusable functions, input guards, and clear state changes.",
    outcome: "A strong Python foundation project that demonstrates programming fundamentals and edge-case thinking.",
    href: "#"
  }
];

export const timeline = [
  ["2024", "Built Python fundamentals with CLI programs, OOP practice, and structured problem solving."],
  ["2025", "Moved into React.js, Next.js, responsive portfolio work, and practical data analysis."],
  ["2026", "Focused on AI/ML projects, model evaluation, automation, and production-ready presentation."]
];

export const certifications = [
  "Python Programming Foundations",
  "Machine Learning Fundamentals",
  "Responsive Web Design",
  "Git and GitHub Essentials",
  "Data Analysis with Python"
];

export const testimonials = [
  ["Clear learner with strong consistency and improving technical judgment.", "Project Mentor"],
  ["Ankit connects Python logic with practical user-facing presentation.", "Peer Developer"],
  ["The portfolio communicates AI/ML growth with focused execution.", "Technical Reviewer"]
];

export const posts = [
  ["How I Approach an ML Project", "From dataset cleaning to model evaluation and honest results."],
  ["React for AI/ML Portfolios", "Why project presentation matters as much as the notebook."],
  ["Python as an AI Foundation", "Building fundamentals before moving into advanced systems."]
];

export const techIcons = [Code2, Cpu, Database, Zap];
