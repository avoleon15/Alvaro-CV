import Education from '../components/Education/Education'
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Skills from '../components/Skills/Skills'
import "./Home.css"

function Home() {
    return (
        <>
        <Header />
        <Skills />
        <Education />
        <Experience />
        <Footer />
        </>
    )
}

export default Home