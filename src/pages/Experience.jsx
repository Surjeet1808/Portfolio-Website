import "./Experience.css"
import { forwardRef } from "react"
export const Experience=forwardRef((props,ref)=>{
    return <>
    <div className="experiences" ref={ref}>
        <h1>Experience</h1>
        <p id="desc">As a software engineer, I've refined my skills by solving problems across various platforms and gaining valuable experience in different tasks as an intern.</p>


        <div className="ex-section">
            <div className="company">
             <img src="https://media.licdn.com/dms/image/C560BAQHOABFxzOm74Q/company-logo_400_400/0/1646105375014?e=2147483647&v=beta&t=LguLPC1CCPr2HCX-g7kIAFuXYtur1prvNxm7dNcFsc0"alt=""/>
             <div className="info">
                <p className="experience">Intern: Platform development | Core Team- Market</p>
                <p className="company-name">K12 Acitivty Academy Pvt Ltd</p>
                <p className="date">Feb 5, 2024 - March 12, 2024</p>
             </div>
            </div>
            <div className="description">
               <p>during my internship at K12 Activity Academy Pvt Ltd, I gained hands-on experience in project management, curriculum development and Market</p>
               <p>skills: Platform development, Team work, Marketing management</p>
            </div>
        </div>


        <div className="ex-section">
            <div className="company">
             <img src="https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/05/10175228/images-11.png" alt="" />
             <div className="info">
                <p className="experience">800+ Problems Solved | Rank Under Top 10%</p>
                <p className="company-name">LeetCode</p>
                <p className="date">2022 - present</p>
             </div>
            </div>
            <div className="description">
               <p>By consistently engaging in coding challenges, I've mastered over 800 LeetCode problems, maintaining an impressive streak of daily practice for 8 months. Participating in over 70 contests, I've ranked among the top 10% of coders, refining my logic and problem-solving skills along the way. This consistent effort has significantly enhanced my ability to tackle complex problems and find efficient solutions.</p>
               <p>skills: JAVA</p>
            </div>
        </div>


        <div className="ex-section">
            <div className="company">
             <img src="https://media.licdn.com/dms/image/C4E0BAQEVcMDb_t7N7w/company-logo_200_200/0/1630642236612?e=2147483647&v=beta&t=8Y8dq3LliOT7jyN87axnjgfDoJ0Ns6ZoX_AGweHRIGI"alt=""/>
             <div className="info">
                <p className="experience">Member - Coders Hub</p>
                <p className="company-name">Asper</p>
                <p className="date">Feb 2022 - Feb 2023</p>
             </div>
            </div>
            <div className="description">
               <p>Asper Coders Hub is where I learned programming. It's a great community where I developed my skills through learning together with others</p>
               <p>skills: data structures and algorithms, problem solving</p>
            </div>
        </div>


    </div>
    </>
}
);