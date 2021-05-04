import React from 'react'
import LastBlogItem from "./Last-blog";

const LastBlogs = () => {
    let lastBlogs = [
        {
            id: 1,
            image: 'https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg',
            websiteName: 'Կայքի անունը',
            title: 'Հեռավար կրթությունը ավելի անվտանգ է մեր օրերում'
        },
        {
            id: 2,
            image: 'https://www.voovadigital.com/wp-content/uploads/beverage-3157395_640.jpg',
            websiteName: 'Կայքի անունը',
            title: 'Անվճար գիտական ռեսուրսներ մանկավարժների և ծնողների համար'
        },
        {
            id: 3,
            image: 'https://fernandaabarcacakes.com/wp-content/uploads/2020/12/Basic-Computer-Skills-678x381.jpg',
            websiteName: 'Կայքի անունը',
            title: 'Հեռավար կրթությունը ավելի անվտանգ է մեր օրերում'
        },
        {
            id: 4,
            image: 'https://assets.entrepreneur.com/content/3x2/2000/20151120174008-man-procrastination-laptop-distant-typing-online.jpeg',
            websiteName: 'Կայքի անունը',
            title: 'Անվճար գիտական ռեսուրսներ մանկավարժների և ծնողների համար'
        },
    ]

    return (
        <div className="col-sm-12 col-md-4 col-lg-3">
            <div className={'border p-2'}>
                <h5 className={'pb-3'}>Վերջին լուրեր</h5>
                {
                    lastBlogs.map(blog => <LastBlogItem key={blog.id} blog={blog}/>)
                }
            </div>
        </div>
    )
}

export default LastBlogs