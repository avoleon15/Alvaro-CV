import QuetzalinkPhoto from "../assets/images/Quetzalink-ss.png";
import ExperienceContainer from "../components/ExperienceContainer/ExperienceContainer";

function Quetzalink() {

    return (
    <>
        <ExperienceContainer
            title="Quetzalink"
            description="Presented and worked on Quetzalink. Developed in React, we created a gamified application focused on economic education for students in Guatemala. Got second place at the FEE Hackathon."
            list={["React", "Presentation Skill", "Economic Education knowledge"]}
            image={QuetzalinkPhoto}
        />
    </>
    )
}

export default Quetzalink