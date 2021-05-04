import React, {useEffect} from 'react'
import NavBar from "./Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({children}) => {
    useEffect(() => {
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
    }, [])

    return (
        <main>
            <NavBar/>
            {children}
            <Footer/>
        </main>
    )
}

export default Layout