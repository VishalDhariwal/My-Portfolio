import { PageWrapper } from "@/components/PageWrapper.tsx";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React", "React.js", "Redux", "Redux Toolkit", "TypeScript",
      "JavaScript", "Next.js", "Tailwind CSS",
      "HTML5", "CSS3"
    ],
  },
  {
    category: "Backend",
    skills: [
      "Python", "Django",
      "Spring Boot", "Hibernate", "Appwrite (BaaS)",
      "REST APIs"
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git", "GitHub", "Docker",
      "Vercel", "Firebase", "Render",
      "VS Code", "Postman", "Linux",
      "PostgreSQL", "MySQL", "MongoDB", "Redis",
      "Pandas", "NumPy", "Scikit-learn", "Selenium",
      "TensorFlow", "Kaggle", "Google Colab"
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      "Java", "Python", "JavaScript", "C++", "SQL"
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem Solving", "Team Collaboration", "Communication",
      "Project Management", "Agile/Scrum", "Code Review",
      "Technical Writing", "Mentoring", "Time Management",
      "Adaptability"
    ],
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const Skills = () => {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <div className="w-2 h-8 bg-primary rounded-full" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-skill-badge text-skill-badge-text hover:bg-skill-badge/80 px-3 py-1.5 text-sm font-medium"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-section-bg rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Always Learning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
            new areas like Web3, Machine Learning, and advanced cloud architectures to stay at the 
            forefront of modern development.
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
