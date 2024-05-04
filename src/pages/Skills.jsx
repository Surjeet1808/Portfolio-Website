import "./Skill.css";
import { forwardRef } from "react";
export const Skills=forwardRef((props,ref)=>{
    return <>
    <div className="skills" ref={ref}>
      <h1>Skills</h1>
      <p>Over the past two years, I've actively developed and improved a variety of skills</p>
      <div className="skill-domain">
        <div className="skill-section">
         <h1>Frontend</h1>
             <div className="subsection">
             <div className="skill">
             <i class="fa-brands fa-html5" style={{color: "#ff8800"}}></i>
             <p>HTML5</p>
             </div>

            <div className="skill">
            <i class="fa-brands fa-css3-alt" style={{color: "#0516ff"}}></i>
            <p>CSS</p>
            </div>

            <div className="skill">
            <i class="fa-brands fa-js" style={{color: "#FFD43B"}}></i>
            <p>JavaScript</p>
            </div>

            <div className="skill">
            <i class="fa-brands fa-react" style={{color: "#2673ba"}}></i>
            <p>React</p>
            </div>

             <div className="skill">
             <i class="fa-brands fa-bootstrap" style={{color: "#5900ff"}}></i>
             <p>Bootstrap</p>
             </div>
             </div>
        </div>

        <div className="skill-section">


        <h1>Backend</h1>
        <div className="subsection">
        <div className="skill">
        <img src="https://nodejs.org/static/logos/jsIconGreen.svg" className="logoimg" alt="" />
         <p>Node.js</p>
         </div>

         <div className="skill">
         <i class="fa-brands fa-css3-alt" style={{color: "#0516ff"}}></i>
         <p>Express.js</p>
         </div>

         <div className="skill">
         <img src="https://mongodb.gallerycdn.vsassets.io/extensions/mongodb/mongodb-vscode/1.6.0/1713873233895/Microsoft.VisualStudio.Services.Icons.Default" className="logoimg" alt="" />
         <p>Mongodb</p>
         </div>

        
         </div>
        </div>

        <div className="skill-section">

        <h1>Programming Languages</h1>

        <div className="subsection">

        <div className="skill">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" className="logoimg" alt="" />
         <p>C++</p>
         </div>

         <div className="skill">
         <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Java-logo.png" className="logoimg" alt="" />
         <p>JAVA</p>
         </div>

         <div className="skill">
            <i class="fa-brands fa-js" style={{color: "#FFD43B"}}></i>
            <p>JavaScript</p>
            </div>

        </div>
        </div>

        <div className="skill-section">

        <h1>Others</h1>

        <div className="subsection">
        <div className="skill">
        <img src="https://git-scm.com/images/logos/logomark-orange@2x.png" className="logoimg" alt="" />
         <p>Git</p>
         </div>

        <div className="skill">
        <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="" className="logoimg" />
         <p>GitHub</p>
         </div>

         <div className="skill">
         <img src="https://blog.postman.com/wp-content/uploads/2018/04/logo-mark-300x300.png" alt="" className="logoimg"/>
         <p>PostMan</p>
         </div>

         <div className="skill">
         <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" className="logoimg" alt="" />
         <p>Figma</p>
         </div>

         <div className="skill">
         <img src="https://mms.businesswire.com/media/20231211533917/en/1965761/5/stacked_logo_blue.jpg" className="logoimg" alt="" />
         <p>Cloudinary</p>
         </div>

         </div>

        </div>

      </div>
     </div>
    </>
}
);