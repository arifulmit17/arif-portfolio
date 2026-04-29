import React from 'react';

const GardenDetails = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-2xl text-center text-primary'>Garden Community</h1>
            <div className='my-5 bg-primary/20  p-5 rounded-2xl'>
                <h1 className='font-bold'>Technology stack used</h1>
                <ul className='list-disc ml-10'>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>TailwindCss</li>
                    <li>Javascript</li>
                </ul>
            </div>
            <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
                <p>This project is a platform for gardening enthusiasts for many benefits such as weekly discussions, forums, group meetings, one to one session etc</p>
            </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 ><span className='font-bold'>Live link:</span> <span className='text-blue-500'>https://batch11a10garden-community.netlify.app/</span> </h1>
           </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 ><span className='font-bold'>Github Link:</span> <span className='text-blue-500'> https://github.com/arifulmit17/garden-community-client</span> </h1>
            
           </div>
           <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 className='font-bold'>Features :</h1>
            <ul className="list-disc ml-10">
                        <li>Featured tips and gardeners on home page</li>
                        <li>Browse tips based on filtered difficulty of easy,medium or hard.</li>
                        <li>Like on favorite tips</li>
                    </ul>
            </div>
           <div className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 className='font-bold'>Challenges faced :</h1>
            <ul className='list-disc ml-10'>
                <li>faced api error when fetching data based on user email</li>
                <li>faced difficulty implementing the dashboard section</li>
                <li>faced difficulty implementing filter in the all tips page</li>
                <li>faced problem in time of vercel server deployment due to cors error</li>
            </ul>
           </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 className='font-bold'>Potential improvements and future plan for the project :</h1>
            <ul className='list-disc ml-10'>
                <li>Implementing the dashboard for both client and admin</li>
                <li>Use jwt for security measures</li>
                <li>Using tanstack query for fetching data from database</li>
                <li>Using axios more securely for fetching data from database</li>
                <li>Using role based authentication for fetching data from database</li>
                <li>Improving color scheme and design related functions</li>
            </ul>
           </div>
        </div>
    );
};

export default GardenDetails;