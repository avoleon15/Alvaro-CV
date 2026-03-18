import useTestimonialsService from '../../services/TestimonialsService';
import './Testimonials.css';

function Testimonials(){
    
    const { testimonialData, loading } = useTestimonialsService()

    if (loading) return <p>Cargando...</p>
    if (!testimonialData) return <p>No se pudieron cargar los testimonios.</p>  // ← add this


    return (
        <div className='testimonials-container darkblue-color'>
            <h2 className='font-anton'>Testimonials</h2>
            {testimonialData.map(testimonial => (
                <div className='testimonial' key={testimonial.id}>
                    <p className='testimonial-author font-anton'>{testimonial.author} — {testimonial.role} at {testimonial.company}</p>
                    <p className='testimonial-message font-unbun'>{testimonial.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Testimonials