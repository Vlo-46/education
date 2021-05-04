import React from 'react'
import BlogItem from "./Blog_item";

import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
// import Particle from "../Particles/Particle";

const Blog_items = ({blogs}) => {
    let handlePageChange = pageNumber => {
        console.log(pageNumber)
    }

    return (
        <section className='p-5 position-relative'>
            <h4 className={`text-center mb-3 title_text_wrapper`}>Բլոգ</h4>
            <div className="row">
                {
                    blogs.map(blog => <BlogItem key={blog.id} blog={blog}/>)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <Pagination
                    // currentPage={activePage}
                    // totalPages={Math.ceil(allMoviesLength / currentPageMovies)}
                    // changeCurrentPage={handlePageChange}
                    currentPage={1}
                    totalPages={5}
                    changeCurrentPage={handlePageChange}
                    theme="square-fill"
                />
            </div>
            {/*<Particle/>*/}
        </section>
    )
}

export default Blog_items