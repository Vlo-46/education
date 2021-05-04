import React from 'react'
import Layout from "../layout/Layout";
import ContactBanner from "../components/Contact/Contact_banner";
import ContactSection from '../components/Contact/Contact'

const Contact = () => {
    return (
        <Layout>
            <ContactBanner/>
            <ContactSection/>
        </Layout>
    )
}

export default Contact