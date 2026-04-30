import React from 'react';

const Project1Details = () => {
    return (
      <div className='w-11/12 mx-auto'>
    <h1 className='font-bold text-2xl text-center text-primary'>Green Community</h1>

    <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
        <p>
            Green Community is a full-stack web platform where users can share, explore, and support eco-friendly ideas. 
            Users can submit innovative ideas, vote on others’ contributions, and even monetize premium ideas. 
            The platform encourages collaboration and sustainability through community-driven engagement.
        </p>
    </div>

    <div className='my-5 bg-primary/20 p-5 rounded-2xl'>

        <h1 className='font-bold'>Technology Stack Used</h1>

        <p className='font-semibold mt-2'>Frontend:</p>
        <ul className='list-disc ml-10'>
            <li>Next.js (App Router)</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>shadcn/ui</li>
        </ul>

        <p className='font-semibold mt-4'>Backend:</p>
        <ul className='list-disc ml-10'>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>TypeScript</li>
        </ul>

        <p className='font-semibold mt-4'>Database & ORM:</p>
        <ul className='list-disc ml-10'>
            <li>PostgreSQL</li>
            <li>Prisma ORM</li>
        </ul>

        <p className='font-semibold mt-4'>Authentication:</p>
        <ul className='list-disc ml-10'>
            <li>JWT (stored in HTTP-only cookies)</li>
        </ul>

        <p className='font-semibold mt-4'>Payments:</p>
        <ul className='list-disc ml-10'>
            <li>Stripe API</li>
            <li>Webhooks</li>
        </ul>

        <p className='font-semibold mt-4'>Deployment:</p>
        <ul className='list-disc ml-10'>
            <li>Vercel (Frontend)</li>
            <li>Render (Backend)</li>
        </ul>
    </div>

    

    <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
        <h1>
            <span className='font-bold'>Frontend:</span>{' '}
            <span className='text-blue-500'>https://green-community-frontend.vercel.app</span>
        </h1>
        <h1 className='mt-2'>
            <span className='font-bold'>Backend API:</span>{' '}
            <span className='text-blue-500'>https://green-community-backend.vercel.app/</span>
        </h1>
    </div>

    <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
        <h1 className='font-bold'>Features :</h1>
        <ul className="list-disc ml-10">
            <li>Authentication & User Management</li>
            <li>Secure login & signup (JWT + cookies)</li>
            <li>Role-based access (Admin / Member)</li>
            <li>Block / Unblock users (Admin control)</li>
            <li>Create, update, and delete ideas</li>
            <li>View all ideas with search & filtering</li>
            <li>View personal ideas (My Ideas page)</li>
            <li>Edit ideas via modal UI</li>
            <li>Reddit-style upvote & downvote system</li>
            <li>Dynamic vote count calculation</li>
            <li>Sorted ideas based on popularity</li>
            <li>Paid ideas with secure checkout</li>
            <li>Stripe payment integration</li>
            <li>Webhook handling for payment confirmation</li>
            <li>Search and category filtering</li>
            <li>Pagination & sorting</li>
            <li>Responsive UI</li>
        </ul>
    </div>

    <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
        <h1 className='font-bold'>Challenges Faced :</h1>
        <ul className='list-disc ml-10'>
            <li>Handling secure authentication using JWT with HTTP-only cookies</li>
            <li>Implementing role-based access control (Admin vs Member)</li>
            <li>Managing real-time vote updates and sorting logic</li>
            <li>Integrating Stripe payment system and webhook handling</li>
            <li>Handling CORS and deployment issues between frontend and backend</li>
            <li>Designing scalable API structure with Prisma ORM</li>
        </ul>
    </div>

    <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
        <h1 className='font-bold'>Future Improvements :</h1>
        <ul className='list-disc ml-10'>
            <li>Implement real-time notifications (WebSockets)</li>
            <li>Add comment and discussion system for ideas</li>
            <li>Introduce AI-based idea recommendations</li>
            <li>Improve UI/UX and accessibility</li>
            <li>Enhance analytics dashboard for admins</li>
            <li>Optimize performance using caching and better query strategies</li>
        </ul>
    </div>
</div>
    );
};

export default Project1Details;