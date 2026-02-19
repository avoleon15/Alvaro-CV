import Brownies from "../../assets/images/BrowniesPage-ss.png";
import CRAPI from "../../assets/images/CRAPI-ss.png";
import MathGame from "../../assets/images/MathGame-ss.png";
import Quetzalink from "../../assets/images/Quetzalink-ss.png";
import './Experience.css';
import ExperienceContainer from "./ExperienceContainer/ExperienceContainer";

function Experience() {

    const image1 = Quetzalink
    const image2 = CRAPI
    const image3 = Brownies
    const image4 = MathGame

    return (
        <section id="experience">
        <h2 className="font-anton experience-title">EXPERIENCE</h2>

        <div className="experience-container">

            <ExperienceContainer
            title="Quetzalink"
            description="Presented and worked on Quetzalink. Developed in React, we created a gamified application focused on economic education for students in Guatemala. Got second place at the FEE Hackathon."
            list={["React", "Presentation Skill", "Economic Education knowledge"]}
            image={image1}
            inverted={false}
            />

            <ExperienceContainer
            title="Clash Royale API"
            description="Using REST API integration I created a web page that fetches information for the player."
            list={["Python", "HTML, CSS, JS", "REST API"]}
            image={image2}
            inverted={true}
            />

            <ExperienceContainer
            title="Brownies Page"
            description="Created a page dedicated to selling brownies."
            list={["React"]}
            image={image3}
            inverted={false}
            />

            <ExperienceContainer
            title="MathGame"
            description="Developed a Math Game which includes levels, lives, difficulty, and animation."
            list={["HTML, CSS, JS"]}
            image={image4}
            inverted={true}
            />

        </div>
        </section>
    );
}

export default Experience;
