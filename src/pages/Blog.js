import React, {useEffect} from 'react'
import Layout from "../layout/Layout";
import BlogHeader from "../components/Blog_banner/Blog_header";
import BlogItems from "../components/Blog_page_items/Blog_items";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from '../redux/actions/blogAction'

const Blog = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBlogs())
    }, [dispatch])

    let blogs = useSelector(state => state.blog.blogs)

    return (
        <Layout>
            <BlogHeader/>
            <BlogItems blogs={blogs}/>
        </Layout>
    )
}

export default Blog