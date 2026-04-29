import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const fadeVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  const projects = [
    {
      title: "Tutor Hire",
      description:
        "This site is an educational platform for teaching enthusiasts and students for benefits like tutor choice based on language, own tutorial upload.",
      image:
        "https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754313041/Capturetutor_xgtnbo.png",
      technologies: ["React", "Node.js", "MongoDB", "Firebase","TailwindCSS","Express.js","Javascript","JWT"],
      liveUrl: "https://tutor-hire-online.netlify.app/",
      githubUrl: "https://github.com/arifulmit17/tutor-hire-client",
      featured: true,
      details:"/tutor",
    },
    {
      title: "Garden Community",
      description:
        "This site is a gardening community oriented platform for gardening enthusiasts with many benefits such as weekly discussions, forums, group meetings, one to one sessions etc.",
      image:
        "https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754312947/Capturegarden_std2jq.png",
      technologies: ["React", "Node.js", "MongoDB", "Firebase","TailwindCSS","Express.js","Javascript"],
      liveUrl: "https://garden-community-online.netlify.app/",
      githubUrl: "https://github.com/arifulmit17/garden-community-client",
      featured: true,
       details:"/garden",
    },
    {
      title: "Subscription Box",
      description:
        "This site focuses to facilitate users to avail diverse subscription packages of popular streaming services on monthly basis",
      image:
        "https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754313017/Capture_sub_hlzbiu.png",
      technologies: ["React.js", "React-router", "Tailwind Css", "Firebase" , "Daisy-UI"],
      liveUrl: "https://batch11a09subscriptionbox.netlify.app/",
      githubUrl: "https://github.com/arifulmit17/subscription-box",
      featured: false,
       details:"/subscribe",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating technical skills and
              creative problem-solving
            </p>
          </motion.div>

          {/* Project List */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const direction = index % 2 === 0 ? "left" : "right";
              return (
                <motion.div
                  key={project.title}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                  custom={direction}
                  variants={fadeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Project Image */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    } relative group`}
                  >
                    <div className="overflow-hidden rounded-2xl shadow-elegant group-hover:shadow-hover transition-all duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-4">
                        <a
                        target="_blank"
                          href={project.liveUrl}
                          className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a
                        target="_blank"
                          href={project.githubUrl}
                          className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium hover:bg-secondary transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                        <Link to={project.details}
                        target="_blank"
                          href={project.liveUrl}
                          className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Project Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Projects;
