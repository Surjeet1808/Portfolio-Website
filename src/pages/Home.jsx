import "./Home.css";
import {forwardRef} from "react";
export const Home=forwardRef((props,ref)=>{
  return <>
     <div className="home" ref={ref}>
      <div className="about">
        <h1>Hi, I am</h1>
        <h1 className="name">Surjeet Dhakad</h1>
        <h1>I am a MERN Developer | Programmer</h1>
        <p>As an individual, I'm constantly fueled by motivation and thrive on new challenges. My passion lies in learning and problem-solving, and I approach tasks with unwavering enthusiasm. I have a knack for finding efficient solutions and am always pushing myself to excel. You can explore my journey through my portfolio, where each project and experience unfolds a new chapter of growth and achievement.</p>
        <a href={import.meta.env.VITE_RESUME_URL} target="_blank">Resume</a>
      </div>
      <div className="image">
      <img src={import.meta.env.VITE_IMAGE_URL} alt="Image" />
      </div>
     </div>
     
  </>
}
);