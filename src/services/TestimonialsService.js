import { useFetch } from '../utils/useFetch.js';

function useTestimonialsService(){
    const { data, loading } = useFetch(`http://localhost:3001/testimonials`);

    if (loading || !data) return { testimonialData: null, loading }

    const testimonialData = data.map(data => ({
        "id": data.id,
        "author" : data.author,
        "role" : data.role,
        "company" : data.company,
        "text" : data.text,
        "createdAt" : data.createdAt
    }))

    return {testimonialData , loading}
}

export default useTestimonialsService