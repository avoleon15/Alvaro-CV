import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/ProjectsData';
import AddTogether from '../../utils/AddTogether';
import './Carousel.css';

function Carousel(){

    const[midProject, setMidProject] = useState(0);
    const[leftProject, setLeftProject] = useState(projectsData.length - 1);
    const[rightProject, setRightProject] = useState(1);

    useEffect(()=>{
        if(midProject == 0){
            setLeftProject(projectsData.length - 1)
            setRightProject(+1)
        } else if (midProject == projectsData.length - 1){
            setRightProject(0)
            setLeftProject(midProject-1)
        } else {
            setRightProject(midProject + 1)
            setLeftProject(midProject - 1)
        }
    },[midProject])

    const Increment=()=>{

        if(midProject == projectsData.length - 1){
            setMidProject(0)
        }
        else{
            setMidProject(midProject + 1)
        }
    }

    const Decrement=()=>{
        if(midProject == 0){
            setMidProject(projectsData.length - 1)
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
                            <img key={leftProject} src={projectsData[leftProject].image} alt={`${projectsData[leftProject].title} project image`}></img>
                        </div>
                    </li>
                    <li>
                        <div className="middle-project">
                            <img key={midProject} src={projectsData[midProject].image} alt={`${projectsData[midProject].title} project image`}></img>
                            <div className="button-container">
                                <Link to={`/project/${AddTogether(projectsData[midProject].title)}`} className="information-button font-unbun">SEE MORE</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='right-project'>
                            <img key={rightProject} src={projectsData[rightProject].image} alt={`${projectsData[rightProject].title} project image`}></img>
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