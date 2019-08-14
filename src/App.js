import React from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/layout/Footer/Footer';

function App() {
    return (
        <div className='App'>
            <Introduction />
            <Education />
            <Experience />
            <Footer />
        </div>
    );
}

export default App;
