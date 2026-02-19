import './ExperienceContainer.css';

function ExperienceContainer(props){

    const {title, description, list, image, inverted} = props;
    const imageDescription = image + " project";

    const classInverted = inverted === true ? "inverted" : "not-inverted";


    return(
    <article className={`project-box darkblue-color ${classInverted}`}>
    <div className="project-text">
        <h4 className='font-unbun'>{title}</h4>
        <p className='font-unbun'>
        {description}
        </p>
        <ul className='font-unbun'>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>

    <div className="project-image">
        <img src={image} alt={imageDescription}/>
    </div>
    </article>
    )
}

export default ExperienceContainer