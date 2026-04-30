import React from 'react';

const Project2Details = () => {
    return (
      <div className='w-11/12 mx-auto'>
  <h1 className='font-bold text-2xl text-center text-primary'>SkillBridge </h1>

  {/* Description */}
  <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
    <p>
      SkillBridge is a full-stack platform that connects students with expert tutors. 
      Users can browse tutors, book sessions, and leave reviews, while tutors can manage 
      their profiles, availability, and teaching sessions. Admins oversee users, bookings, 
      and categories to ensure smooth platform operation.
    </p>
  </div>

  {/* Tech Stack */}
  <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
    <h1 className='font-bold'>Technology Stack Used</h1>
    <ul className='list-disc ml-10'>
      <li>React / Next.js</li>
      <li>TypeScript</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>PostgreSQL</li>
      <li>Tailwind CSS</li>
      <li>BetterAuth Authentication</li>
    </ul>
  </div>

  

  {/* Live Link */}
  <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
    <h1>
      <span className='font-bold'>Live Link: </span>
      <span className='text-blue-500'>
       https://skillbridge-frontend-bay.vercel.app/
      </span>
    </h1>
  </div>

  {/* GitHub */}
  <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
    <h1>
      <span className='font-bold'>GitHub Link: </span>
      <span className='text-blue-500'>
       https://github.com/arifulmit17/skillbridge-frontend
      </span>
    </h1>
  </div>

  {/* Features */}
  <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
    <h1 className='font-bold'>Features :</h1>
    <ul className="list-disc ml-10">
      <li>Browse and search tutors by subject, rating, and price</li>
      <li>Filter tutors by categories</li>
      <li>View detailed tutor profiles with reviews</li>
      <li>Book tutoring sessions</li>
      <li>Manage bookings (upcoming & past)</li>
      <li>Leave reviews after sessions</li>
      <li>Tutor profile & availability management</li>
      <li>Admin panel for user and booking management</li>
    </ul>
  </div>

  {/* Challenges */}
  <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
    <h1 className='font-bold'>Challenges Faced :</h1>
    <ul className='list-disc ml-10'>
      <li>Handling API errors when fetching user-specific data</li>
      <li>Implementing secure authentication using JWT</li>
      <li>Building efficient search and filtering system</li>
      <li>Fixing CORS issues during deployment</li>
    </ul>
  </div>

  {/* Future Plans */}
  <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
    <h1 className='font-bold'>Future Improvements :</h1>
    <ul className='list-disc ml-10'>
      <li>Full dashboard for students, tutors, and admins</li>
      <li>Secure authentication with HTTP-only cookies</li>
      <li>Integrate TanStack Query for better data fetching</li>
      <li>Improve API handling using Axios interceptors</li>
      <li>Role-based authorization system</li>
      <li>UI/UX and design enhancements</li>
      <li>Real-time chat and video session integration</li>
    </ul>
  </div>
</div>
    );
};

export default Project2Details;