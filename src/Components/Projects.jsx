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
  title: "SkillBridge",
  description:
    "A full-stack tutor marketplace connecting students with expert tutors. Users can browse tutors, book sessions, and leave reviews, while tutors manage profiles, availability, and sessions.",
  image:
    "https://res.cloudinary.com/dfhlm4cyw/image/upload/v1777530729/Captureskill_dj3zir.png",
  technologies: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "shadcn/ui",
    "TailwindCSS",
    "Prisma ORM",
    "BetterAuth",
  ],
  liveUrl: "https://skillbridge-frontend-bay.vercel.app/",
  githubUrl: "https://github.com/arifulmit17/skillbridge-frontend",
  featured: true,
  details: "/project2",
},
   {
  title: "Green Community",
  description:
    "A full-stack platform where users can share, explore, and support eco-friendly ideas. Users can submit ideas, vote on others’ contributions, and monetize premium ideas, fostering collaboration and sustainability.",
  image:
    "https://res.cloudinary.com/dfhlm4cyw/image/upload/v1777527218/Capturegreen_vedjps.png", // you can replace with updated screenshot later
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma ORM",
    "Stripe",
    "JWT",
  ],
  liveUrl: "https://green-community-frontend.vercel.app",
  githubUrl: "https://github.com/arifulmit17/green-community-frontend", 
  featured: true,
  details: "/project1",
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
   <section id="projects" className="py-16 md:py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
          Featured Projects
        </h2>

        <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent work, demonstrating technical skills and creative problem-solving
        </p>
      </motion.div>

      {/* Projects */}
      <div className="space-y-14 md:space-y-16">

        {projects.map((project, index) => {
          const direction = index % 2 === 0 ? "left" : "right";

          return (
            <motion.div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center p-5 md:p-8 rounded-2xl shadow-2xl ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              custom={direction}
              variants={fadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >

              {/* Image */}
              <div
                className={`relative group w-full ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-2xl shadow-elegant group-hover:shadow-hover transition-all duration-300">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                </div>

                {project.featured && (
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-primary text-primary-foreground px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div
                className={`w-full ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >

                <div className="space-y-5 md:space-y-6">

                  {/* Title */}
                  <h3 className="text-xl md:text-3xl font-bold">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-lg text-[10px] md:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">

                    <a
                      target="_blank"
                      href={project.liveUrl}
                      className="inline-flex items-center justify-center gap-2 bg-primary text-black px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium hover:bg-primary/90 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>

                    <a
                      target="_blank"
                      href={project.githubUrl}
                      className="inline-flex items-center justify-center gap-2 border border-border px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium hover:bg-secondary transition"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>

                    <Link
                      to={project.details}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-black px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium hover:bg-primary/90 transition"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Details
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
