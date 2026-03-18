import { useParams } from 'react-router-dom'
import ExperienceContainer from '../components/ExperienceContainer/ExperienceContainer.jsx'
import useGithubService from '../services/GithubService.js'
import { projectsData } from '../services/ProjectsData.js'
import AddTogether from '../utils/AddTogether.jsx'


function ProjectPage(){
    const { projectName } = useParams()
    const project = projectsData.find(p => AddTogether(p.title) === projectName)
    const { repoData, loading } = useGithubService(project.title)

    if (loading) return <p>Loading...</p>

    return (
        <ExperienceContainer
            title={repoData.name}
            description={repoData.description ? repoData.description : "No description for this project" }
            language={repoData.language}
            image={project.image}
            link={repoData.link}
            stars={repoData.stars}
            watchers={repoData.watches}
        />
    )
}

export default ProjectPage