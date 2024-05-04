import "./Home.css";
import {forwardRef} from "react";
export const Home=forwardRef((props,ref)=>{
  return <>
     <div className="home" ref={ref}>
      <div class="about">
        <h1>Hi, I am</h1>
        <h1 class="name">Surjeet Dhakad</h1>
        <h1>I am a MERN Developer | Programmer</h1>
        <p>As an individual, I'm constantly fueled by motivation and thrive on new challenges. My passion lies in learning and problem-solving, and I approach tasks with unwavering enthusiasm. I have a knack for finding efficient solutions and am always pushing myself to excel. You can explore my journey through my portfolio, where each project and experience unfolds a new chapter of growth and achievement.</p>
        <a href="https://drive.google.com/file/d/1FjQf1nD2Jtop_ORtl7Zhxu3LbSYpmRml/view?usp=sharing" target="_blank">Resume</a>
      </div>
      <div class="image">
      <img src="https://res.cloudinary.com/dglsakcnx/image/upload/v1714822855/download_image_1714822021328_xgzwyz.png" alt="Image" />
      </div>
     </div>
     
  </>
}
);