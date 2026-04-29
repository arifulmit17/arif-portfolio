import React from 'react';
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdEmail, MdPhone } from "react-icons/md";
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Intro from './Components/Intro';
const Home = () => {
    const fileId = '1S9V9TZWAvF6Mt1KPYUj7LKUa_9yEUs1i';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.download = 'document.pdf'; 
    link.click();
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cmgkkbp',   // Replace with your EmailJS Service ID
        'template_q2t3vb4',  // Replace with your EmailJS Template ID
        form.current,
        'qIMKBOXacFHSNWKpa'    // Replace with your EmailJS Public Key
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
    return (
        <div>
         
            <Intro></Intro>
           
            <About></About>

            <Skills></Skills>
         
            <Education></Education>
         
            <Experience></Experience>
         
            <Projects></Projects>
           
            <Contact></Contact>
            
        </div>
    );
};

export default Home;