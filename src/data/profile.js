export const profile = {
  basicInfo: {
    name: "Vivek Maswadkar",
    title: "AI Engineer | MLOps | Cloud Architect",
    location: "Pune, India", // Inferred common tech hub, user can update
    tagline: "Building reliable AI systems from idea to production.",
    summary: "Experienced AI Engineer and IT Professional with a passion for building scalable machine learning systems. I specialize in bridging the gap between data science and production engineering, leveraging cloud native technologies to deliver impactful AI solutions.",
    email: "contact@example.com", // Placeholder
    social: {
      linkedin: "https://www.linkedin.com/in/maswadkar/",
      github: "https://github.com/maswadkar",
      twitter: null
    }
  },
  skills: {
    "AI / ML": ["LLMs", "RAG", "Prompt Engineering", "Transformers", "PyTorch", "LangChain"],
    "Software / Backend": ["Python", "Node.js", "FastAPI", "REST APIs", "Microservices"],
    "Cloud / DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    "Data": ["SQL", "Snowflake", "PostgreSQL", "ETL Pipelines", "Data Modeling"],
    "Tools": ["Git", "MLflow", "Jira", "VS Code"]
  },
  experience: [
    {
      company: "Tech Company Name", // Placeholder
      role: "Senior AI Engineer",
      duration: "2022 – Present",
      location: "Remote",
      highlights: [
        "Designed and deployed LLM-based cost-optimization assistant for Snowflake workloads, reducing monthly spend by 20%.",
        "Architected a scalable RAG pipeline serving 10k+ daily requests with <200ms latency.",
        "Mentored junior engineers and established best practices for MLOps and model governance."
      ]
    },
    {
      company: "Previous Corp", // Placeholder
      role: "Cloud Architect",
      duration: "2019 – 2022",
      location: "Pune, India",
      highlights: [
        "Migrated legacy monolithic applications to microservices architecture on AWS.",
        "Implemented automated CI/CD pipelines reducing deployment time by 60%.",
        "Optimized cloud infrastructure costs resulting in $50k annual savings."
      ]
    }
  ],
  projects: [
    {
      name: "Enterprise RAG Assistant",
      tagline: "Context-aware AI chatbot for internal documentation",
      description: [
        "Built a secure RAG system using LangChain and OpenAI to answer employee queries.",
        "Integrated with Slack and Microsoft Teams for seamless access.",
        "Reduced support ticket volume by 35% within the first quarter."
      ],
      techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "AWS Lambda"],
      links: {
        github: "https://github.com/maswadkar",
        demo: null
      }
    },
    {
      name: "Cloud Cost Optimizer",
      tagline: "Automated analysis of cloud resource usage",
      description: [
        "Developed a tool to analyze AWS usage patterns and recommend cost-saving actions.",
        "Implemented automated alerts for budget anomalies.",
        "Saved the organization over $10k/month in wasted resources."
      ],
      techStack: ["Python", "AWS SDK", "React", "Serverless"],
      links: {
        github: "https://github.com/maswadkar",
        demo: null
      }
    },
    {
      name: "Resume Portfolio",
      tagline: "Modern, responsive personal website",
      description: [
        "Designed and built a clean, fast portfolio site using React and Tailwind.",
        "Deployed via GitHub Actions for automated CI/CD.",
        "Achieved 100/100 Lighthouse performance score."
      ],
      techStack: ["React", "Vite", "Tailwind CSS", "GitHub Pages"],
      links: {
        github: "https://github.com/maswadkar/maswadkar.github.io",
        demo: "https://maswadkar.github.io"
      }
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "University Name", // Placeholder
      duration: "2015 – 2019",
      notes: "Graduated with Distinction"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      provider: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Deep Learning Specialization",
      provider: "Coursera / DeepLearning.AI",
      year: "2022"
    }
  ]
};
