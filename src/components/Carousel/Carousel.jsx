import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Brownies from "../../assets/images/BrowniesPage-ss.png";
import CRAPI from "../../assets/images/CRAPI-ss.png";
import MathGame from "../../assets/images/MathGame-ss.png";
import Quetzalink from "../../assets/images/Quetzalink-ss.png";
import './Carousel.css';

const image1 = Quetzalink;
const image2 = CRAPI;
const image3 = Brownies;
const image4 = MathGame;

const images = [image1, image2, image3, image4];
const projectTitles = ["Quetzalink","ClashRoyale", "Brownies","MathGame"]

function Carousel(){

    const[midProject, setMidProject] = useState(0);
    const[leftProject, setLeftProject] = useState(images.length - 1);
    const[rightProject, setRightProject] = useState(1);

    useEffect(()=>{
        if(midProject == 0){
            setLeftProject(images.length - 1)
            setRightProject(+1)
        } else if (midProject == images.length - 1){
            setRightProject(0)
            setLeftProject(midProject-1)
        } else {
            setRightProject(midProject + 1)
            setLeftProject(midProject - 1)
        }
    },[midProject])

    const Increment=()=>{

        if(midProject == images.length - 1){
            setMidProject(0)
        }
        else{
            setMidProject(midProject + 1)
        }
    }

    const Decrement=()=>{
        if(midProject == 0){
            setMidProject(images.length - 1)
        }
        else{
            setMidProject(midProject - 1)
        }
    }


    return(
        <div className='projects-container'>
            <div className='projects-slider-container'>
                <ul className='projects'>
                    <li>
                        <div className='left-project'>
                            <img key={leftProject} src={images[leftProject]} alt={`${projectTitles[leftProject]} project image`}></img>
                        </div>
                    </li>
                    <li>
                        <div className="middle-project">
                            <img key={midProject} src={images[midProject]} alt={`${projectTitles[midProject]} project image`}></img>
                            <div className="button-container">
                                <Link to={`/project/${projectTitles[midProject]}`} className="information-button font-unbun">SEE MORE</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='right-project'>
                            <img key={rightProject} src={images[rightProject]} alt={`${projectTitles[rightProject]} project image`}></img>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='buttons'>
                <button onClick={Increment}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={Decrement}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default Carousel