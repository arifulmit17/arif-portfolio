"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences through innovative design and development
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Profile Image */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1777485724/ChatGPT_Image_Apr_29_2026_11_57_30_PM_nn8fls.png" 
                    alt="Ariful Haque" 
                    className="w-full h-full  object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl -z-10 blur-2xl opacity-50"></div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Hello, I'm Arif
                </h3>
                <p className="text-lg text-muted-foreground text-justify leading-relaxed">
                  With over 14 months of experience in web development, I specialize in creating 
                  modern, responsive applications using NextJS, React, Express, and other latest web technologies. 
                  My passion lies in building user-centric solutions that not only look great but also 
                  deliver exceptional performance.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, learning about software architecture and efficiency
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">14+</div>
                    <div className="text-sm text-muted-foreground">Months Experience</div>
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
