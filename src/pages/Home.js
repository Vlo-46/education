import React from 'react';
import Layout from "../layout/Layout";
import WrapperSlider from "../components/Wrapper_slider/Wrapper_slider";

import BestsSection from "../components/Section_bests/Bests_section";
import AboutSection from "../components/About_section/About_section";
import HomePageBlog from "../components/Home_page_blog/HomePageBlog";
import Reviews from "../components/Reviews/Reviews";
import Contact from "../components/Contact/Contact";
import InfoSection2 from "../components/Info_section_1/Info_section_2";
import PriceList from "../components/Price_list/PriceList";

// import Courses from "../components/Courses/Courses";
// import Advantage from "../components/Advantage/Advantage";
// import InfoSection1 from "../components/Info_section_1/Info_section_1";

// import openSocket from "socket.io-client";
// import keys from "../keys";

const Home = () => {
    // const socket = openSocket(`http://localhost:5000/`, {transports: ['websocket']})
    // useEffect(() => {
    //     socket.emit('user', 'Vlo')
    //     socket.on('candidate', data => {
    //         console.log(data)
    //     })
    // }, [socket])

    return (
        <Layout>
            <WrapperSlider/>
            <PriceList/>
            {/*<Courses/>*/}
            {/*<Advantage/>*/}
            {/*<InfoSection1/>*/}
            <BestsSection/>
            <AboutSection/>
            <InfoSection2/>
            <HomePageBlog/>
            <Reviews/>
            <Contact/>
        </Layout>
    )
}

export default Home