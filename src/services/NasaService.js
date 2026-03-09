import { useFetch } from '../utils/useFetch.js';

function useNasaService(){
    const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
    const {data, loading} = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);

    if (loading || !data) return { nasaData: null, loading }

    const nasaData = {
        "title": data.title,
        "url": data.url
    }

    return {nasaData, loading}
}

export default useNasaService
