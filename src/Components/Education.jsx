

import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Master in IT",
      department: "Institute of Information Technology",
      school: "Dhaka University",
    },
    {
      degree: "Bachelor of Science and Engineering",
      department: "Electronics and Communication Engineering",
      school: "Khulna University of Engineering and Technology",
    },
  ];

  // Container animation for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="py-20 bg-base-200/50 mx-auto w-11/12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-base-content mb-4">
            Education
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            My academic journey and continuous learning in technology
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-6xl w-full mx-auto space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="card-body">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-base-content mb-1">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {edu.school}
                        </h4>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {edu.department}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-lg">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-base-content mb-2">
                Continuous Learning
              </h3>
              <p className="text-base-content/70">
                Always expanding my knowledge through online courses, workshops,
                and industry certifications to stay current with emerging
                technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
