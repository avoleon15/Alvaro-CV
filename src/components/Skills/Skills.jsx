import { faCss3Alt, faHtml5, faJs, faPython, faReact, faRProject } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Skills.css';

function Skills() {
    return (
        <>
        <section id="skills">
            <h3 className='skills-title font-anton'>Web Developer</h3>
            <div className='all-skill-container'>
                <div className='skill-container'>
                    <FontAwesomeIcon icon={faHtml5} className='icon html' />
                    <h4 className='font-unbun'>HTML</h4>
                </div>
                <div className='skill-container'>
                    <FontAwesomeIcon icon={faCss3Alt} className='icon css' />
                    <h4 className='font-unbun'>CSS</h4>
                </div>
                <div className='skill-container'>
                    <FontAwesomeIcon icon={faJs} className='icon js' />
                    <h4 className='font-unbun'>JS</h4>
                </div>
                <div className='skill-container'>
                    <FontAwesomeIcon icon={faReact} className='icon react' />
                    <h4 className='font-unbun'>React</h4>
                </div>
                <div className='skill-container'>
                    <FontAwesomeIcon icon={faPython} className='icon python' />
                    <h4 className='font-unbun'>Python</h4>
                </div>
                <div className='skill-container'>
                    <FontAwesomeIcon icon={faRProject} className='icon rStudio' />
                    <h4 className='font-unbun'>R studio</h4>
                </div>
            </div>
        </section>
        </>
    );
}

export default Skills;
