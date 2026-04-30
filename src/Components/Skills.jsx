import { motion } from "framer-motion";

const Skills = () => {
  const techLogos = {
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    Next: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    Tailwind: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    REST: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    DaisyUI: "https://images.seeklogo.com/logo-png/55/1/daisyui-logo-png_seeklogo-554509.png",
    Postman: "https://res.cloudinary.com/dfhlm4cyw/image/upload/v1777529095/Postman-Icon--Streamline-Svg-Logos_1_pafyrx.png",
    Axios: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_7BK9Ai5yiloaCwxElbUqKcry4jWwZxNww&s",
    Firebase: "https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png",
    React_router:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xvHxGcglgNoQAIbG567vn4QbKE6nh6w1qQ&s",
    Shadcn:"https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
Nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
Golang: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
Zod: "https://res.cloudinary.com/dfhlm4cyw/image/upload/v1777528800/Zod--Streamline-Svg-Logos_qlrsvw.png",
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", logo: techLogos.React },
        { name: "NextJs", logo: techLogos.Next },
        { name: "Tailwind CSS", logo: techLogos.Tailwind },
        { name: "TypeScript", logo: techLogos.TypeScript },
        { name: "JavaScript", logo: techLogos.JavaScript },
        { name: "HTML/CSS", logo: techLogos.HTML },
      ],
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
   {
  title: "Backend Development",
  skills: [
    { name: "Node.js", logo: techLogos.Node },
    { name: "Express", logo: techLogos.Express },
    { name: "Golang", logo: techLogos.Golang }, // ✅ added
    { name: "PostgreSQL", logo: techLogos.PostgreSQL },
    { name: "MongoDB", logo: techLogos.MongoDB },
    { name: "REST APIs", logo: techLogos.REST },
    { name: "Firebase", logo: techLogos.Firebase },
    { name: "Nginx", logo: techLogos.Nginx }, // ✅ added
  ],
  gradient: "from-green-500/10 to-emerald-500/10",
},
   {
  title: "Tools",
  skills: [
    { name: "Git", logo: techLogos.Git },
    { name: "Docker", logo: techLogos.Docker }, // ✅ added
    { name: "Daisy Ui", logo: techLogos.DaisyUI },
    { name: "Postman", logo: techLogos.Postman },
    { name: "Axios", logo: techLogos.Axios },
    { name: "React-router", logo: techLogos.React_router },
    { name: "Shadcn UI", logo: techLogos.Shadcn },
    { name: "Zod", logo: techLogos.Zod }, // ✅ added
  ],
  gradient: "from-orange-500/10 to-yellow-500/10",
}
  ];

  // Container stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  // Card animation (looping while in view)
 const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

  return (
    <section id="skill" className="py-16 md:py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
          Skills
        </h2>

        <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable, and user-friendly applications
        </p>
      </div>

      {/* Skill Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >

        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            className="card-portfolio p-4 md:p-6"
          >

            {/* Title */}
            <div className="flex items-center mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold">
                {category.title}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">

              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`group flex flex-col items-center p-3 md:p-4 rounded-xl bg-gradient-to-br ${category.gradient} hover:scale-105 transition-all duration-300 cursor-pointer border border-border/50 hover:border-primary/30`}
                >

                  {/* Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3 flex items-center justify-center">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-200"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Name */}
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-center text-foreground/80 group-hover:text-primary transition-colors duration-200">
                    {skill.name}
                  </span>

                </div>
              ))}

            </div>
          </motion.div>
        ))}

      </motion.div>
    </div>
  </div>
</section>
  );
};

export default Skills;
