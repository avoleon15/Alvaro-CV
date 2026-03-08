import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './ExperienceContainer.css';

function ExperienceContainer(props){

    const {title, description, list, image, link, stars} = props;
    const imageDescription = image + " project";

    return(
    <article className="project-container">
        <Link to="/" className='return-button font-unbun'>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2 className='project-title font-anton'>{title}</h2>
        <h6>{stars}</h6>
        <div className='project-image-container'>
            <img src={image} alt={imageDescription}></img>
        </div>
        <a href={link} target="_blank" alt="visit my project">Check it on GitHub</a>
        <div className='project-information'>
            <p className='project-description font-unbun'>{description}</p>
            <ul className='project-list font-unbun'>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
        

    </article>
    )
}

export default ExperienceContainer