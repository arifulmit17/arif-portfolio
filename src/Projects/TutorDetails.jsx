import React from 'react';

const TutorDetails = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-2xl text-center text-primary'>Tutor Hire</h1>
            <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
                <h1 className='font-bold '>Technology stack used</h1>
                <ul className='list-disc ml-10'>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                </ul>
            </div>
            <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
                <p>This site focuses on a platform for teaching enthusiasts and students for many benefits such as tutor booking, tutorial upload etc</p>
            </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 ><span className='font-bold'>Live link:</span> <span className='text-blue-500'> https://b11a11tutor-hire-client.netlify.app/</span> </h1>
           </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 ><span className='font-bold'>Github Link:</span> <span className='text-blue-500'> https://github.com/arifulmit17/tutor-hire-client</span> </h1>
            
           </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 className='font-bold'>Features :</h1>
            <ul className="list-disc ml-10">
                        <li>Stats and languages on home page</li>
                        <li>Browse tutors based on languages.</li>
                        <li>Like on booked tutors</li>
                    </ul>
           </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 className='font-bold'>Challenges faced :</h1>
            <ul className='list-disc ml-10'>
                <li>faced api error when fetching data based on user email</li>
                <li>faced difficulty implementing the jwt</li>
                <li>faced difficulty implementing search in all tutors page</li>
                <li>faced problem in time of vercel server deployment due to cors error</li>
            </ul>
           </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 className='font-bold'>Potential improvements and future plan for the project :</h1>
            <ul className='list-disc ml-10'>
                <li>Implementing a dashboard for both client and admin</li>
                <li>Use jwt for security measures with cookies or firebase authentication</li>
                <li>Using tanstack query for fetching data from database</li>
                <li>Using axios more securely for fetching data from database</li>
                <li>Using role based authentication for fetching data from database</li>
                <li>Improving color scheme and design related functions</li>
            </ul>
           </div>
        </div>
    );
};

export default TutorDetails;