import MathGamePhoto from "../assets/images/MathGame-ss.png";
import ExperienceContainer from "../components/ExperienceContainer/ExperienceContainer";


function MathGame() {

    return (
    <>
        <ExperienceContainer
        title="MathGame"
        description="Developed a Math Game which includes levels, lives, difficulty, and animation."
        list={["HTML, CSS, JS"]}
        image={MathGamePhoto}
        />
    </>
    )
}

export default MathGame