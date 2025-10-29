// Mock data for portfolio

export const personalInfo = {
  name: "Veeraboyani Revathi",
  initials: "VR",
  title: "Aspiring Data Analyst",
  location: "Mangalam, Tirupati",
  bio: "Aspiring Data Analyst with strong Python and data science fundamentals. Passionate about exploring data to derive insights and build meaningful analytical solutions. Currently pursuing B.Tech in Computer Science with a specialization in Data Science.",
  email: "veeraboyanirevathi@gmail.com",
  phone: "+91 85558 93977",
  github: "https://github.com/Revathi2006-cyber",
  graduationYear: 2027,
  image: "https://customer-assets.emergentagent.com/job_f08b201d-7eae-461c-92cd-e57057f81912/artifacts/cb07yvn8_download%20%281%29.jpeg"
};

export const interests = [
  "Drawing",
  "Reading Books",
  "Exploring Motivational Quotes"
];

export const stats = [
  { label: "Languages", value: "3+" },
  { label: "Projects", value: "2+" },
  { label: "Skills", value: "5+" }
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  specialization: "Data Science",
  institution: "Annamacharya Institute of Technology and Sciences, Tirupati",
  expectedGraduation: "2027"
};

export const skills = {
  programmingLanguages: [
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "C", level: 65 }
  ],
  dataScienceTools: [
    { name: "Pandas", level: 60 },
    { name: "NumPy", level: 60 },
    { name: "Excel", level: 70 },
    { name: "SQL", level: 55 },
    { name: "Power BI", level: 50 }
  ],
  coreCompetencies: [
    "Problem Solving",
    "Logical Thinking",
    "Communication",
    "Team Collaboration"
  ],
  developmentTools: [
    "GitHub",
    "VS Code",
    "Jupyter Notebook"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Guardian AI Assistant",
    category: "Women's Safety Application",
    description: "AI-powered women's safety assistant that detects emergency keywords through voice input and triggers automatic alerts with real-time location tracking.",
    features: [
      "Emergency keyword detection via voice input",
      "Automatic alert triggering system",
      "Real-time GPS location tracking",
      "WhatsApp messaging integration"
    ],
    technologies: ["Python", "AI/ML", "Voice Recognition", "GPS", "WhatsApp API"],
    image: "https://customer-assets.emergentagent.com/job_f08b201d-7eae-461c-92cd-e57057f81912/artifacts/phqndyd3_download%20%282%29.jpeg",
    github: "https://github.com/Revathi2006-cyber/guardian-ai-assistant",
    demoUrl: null
  },
  {
    id: 2,
    title: "Quiz Application",
    category: "Educational Platform",
    description: "Interactive quiz application built with Java featuring question selection, real-time score tracking, and comprehensive result display.",
    features: [
      "Multiple choice question format",
      "Real-time score calculation",
      "Result display with performance analytics",
      "User-friendly interface"
    ],
    technologies: ["Java", "Swing", "OOP"],
    image: "https://customer-assets.emergentagent.com/job_f08b201d-7eae-461c-92cd-e57057f81912/artifacts/aa32aixt_download%20%283%29.jpeg",
    github: "https://github.com/Revathi2006-cyber/JavaQuizApp",
    demoUrl: null
  }
];

export const contactForm = {
  onSubmit: (data) => {
    // Mock form submission
    console.log('Form submitted:', data);
    return Promise.resolve({ success: true, message: 'Message sent successfully!' });
  }
};