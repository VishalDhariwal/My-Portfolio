import { PageWrapper } from "@/components/PageWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Brain,
    title: "Research-Driven",
    description:
      "I focus on understanding algorithms deeply and applying ML techniques to real-world problems.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly exploring cutting-edge technologies, models, and AI-driven solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working with teams, sharing ideas, and contributing to open-source and research initiatives.",
  },
  {
    icon: Zap,
    title: "Optimization",
    description:
      "Always improving model performance, efficiency, and production-level reliability.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Machine Learning Researcher, Programmer, and Full-Stack Developer passionate
            about creating intelligent, high-impact solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a machine learning researcher and software developer who loves turning
                data-driven insights into meaningful applications. My work spans algorithmic
                research, model development, and full-stack implementation.
              </p>
              <p>
                My passion started with programming and curiosity about how intelligent
                systems learn. Over the years, that curiosity evolved into deep exploration of
                machine learning, neural networks, and real-world AI deployment.
              </p>
              <p>
                When I'm not experimenting with models, you'll find me building applications,
                contributing to ML communities, optimizing systems, or sharing knowledge
                through mentoring and content creation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-section-bg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Role</p>
                <p className="text-muted-foreground">Machine Learning Researcher & Developer</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Experience</p>
                <p className="text-muted-foreground">Multiple years in ML, research & full-stack development</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Specialization</p>
                <p className="text-muted-foreground">Deep Learning, ML Engineering, AI Systems</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Interests</p>
                <p className="text-muted-foreground">AI Research, MLOps, Web Dev, Open Source, Cloud ML</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What I Value</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      <value.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default About;
