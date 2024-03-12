import React from 'react'
import Navbar from './layouts/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './layouts/Footer';
import 'aos/dist/aos.css'; // Import the CSS styles
import Sidebar from './components/ui/Sidebar';

const App = () => {

    return (
        <section className='relative'>
            <Navbar />
            <Sidebar/>
            <Outlet />
            <Footer/>
        </section>
    )
}

export default App;
