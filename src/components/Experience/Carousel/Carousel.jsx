import { useEffect, useState } from "react";
import Brownies from "../../../assets/images/BrowniesPage-ss.png";
import CRAPI from "../../../assets/images/CRAPI-ss.png";
import MathGame from "../../../assets/images/MathGame-ss.png";
import Quetzalink from "../../../assets/images/Quetzalink-ss.png";
import './Carousel.css';

const image1 = Quetzalink;
const image2 = CRAPI;
const image3 = Brownies;
const image4 = MathGame;

const images = [image1, image2, image3, image4];

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
                            <img src={images[leftProject]}></img>
                        </div>
                    </li>
                    <li>
                        <div className="middle-project">
                            <img src={images[midProject]}></img>
                            <div className="information font-unbun">CLICK HERE</div>
                        </div>
                    </li>
                    <li>
                        <div className='right-project'>
                            <img src={images[rightProject]}></img>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='buttons'>
                <button onClick={Increment}>
                    Left
                </button>
                <button onClick={Decrement}>Right</button>
            </div>
        </div>
    )
}

export default Carousel