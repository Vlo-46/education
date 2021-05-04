import React from 'react'
import Pagination from "react-pagination-library";

const StudentPagination = () => {
    let handlePageChange = pageNumber => {
        console.log(pageNumber)
    }
    return (
        <div className='d-flex justify-content-end'>
            <Pagination
                // currentPage={activePage}
                // totalPages={Math.ceil(allMoviesLength / currentPageMovies)}
                // changeCurrentPage={handlePageChange}
                currentPage={1}
                totalPages={5}
                changeCurrentPage={handlePageChange}
                theme="default"
            />
        </div>
    )
}

export default StudentPagination