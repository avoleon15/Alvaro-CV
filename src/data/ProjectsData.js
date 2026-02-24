import BrowniesPhoto from "../assets/images/BrowniesPage-ss.png";
import CRAPIPhoto from "../assets/images/CRAPI-ss.png";
import MathGamePhoto from "../assets/images/MathGame-ss.png";
import QuetzalinkPhoto from "../assets/images/Quetzalink-ss.png";

export const projectsData = [
    {
        id:1,
        title:"Quetzalink",
        description:"Presented and worked on Quetzalink. Developed in React, we created a gamified application focused on economic education for students in Guatemala. Got second place at the FEE Hackathon.",
        list:["React", "Presentation Skill", "Economic Education knowledge"],
        image:QuetzalinkPhoto
    },
    {
        id:2,
        title:"Clash Royale API",
        description:"Using REST API integration I created a web page that fetches information for the player.",
        list:["Python", "HTML, CSS, JS", "REST API"],
        image:CRAPIPhoto
    },
    {
        id:3,
        title:"Brownies Page",
        description:"Created a page dedicated to selling brownies.",
        list:["React"],
        image:BrowniesPhoto
    },
    {
        id: 4,
        title:"MathGame",
        description:"Developed a Math Game which includes levels, lives, difficulty, and animation.",
        list:["HTML, CSS, JS"],
        image:MathGamePhoto},
]