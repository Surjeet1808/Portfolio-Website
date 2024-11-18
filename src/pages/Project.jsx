
import "./Project.css"
import { forwardRef } from "react";
export const Project=forwardRef((props,ref)=>{
    return <>
     <div className="projects" ref={ref}>
        <h1>Projects</h1>
        <p>Completed multiple projects, enhancing my development skills significantly.</p>
        <div className="project-container">

        <div className="project-card">
                <img src="https://etutor.co/blog/wp-content/uploads/2023/03/online-exam-software.jpg" alt="" />

                <div className="technologies">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Tailwind</p>
                    <p>Java Script</p>
                    <p>React.js</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>Mongodb</p>
                </div>
                <p id="title">TestPro- Online Test Taking Platform</p>
                <p id="date">Aug 2024 - Nov 2024</p>
                <p id="description">Created a fully functional and responsive online test-taking platform using React.js, Tailwind CSS, and
                a simple backend with Express.js.</p>
                <div className="links">
                    <a href="https://github.com/Surjeet1808/TestPro-Online-Test-Platform.git" target="_blank" id="code">View Code</a>
                    <a href="https://test-pro-online.vercel.app/" target="_blank" id="live">View Live</a>
                </div>
            </div>

           <div className="project-card">
                <img src="https://wedevs.com/_ipx/https://cdn.wedevs.com/uploads/2021/09/How-to-use-Dokan-Booking-Module.png?f=webp&q=90" alt="" />

                <div className="technologies">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Bootstrap</p>
                    <p>Java Script</p>
                    <p>EJS</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>Mongodb</p>
                </div>
                <p id="title">Wanderlust - Full Stack Development</p>
                <p id="date">Jan 2024 - Feb 2024</p>
                <p id="description">Developed a full-stack web app inspired by Airbnb, using MongoDB, Express.js, and Node.js.</p>
                <div className="links">
                    <a href="https://github.com/Surjeet1808/WanderLust" target="_blank" id="code">View Code</a>
                    <a href="https://wanderlust-q6an.onrender.com/listings" target="_blank" id="live">View Live</a>
                </div>
            </div>


            <div className="project-card">
                <img src="https://www.dealsshutter.com/blog/wp-content/uploads/2020/03/Home-Services-Image-30-march-2020.png" alt="" />

                <div className="technologies">
                    <p>Mongodb</p>
                    <p>Express.js</p>
                    <p>React.js</p>
                    <p>Node.js</p>
                </div>
                <p id="title">Service Space: Minor Project - MERN stack</p>
                <p id="date">March 2024 - May 2024</p>
                <p id="description">Service Space is a Platform offering a variety of services at home. Customers use platform to book services such as  cleaning, plumbing, carpentry, appliance repair, painting etc.</p>
                <div className="links">
                    <a href="https://github.com/Surjeet1808/Service-Space" target="_blank" id="code">View Code</a>
                    <a href="https://github.com/Surjeet1808/Service-Space" target="_blank" id="live">View Live</a>
                </div>
            </div>



            <div className="project-card">
                <img src="https://pmstudycircle.com/wp-content/uploads/2024/01/portfolio.png.webp" alt="" />

                <div className="technologies">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React.js</p>
                </div>
                <p id="title">Portfolio Website - Front-end Development</p>
                <p id="date">Feb 2024 - March 2024</p>
                <p id="description">Developed a responsive Portfolio Website using React.js, incorporating React hooks and fundamental frontend development principles.</p>
                <div className="links">
                    <a href="https://github.com/Surjeet1808/Portfolio-Website" target="_blank" id="code">View Code</a>
                    <a href="#" target="_blank" id="live">View Live</a>
                </div>
            </div>



            <div className="project-card">
                <img src="https://www.iqutest.com/wp-content/uploads/2023/07/Simon-Game.jpg" alt="" />

                <div className="technologies">
                    <p>HTM</p>
                    <p>CSS</p>
                    <p>Java Script</p>
                </div>
                <p id="title">Simon Game - mini project</p>
                <p id="date">Sept 2023 - Oct 2023</p>
                <p id="description">Simon game clone using HTML, CSS, and JavaScript. Players must click on a series of coloured buttons in the correct order to progress</p>
                <div className="links">
                    <a href="https://github.com/Surjeet1808/Simon-game" target="_blank" id="code">View Code</a>
                    <a href="https://surjeet1808.github.io/Simon-game/" target="_blank" id="live">View Live</a>
                </div>
            </div>



            <div className="project-card">
                <img src="https://media.licdn.com/dms/image/D4D12AQFidZRD7yMEHQ/article-cover_image-shrink_720_1280/0/1691241743325?e=2147483647&v=beta&t=PyST8q7CDL5x_GIzslj4rTy8_WHkKIftMW6f6AjWOiQ" alt="" />

                <div className="technologies">
                    <p>HTM</p>
                    <p>CSS</p>
                </div>
                <p id="title">Spotify Clone - mini project</p>
                <p id="date">Oct 2023 - Nov 2023</p>
                <p id="description">Create a Spotify page clone using HTML and CSS. Use HTML for structuring the elements and CSS for styling.</p>
                <div className="links">
                    <a href="https://github.com/Surjeet1808/spotify-clone" target="_blank" id="code">View Code</a>
                    <a href="https://surjeet1808.github.io/spotify-clone/" target="_blank" id="live">View Live</a>
                </div>
            </div>



        </div>
     </div>

    </>
}
);