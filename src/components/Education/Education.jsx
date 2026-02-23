import DaleCarnegie from "../../assets/images/DALElogo.png";
import UFM from "../../assets/images/UFMlogo.png";
import ValleVerde from "../../assets/images/VVlogo.jpeg";
import EducationContainer from "../EducationContainer/EducationContainer.jsx";
import './Education.css';


function Education() {

    const logo1 = ValleVerde
    const logo2 = DaleCarnegie
    const logo3 = UFM

    return (
        <section id="education" className='darkblue-color'>
        <h2 className="font-anton">EDUCATION</h2>
        <div className="education-container">
            
            <EducationContainer
            image={logo1}
            diploma="High School Diploma"
            institution="Colegio Valle Verde"
            year="2018-2022"
            />

            <EducationContainer
            image={logo2}
            diploma="Generation Next Diploma"
            institution="Dale Carnegie"
            year="2019"
            />

            <EducationContainer
            image={logo3}
            diploma="BSc Computer Science"
            institution="Universidad Francisco Marroquin"
            year="2025-2028"
            />
        </div>
        </section>
    );
}

export default Education;
