import React from 'react'
import Layout from "../layout/Layout";
import AboutBanner from "../components/About_banner/About_banner";
import AboutPageSection1 from "../components/About_page_sections/About_page_section_1";
import AboutPageSection2 from "../components/About_page_sections/About_page_section_2";
import AboutPageSection3 from "../components/About_page_sections/About_page_section_3";
// import Particle from "../components/Particles/Particle";

const About = () => {
    return (
        <Layout>
            <div className={'position-relative'}>
                <AboutBanner/>
                <AboutPageSection1/>
                <AboutPageSection2/>
                <AboutPageSection3/>
                {/*<Particle/>*/}
            </div>
        </Layout>
    )
}

export default About