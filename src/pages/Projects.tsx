import { PageWrapper } from "@/components/PageWrapper.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Notes – Real-Time CRUD App",
    description: "A powerful notes app featuring real-time synchronization, create/edit/delete functionality, and smooth user experience.",
    "tags": ["React", "Vite", "Redux", "TailwindCSS", "Appwrite", "Notes App", "CRUD"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    github: "https://github.com/VishalDhariwal/SyncNote-Repo-react",
    // demo: "https://example.com",
  },
  {
    title: "Fake News Detection",
    description: "A modern fake news detection system built with React, TypeScript, and Vite. Features a clean ShadCN UI, API-based classification, confidence scoring, and interactive data visualizations.",
    tags: ["React", "TypeScript", "Vite", "ShadCN", "Tailwind", "API Integration", "React Query"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    github: "https://github.com/VishalDhariwal/Fake-news-prediction-app",
    // demo: "https://example.com",
  },

  {
    title: "Library Management App",
    description: "A full-featured Library Management System built with Spring Boot, JPA, Thymeleaf, and MySQL. Supports book inventory management, member records, issue/return tracking, and administrative controls.",
    tags: ["Spring Boot", "Java", "Thymeleaf", "MySQL", "H2", "JPA", "Library Management"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    github: "https://github.com/VishalDhariwal/Library-Management",
    // demo: "https://example.com",
  },
  {
    title: "Portfolio Website Builder",
    description: "SaaS platform for creating customizable portfolio websites with drag-and-drop.",
    tags: ["Vue.js", "Express", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media insights with data visualization.",
    tags: ["React", "Python", "D3.js", "FastAPI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first fitness app with workout plans, progress tracking, and goals.",
    tags: ["React Native", "Firebase", "Redux", "Charts"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Projects = () => {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of projects showcasing my skills and experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-skill-badge text-skill-badge-text"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
