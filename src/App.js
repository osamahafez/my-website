import React from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Education from './components/Education/Education';
import Footer from './components/layout/Footer/Footer';

function App() {
    return (
        <div className='App'>
            <Introduction />
            <Education />
            <Footer />
        </div>
    );
}

export default App;
