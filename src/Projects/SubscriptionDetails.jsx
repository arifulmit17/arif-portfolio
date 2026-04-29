import React from 'react';

const SubscriptionDetails = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-2xl text-center text-primary'>Subscription Box</h1>
            <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
                <h1 className='font-bold '>Technology stack used</h1>
                <ul className='list-disc ml-10'>
                    <li>React</li>
                    <li>TailwindCSS</li>
                    <li>Node.js</li>
                    <li>React-router</li>
                    <li>Firebase</li>
                </ul>
            </div>
            <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
                <p>This site focuses to facilitate users to avail diverse subscription packages of popular streaming services on
monthly basis</p>
            </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 ><span className='font-bold'>Live link:</span> <span className='text-blue-500'>https://batch11a09subscriptionbox.netlify.app/</span> </h1>
           </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 ><span className='font-bold'>Github Link:</span> <span className='text-blue-500'> https://github.com/arifulmit17/subscription-box</span> </h1>
            
           </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 className='font-bold'>Features :</h1>
            <ul className="list-disc ml-10">
                        <li>For users there is opportunity to choose from 6 different streaming platforms.</li>
                        <li>Users can give their reviews at the subscriptionDetails page</li>
                        <li>Users can change their name and profile picture at the profile page.</li>
                    </ul>
           </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 className='font-bold'>Challenges faced :</h1>
            <ul className='list-disc ml-10'>
                <li>faced problem in time of installing react helmet</li>
            </ul>
           </div>
           <div  className='my-5 bg-primary/20 p-5 rounded-2xl'>
            <h1 className='font-bold'>Potential improvements and future plan for the project :</h1>
            <ul className='list-disc ml-10'>
                <li>Implementing the dashboard for both client and admin</li>
                <li>Implementing the database for different streaming services using mongodb</li>
                <li>Add server function using express.js</li>
                <li>Use jwt for security measures</li>
                <li>Using tanstack query for fetching data from database</li>
                <li>Using axios for fetching data from database</li>
                <li>Using role based authentication for fetching data from database</li>
                <li>Improving color scheme and design related functions</li>
            </ul>
           </div>
        </div>
    );
};

export default SubscriptionDetails;