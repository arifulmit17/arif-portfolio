import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
const fileId = '1tlgFNtwOQOoShv8RlF5T5eluEuEw3I2K';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.download = 'document.pdf'; 
    link.click();
  };
const Experience = () => {
  const experiences = [
    {
      title: "Junior frontend developer intern",
      company: "Level 6 it",
      location: "Rajshahi",
      period: " September,2025 - January,2026",
      type: "Full-time",
      description: "Build engaging and user-friendly landing page and websites",
      responsibilities: [
        
            "Convert figma designs to interactive and responsive websites",
            "Take inspiration from different websites to make responsive and interactive websites",
            "Build website using reusable components and modular code",
            "Connect REST API to the frontend and test api using postman"
                        
      ],
    },
    {
      title: "Assistant Programmer",
      company: "Rajshahi City Corporation",
      location: "Rajshahi",
      period: "2019 - 2021",
      type: "Full-time",
      description: "Lead development for web applications serving users. Collaborate with ministries to deliver high-quality, scalable solutions.",
      responsibilities: [
        
            "Supervised progress of different software development projects under ict division and gathered requirements as per company policy.",
            "Communicated to different ministry for different company purposes related to ict department by preparing reports and attending meetings.",
            "Monitored and troubleshooted different ict projects after reception by the company."
                        
      ],
    },
    {
      title: "Software Engineer",
      company: "IPvision Soft Ltd.",
      location: "Dhaka",
      period: "2016 - 2018",
      type: "Full-time",
      description: " Maintained web application in a fast-paced startup environment.",
      responsibilities: [
        
         "Designed, deployed, monitored and troubleshooted NoSQL database management system cluster (Cassandra) and SQL database management system cluster (MariaDB) and MySQL NDB Cluster.",
                            
                            
        "Designed, deployed, monitored and troubleshooted database indexing cluster (Solr), Zookeeper., monitoring systems (Zabbix, Nagios), Elastic search.",
                            
                            
        "Created and administered virtual machines using KVM, Virtual box and VMware with operating system of Ubuntu, Centos 7.",
                            
        "Configured router, Nat-server, ntp-server etc."
                            
      ],
    },
    
  ];

  return (
    <section id='experience' className="py-20 w-11/12 mx-auto bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-base-content mb-4">Experience</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            My professional journey and key contributions in software development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card bg-base-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="card-body">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-base-content mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                            {exp.company}
                           
                          </h4>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-base-content/60">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="badge badge-outline badge-sm">
                          {exp.type}
                        </div>
                      </div>

                      <p className="text-base-content/80 mb-6">
                        {exp.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-base-content mb-3">Key Responsibilities:</h5>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="text-base-content/70 text-sm flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="card bg-gradient-to-r from-secondary/10 to-accent/10 shadow-lg">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold text-base-content mb-2">
                  Ready for New Opportunities
                </h3>
                <p className="text-base-content/70 mb-4">
                  Always open to discussing exciting projects and collaboration opportunities in software development.
                </p>
                <button onClick={handleDownload} className="btn  btn-primary">
                  View My Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;