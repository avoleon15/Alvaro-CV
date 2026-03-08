import { useParams } from 'react-router-dom'
import ExperienceContainer from '../components/ExperienceContainer/ExperienceContainer.jsx'
import { projectsData } from '../data/ProjectsData.js'
import { useFetch } from '../services/useFetch.js'
import AddTogether from '../utils/AddTogether.jsx'

function ProjectPage(){
    const { projectName } = useParams()
    const project = projectsData.find(p => AddTogether(p.title) === projectName)
    const { data, loading } = useFetch(`https://api.github.com/repos/avoleon15/${project.title}`)
    if (loading) return <p>Loading...</p>

    return (
    <>
        <ExperienceContainer
            title={data.name}
            description={project.description}
            list={project.list}
            image={project.image}
        />
    </>
    )
}

export default ProjectPage