import React from 'react'


const StudentProfile = ({candidate}) => {

    return (
        <div>
            <h1>{candidate.name}</h1>
            <h1>{candidate.surname}</h1>
        </div>
    )
}

export default StudentProfile