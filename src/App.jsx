import './App.css'
import Navbar from './components/Navbar';
import Intro from './components/intro/Intro';
import Competences from './components/Compétences/competence.jsx';
import Contact from './components/contact.jsx';
import Portfolio from './components/Portfolio/portfolio';
import Footer from './components/Footer/footer.jsx';



function App() {
    return (

        <div className='App'>
            <Navbar />
            <Intro />
            <Competences />
            <Portfolio />
            <Contact />
            <Footer />
        </div>

    );
}

export default App
