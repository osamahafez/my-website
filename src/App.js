import React from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Activites from './components/Activites/Activites';
import Footer from './components/layout/Footer/Footer';

function App() {
    return (
        <div className='App'>
            <Introduction />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Activites />
            <Footer />
        </div>
    );
}

export default App;
