import React from "react";
import CardProfile from "./CardProfile";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6 grid gap-6 md:grid-cols-2 justify-center">
      <CardProfile
        name="Jane Doe"
        role="Frontend Developer"
        image="https://xsgames.co/randomusers/assets/avatars/female/5.jpg"
        bio="Passionate about building user-friendly interfaces and scalable web apps."
      />
      <CardProfile
        name="John Smith"
        role="Backend Engineer"
        image="https://xsgames.co/randomusers/assets/avatars/male/8.jpg"
        bio="Focused on building secure and scalable backend services using Node.js and Python."
      />
        <CardProfile
            name="Alice Johnson"
            role="UI/UX Designer"
            image="https://xsgames.co/randomusers/assets/avatars/female/3.jpg"
            bio="Creating intuitive and engaging user experiences through design and research."        
             />

        <CardProfile 
            name="Bob Williams" 
            role="Full Stack Developer"             
            image="https://xsgames.co/randomusers/assets/avatars/female/1.jpg"
            bio="A versatile developer with expertise in both frontend and backend technologies." />            
    </div>
  );
};

export default Dashboard;
