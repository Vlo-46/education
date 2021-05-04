import React, {useEffect, useState} from 'react'
import Layout from "../layout/Layout";
import BlogHeader from "../components/Blog_banner/Blog_header";
import BlogInfo from "../components/Blog_detail/Blog-info";
import LastBlogs from "../components/Blog_detail/Last-blogs";
import {useParams} from 'react-router-dom'
import axios from "axios";
import keys from "../keys";
// import Particle from "../components/Particles/Particle";

const BlogDetail = () => {
    const [blog, setBlog] = useState({})

    let {id} = useParams()
    useEffect(() => {
        function getBlog() {
            axios.get(`${keys.BACKEND_URI}/blog/detail/${id}`)
                .then(res => {
                    setBlog(res.data.blog)
                })
                .catch(e => {
                    console.log(e)
                })
        }
        getBlog()
    }, [id])

    return (
        <Layout>
            <BlogHeader/>
            <section className='p-5 position-relative'>
                <h4 className={`mb-3 title_text_wrapper`}>{blog.title}</h4>
                <div className='mt-4'>
                    <span style={{color: '#061358'}}>
                        <img src="assets/icons/education.png" alt=""/>
                        &nbsp;
                        &nbsp;
                        Կայքի անունը
                    </span>
                    <span className={'pl-5'} style={{color: '#061358'}}>Հրապարակվել է ՝ {blog.date}</span>
                </div>
                <div className="row mt-4">
                    <BlogInfo blog={blog}/>
                    <LastBlogs/>
                </div>
                {/*<Particle/>*/}
            </section>
        </Layout>
    )
}

export default BlogDetail