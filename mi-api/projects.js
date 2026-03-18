const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let testimonials = [
    {
        id: 1,
        author: 'Fritz Thomas',
        role: 'Catedratico',
        company: 'UFM',
        text: 'Desarrollo de una aplicación en Angular enfocada en la gestión de tareas académicas. Incluye autenticación, manejo de estado y consumo de APIs REST.',
        createdAt: '2024-03-15'
    },
    {
        id: 2,
        author: 'Arely Socop',
        role: 'Catedratico',
        company: 'UFM',
        text: 'Construcción de una API con Express y Node.js para manejar usuarios, autenticación JWT y conexión a base de datos MongoDB.',
        createdAt: '2024-04-02'
    },
    {
        id: 3,
        author: 'Kenneth',
        role: 'Catedratico',
        company: 'UFM',
        text: 'Desarrollo de un portafolio web personal utilizando React, con diseño responsive, integración de proyectos y despliegue en GitHub Pages.',
        createdAt: '2024-05-10'
    }
]

let nextId = 4;

// GET / - Bienvenida
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a la API de Proyectos' });
});

// GET /projects - Ver todos los proyectos
app.get('/projects', (req, res) => {
    res.json(projects);
});

// GET /projects/:id - Ver un proyecto específico
app.get('/projects/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));

    if (!project) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    res.json(project);
});

// POST /projects - Crear un proyecto
app.post('/projects', (req, res) => {
    const { name, stars } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'El campo "name" es requerido' });
    }

    const newProject = {
        id: nextId++,
        name,
        stars: stars || 0,
    };

    projects.push(newProject);
    res.status(201).json(newProject);
});

// PATCH /projects/:id - Actualizar un proyecto
app.patch('/projects/:id', (req, res) => {
    const index = projects.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    projects[index] = { ...projects[index], ...req.body };
    res.json(projects[index]);
});

// DELETE /projects/:id - Eliminar un proyecto
app.delete('/projects/:id', (req, res) => {
    const index = projects.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    const deleted = projects.splice(index, 1);
    res.json({ message: 'Proyecto eliminado', project: deleted[0] });
});

// DELETE /projects/:id - Eliminar un proyecto
app.delete('/projects/:id', (req, res) => {
    const index = projects.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    const deleted = projects.splice(index, 1);
    res.json({ message: 'Proyecto eliminado', project: deleted[0] });
});


// TESTIMONIALS

// GET. Ver todos los testimonials registrados
app.get('/testimonials', (req, res) => {
    res.json(testimonials);
});

//curl http://localhost:3001/testimonials

// GET. Ver el testimonial por ID
app.get('/testimonials/:id', (req, res) => {
    const index = testimonials.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Testimonial no encontrado' });
    }

    testimonials[index] = { ...testimonials[index], ...req.body };
    res.json(testimonials[index]);
});
//curl http://localhost:3001/testimonials/1

// GET. Agregar un testimonial a los testimonials
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

/*
curl -X POST http://localhost:3001/testimonials \
-H "Content-Type: application/json" \
-d '{"author": "Gladys" ,"role": "catedratico", "company": "UFM", "text": "Muy bien Alumno ese Alvaro", "createdAt": "2025-02-7"}'
*/

// PATCH /testimonials/id modifica un documento
app.patch('/testimonials/:id', (req, res) => {
    const index = testimonials.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Testimonial no encontrado' });
    }

    testimonials[index] = { ...testimonials[index], ...req.body };
    res.json(testimonials[index]);
});
/*
curl -X PATCH http://localhost:3001/testimonials/1 \
-H "Content-Type: application/json" \
-d '{"author": "Gladys" ,"role": "catedratico", "company": "UFM", "text": "Muy bien Alumno ese Alvaro", "createdAt": "2025-02-7"}'
*/

// DELETE , elimina un testimonial por ID
app.delete('/testimonials/:id', (req, res) => {
    const index = testimonials.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Testimonial no encontrado' });
    }

    const deleted = testimonials.splice(index, 1);
    res.json({ message: 'Testimonial eliminado', testimonials: deleted[0] });
});
// curl -X DELETE http://localhost:3001/testimonials/1


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});