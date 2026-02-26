import { useParams } from 'react-router-dom'
import ExperienceContainer from '../components/ExperienceContainer/ExperienceContainer.jsx'
import { projectsData } from '../data/ProjectsData.js'
import AddTogether from '../utils/AddTogether.jsx'

function ProjectPage(){
    const { projectName } = useParams()
    const project = projectsData.find(p => AddTogether(p.title) === projectName)

    return (
    <>
        <ExperienceContainer
            title={project.title}
            description={project.description}
            list={project.list}
            image={project.image}
        />
    </>
    )
}

export default ProjectPage