import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter,faSquareInstagram,faLinkedin,faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
export const Footer=({educationRef,skillRef,experienceRef,projectRef,contactRef})=>{
    function scroll_el(Ref){
        // console.log("i can scroll",Ref);
        Ref.current.scrollIntoView({ behavior: "smooth" });
     }
    return<>
    <footer>
        <div className="footer">
            <h1>Surjeet Dhakad</h1>
            <div className="pages">
            <ul>
                <li> <a onClick={()=>{scroll_el(skillRef)}}>Skills</a></li>
               <li> <a onClick={()=>{scroll_el(experienceRef)}}>Experience</a></li>
               <li> <a onClick={()=>{scroll_el(projectRef)}}>Projects</a></li>
               <li> <a onClick={()=>{scroll_el(educationRef)}}>Education</a></li>
               <li> <a onClick={()=>{scroll_el(contactRef)}}>Contact</a></li>
            </ul>
            </div>
            <div className="social-media">
            <a href="https://www.linkedin.com/in/surjeet-dhakad-9106a9229/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://twitter.com/SJT_08" target="_blank"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
            <a href="https://www.instagram.com/surjeet_1808/" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} /></a>
            <a href="https://www.facebook.com/profile.php?id=100085587031065" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} /></a>
            </div>
            <p id="copyright">© 2024 Surjeet Dhakad. All rights reserved.</p>
        </div>
    </footer>
    </>
}