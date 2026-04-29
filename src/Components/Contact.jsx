import { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import emailjs from 'emailjs-com';

// 🔥 CSS Animations
const styles = `
.fade-in-left, .fade-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease-out;
}
.fade-in-left {
  transform: translateX(-50px);
}
.fade-in-left.visible,
.fade-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const form = useRef();
  const leftRef = useRef();
  const rightRef = useRef();

  // ✅ Animate when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cmgkkbp',
        'template_q2t3vb4',
        form.current,
        'qIMKBOXacFHSNWKpa'
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        () => {
          alert('❌ Failed to send message. Please try again.');
        }
      );
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id='contacts' className="py-20 bg-background relative">
      {/* Inject animation styles */}
      <style>{styles}</style>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div ref={leftRef} className="fade-in-left">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">ariful.haque1510@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+880 1757173149</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">Rajshahi, Bangladesh</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h4 className="font-medium mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a target="_blank" href="https://github.com/arifulmit17" className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-200 hover:scale-105">
                      <Github className="w-5 h-5" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/md-ariful-haque-sunny-803b12b0/" className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-200 hover:scale-105">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={rightRef} className="fade-in-right">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-base-100 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-base-100 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-base-100 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-base-100 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary/20 text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
