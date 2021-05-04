import React from 'react'
import styles from './blog.module.css'

const HomePageBlog = () => {
    let blogs = [
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
        <section className='mt-2 p-5'>
            <h4 className={`text-center mb-3 title_text_wrapper`}>Բլոգ</h4>
            <div className="row mt-4">
                {
                    blogs.map(blog => (
                        <div className="col-sm-12 col-md-6 col-lg-3" key={blog.id}>
                            <div className={styles.blog}>
                                <div className={styles.imgField}>
                                    <img src={blog.image}
                                         alt={blog.image}
                                    />
                                </div>
                                <div className={styles.bodyField}>
                                    <div style={{padding: '15px 0'}}>
                                        <span style={{color: '#061358'}}>{blog.title}</span>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <div>
                                            <img src="assets/icons/education.png" alt=""/>
                                            &nbsp;
                                            <span style={{color: '#061358', fontSize: '14px'}}>{blog.websiteName}</span>
                                        </div>
                                        <div>
                                            <img src="assets/icons/share.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default HomePageBlog