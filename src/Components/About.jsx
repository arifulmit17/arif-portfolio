"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-subtle-gradient">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
          About Me
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate about creating exceptional digital experiences through innovative design and development
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Image */}
        <motion.div
          className="order-1 lg:order-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-sm md:max-w-md">
            
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
              <img
                src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1777485724/ChatGPT_Image_Apr_29_2026_11_57_30_PM_nn8fls.png"
                alt="Ariful Haque"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl -z-10 blur-2xl opacity-50"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="order-2 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-5 md:space-y-6">

            <h3 className="text-xl md:text-3xl font-semibold text-center lg:text-left">
              Hello, I'm Arif
            </h3>

            <div className="text-sm md:text-lg text-muted-foreground leading-relaxed text-justify">
              <p>
                With over 14 months of experience in web development, I build modern, scalable, and responsive applications using Next.js, React, Express, and related technologies.
              </p>

              <br />

              <p>
                I focus on creating user-centric solutions that balance clean design, performance, and maintainability.
              </p>

              <br />

              <p>
                Outside of work, I enjoy gardening and playing the guitar, which help me stay creative and balanced.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 pt-6 text-center">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">10+</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Projects
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">14+</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Months Exp
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="col-span-2 sm:col-span-1"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Technologies
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </div>
</section>
  );
};

export default About;
