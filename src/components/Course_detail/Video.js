import React from 'react'

const CourseDetailVideo = ({video}) => {
    return (
        <div className={'w-100'}>
            {
                video.map(v => (
                    <div
                        key={v.id}
                        dangerouslySetInnerHTML={{__html: v.video}}
                        style={{height: "300px", marginBottom: "15px"}}
                    />
                ))
            }
        </div>
    )
}

export default CourseDetailVideo