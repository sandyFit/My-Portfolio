import React, {useEffect} from 'react'
import Navbar from './layouts/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './layouts/Footer';
import Aos from 'aos';

const App = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000, // values from 0 to 3000, with step 50ms
        });
    }, []);

    return (
        <section>
            <Navbar />
            <Outlet />
            <Footer/>
        </section>
    )
}

export default App