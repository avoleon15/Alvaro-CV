import { useFetch } from '../utils/useFetch.js';

function useGithubService(repoName){
    const { data, loading } = useFetch(`https://api.github.com/repos/avoleon15/${repoName}`);

    if (loading || !data) return { repoData: null, loading }

    const repoData = {
        "name" : data.name,
        "description" : data.description,
        "language" : data.language,
        "link" : data.html_url,
        "stars" : data.stargazers_count,
        "watches" : data.watchers_count
    }

    return {repoData , loading}
}

export default useGithubService