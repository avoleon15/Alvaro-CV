import cors from 'cors';
import express from 'express';
import { testimonials } from '../mi-api/models/testimonials.js';

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

const nextId = 4;

// TESTIMONIALS

// GET. See all testimonials
app.get('/testimonials', (req, res) => {
    res.json(testimonials);
});

// GET. See a testimonial by ID
app.get('/testimonials/:id', (req, res) => {
    const testimonial = testimonials.find(p => p.id === parseInt(req.params.id));

    if (!testimonial) {
        return res.status(404).json({ error: 'Testimonial no encontrado' });
    }

    res.json(testimonial);
});


// POST, create a testimonial
app.post('/testimonials', (req, res) => {
    const { author, role, company, text, createdAt } = req.body;

    if (!author) {
        return res.status(400).json({ error: 'El campo "author" es requerido' });
    }
    if (!role) {
        return res.status(400).json({ error: 'El campo "role" es requerido' });
    }
    if (!company) {
        return res.status(400).json({ error: 'El campo "company" es requerido' });
    }
    if (!text) {
        return res.status(400).json({ error: 'El campo "text" es requerido' });
    }
    if (!createdAt) {
        return res.status(400).json({ error: 'El campo "createdAt" es requerido' });
    }

    const newTestimonial = {
        id: nextId++,
        author,
        role,
        company,
        text,
        createdAt
    };

    testimonials.push(newTestimonial);
    res.status(201).json(newTestimonial);
});

// PATCH /testimonials/id modify an alredy existing testimonial
app.patch('/testimonials/:id', (req, res) => {
    const index = testimonials.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Testimonial no encontrado' });
    }

    testimonials[index] = { ...testimonials[index], ...req.body };
    res.json(testimonials[index]);
});

// DELETE , deletes a testimonial by ID
app.delete('/testimonials/:id', (req, res) => {
    const index = testimonials.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Testimonial no encontrado' });
    }

    const deleted = testimonials.splice(index, 1);
    res.json({ message: 'Testimonial eliminado', testimonials: deleted[0] });
});

app.use((req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        mensaje: `La ruta ${req.url} no existe`
    })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});