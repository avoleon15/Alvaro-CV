import { faArrowLeft, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './ExperienceContainer.css';

function ExperienceContainer(props){

    const {title, description, language, image, link, stars, watchers} = props;
    const imageDescription = image + " project";

    return(
    <article className="project-container">
        <Link to="/" className='return-button font-unbun'>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2 className='project-title font-anton'>{title}</h2>
        <div className='project-stats'>
            <h6 className='font-unbun project-counter'><FontAwesomeIcon className='icon-star' icon={faStar} />{stars}</h6>
            <h6 className='font-unbun project-counter'><FontAwesomeIcon className='icon-watcher' icon={faEye} />{watchers}</h6>
        </div>

        <div className='project-image-container'>
            <img src={image} alt={imageDescription}></img>
        </div>
        <a className='project-link font-unbun' href={link} target="_blank" alt="visit my project">Check it on GitHub</a>
        <div className='project-information'>
            <p className='project-description font-unbun'>{description}</p>
            <h5 className='project-list font-unbun'>Mainly built on: {language}</h5>
        </div>
        

    </article>
    )
}

export default ExperienceContainer