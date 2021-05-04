import React from 'react'
import Layout from "../layout/Layout";
import ForgotForm from "../components/Auth/ForgotForm";
// import NewPasswordForm from "../components/Auth/NewPassword";

const ForgotPassword = () => {
    return (
        <Layout>
            <ForgotForm/>
            {/*<NewPasswordForm/>*/}
        </Layout>
    )
}

export default ForgotPassword