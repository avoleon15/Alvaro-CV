import BrowniesPhoto from "../assets/images/BrowniesPage-ss.png";
import ExperienceContainer from "../components/ExperienceContainer/ExperienceContainer";


function Brownies() {

    return (
    <>
        <ExperienceContainer
        title="Brownies Page"
        description="Created a page dedicated to selling brownies."
        list={["React"]}
        image={BrowniesPhoto}
        />
    </>
    )
}

export default Brownies