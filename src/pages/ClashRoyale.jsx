import CRAPIPhoto from "../assets/images/CRAPI-ss.png";
import ExperienceContainer from "../components/ExperienceContainer/ExperienceContainer";


function ClashRoyale() {

    return (
    <>
        <ExperienceContainer
        title="Clash Royale API"
        description="Using REST API integration I created a web page that fetches information for the player."
        list={["Python", "HTML, CSS, JS", "REST API"]}
        image={CRAPIPhoto}
        />
    </>
    )
}

export default ClashRoyale