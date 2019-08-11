import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <h1>Website</h1>
            <Footer />
        </div>
    );
}

export default App;
