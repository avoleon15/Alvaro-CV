import "./EducationContainer.css";

function EducationContainer(props) {

    const {image, diploma, institution, year} = props;
    const imageDescription = image + " logo";

    return (
    <article className="education-box">
        <div className="image-holder">
            <img src={image} alt={imageDescription}/>
        </div>
        <h5 className='font-unbun'>{diploma}</h5>
        <h6 className='font-unbun'>{institution}</h6>
        <p className='font-unbun'>{year}</p>
    </article>
    )
}

export default EducationContainer