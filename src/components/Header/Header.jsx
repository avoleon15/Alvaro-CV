import './Header.css';

function Header() {

return (

<>
    <header className='darkblue-color'>
        <nav>
            <h5 id="contact" className='font-unbun'>Contact Me</h5>
            <ul id="linksSection">
                <li className='font-unbun'><a href="https://www.linkedin.com/in/%C3%A1lvaro-le%C3%B3n-a88340255/" target="_blank" title="Visit my linkedin">Linkedin</a></li>
                <li className='font-unbun'><a href="https://github.com/avoleon15" target="_blank" title="Visit my github">Github</a></li>
            </ul>
        </nav>
        <h1 id="name" className='font-anton'><p>I am</p>Alvaro Leon</h1>
        <ul id="infoList">
            <li className='font-unbun'>Guatemala, Guatemala</li>
            <li className='font-unbun'>avoleon15@gmail.com</li>
            <li className='font-unbun'>+502 4677-6304</li>
        </ul>
    </header>
</>
)
}

export default Header