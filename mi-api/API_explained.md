Created an API for the testimonials in my CV. Created two documents, projects.js and server.js. Project.js is the API.
It was created using node.js and express. This API has the fundamentals of CRUD. It can GET, POST, DELETE, PATCH the data.
All the information is returned in format json.

The Endpoints are as follows:

- GET all the testimonials:

curl http://localhost:3001/testimonials


- GET one testimonial by ID:

curl http://localhost:3001/testimonials/1


- POST add one testimonial, it requires the following fields: {author, role, company, text, createdAt}:

curl -X POST http://localhost:3001/testimonials \
-H "Content-Type: application/json" \
-d '{"author": "Gladys" ,"role": "catedratico", "company": "UFM", "text": "Muy bien Alumno ese Alvaro", "createdAt": "2025-02-7"}'


- PATCH can modify an existing testimonial, fetched by ID and all the info has to be reentered:

curl -X PATCH http://localhost:3001/testimonials/1 \
-H "Content-Type: application/json" \
-d '{"author": "Christian" ,"role": "catedratico", "company": "UFM", "text": "Buenas practicas en la clase de algebra", "createdAt": "2026-01-17"}'


- DELETE delete a testimonial by id

curl -X DELETE http://localhost:3001/testimonials/1


Picture of the API working attached inside mi-api carpet