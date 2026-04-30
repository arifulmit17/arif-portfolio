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
        'service_i0ynknj',
        'template_q2t3vb4',
        form.current,
        '0KCF9jg7eLfqO-N_Y'
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
    <section id="contacts" className="py-16 md:py-20 bg-background relative">

  {/* Animation styles */}
  <style>{styles}</style>

  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
          Let's Work Together
        </h2>

        <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">

        {/* Contact Info */}
        <div ref={leftRef} className="fade-in-left space-y-8">

          <h3 className="text-xl md:text-2xl font-semibold text-center lg:text-left">
            Get in Touch
          </h3>

          {/* Info items */}
          <div className="space-y-5 md:space-y-6">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>

              <div>
                <div className="font-medium text-sm md:text-base">Email</div>
                <div className="text-muted-foreground text-sm md:text-base break-all">
                  ariful.haque1510@gmail.com
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>

              <div>
                <div className="font-medium text-sm md:text-base">Phone</div>
                <div className="text-muted-foreground text-sm md:text-base">
                  +880 1757173149
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>

              <div>
                <div className="font-medium text-sm md:text-base">Location</div>
                <div className="text-muted-foreground text-sm md:text-base">
                  Rajshahi, Bangladesh
                </div>
              </div>
            </div>

          </div>

          {/* Social */}
          <div className="pt-6 md:pt-8">
            <h4 className="font-medium mb-4 text-center lg:text-left">
              Follow Me
            </h4>

            <div className="flex justify-center lg:justify-start gap-4">
              <a
                target="_blank"
                href="https://github.com/arifulmit17"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-xl transition hover:scale-105"
              >
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/md-ariful-haque-sunny-803b12b0/"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-xl transition hover:scale-105"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Form */}
        <div ref={rightRef} className="fade-in-right">

          <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-sm md:text-base bg-base-100 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 text-sm md:text-base bg-base-100 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Discussion"
                className="w-full px-4 py-3 text-sm md:text-base bg-base-100 border border-border rounded-xl"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 text-sm md:text-base bg-base-100 border border-border rounded-xl resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-primary/20 hover:bg-primary/90 text-primary-foreground px-6 py-3 md:py-4 rounded-xl font-medium transition flex items-center justify-center gap-2"
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
