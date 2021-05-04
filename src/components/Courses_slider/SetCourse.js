import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseItem from "./CourseItem";
import CoursesComponent from "./Courses_component";
import styles from './courses.module.css'
import Choice from "./Choice";


const SetCourse = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // initialSlide: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    let courses = [
        {id: 1, image: 'assets/courses/arabian.png', title: 'Արաբերեն'},
        {id: 2, image: 'assets/courses/italy.png', title: 'Իտալերեն'},
        {id: 3, image: 'assets/courses/japan.png', title: 'Ճապոներեն'},
        {id: 4, image: 'assets/courses/ru.png', title: 'Ռուսերեն'},
        {id: 5, image: 'assets/courses/spain.png', title: 'Իսպաներեն'},
        {id: 6, image: 'assets/courses/usa.png', title: 'Անգլերեն'},
        {id: 7, image: 'assets/courses/arabian.png', title: 'Արաբերեն'},
        {id: 8, image: 'assets/courses/italy.png', title: 'Իտալերեն'},
        {id: 9, image: 'assets/courses/japan.png', title: 'Ճապոներեն'},
        {id: 10, image: 'assets/courses/ru.png', title: 'Ռուսերեն'},
        {id: 11, image: 'assets/courses/spain.png', title: 'Իսպաներեն'},
        {id: 12, image: 'assets/courses/usa.png', title: 'Անգլերեն'},
    ]

    let choices = [
        {id: 1, title: "Մասնագիտական Կրթություն", subTitle: 'Ուսումանական Ծրագրի Գրագետ Կազմում'},
        {id: 2, title: "Դասավանդման Մեթոդիկա", subTitle: 'Ուսումանական Ծրագրի Գրագետ Կազմում'},
        {id: 3, title: "Դասապրոցեսի Ռացիոնալ Բաշխում", subTitle: 'Ուսումանական Ծրագրի Գրագետ Կազմում'},
    ]

    return (
        <section className='mt-5 p-5'>
            <h4 className={`text-center mb-3 title_text_wrapper`}>Դասընթացներ</h4>
            <Slider {...settings}>
                {
                    courses.map(course => (
                        <CourseItem key={course.id} course={course}/>
                    ))
                }
            </Slider>
            <CoursesComponent/>
            <div className='mt-5'>
                <h4 className={`text-center mb-3 title_text_wrapper`}>Միացիր Մեզ Աշխարհի Յուրաքանչյուր Ծայրից</h4>
                <div className="container p-5" data-aos="zoom-in-down">
                    <img src="assets/images/map.png" alt="" style={{width: '100%', height: 'auto'}}/>
                </div>
            </div>
            <div className="mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h5>Մասնագետների ընտրության հարցում մենք կարևորում ենք </h5>
                        <div className={styles.choiceField}>
                            {
                                choices.map((choice, index) => <Choice key={choice.id} choice={choice} index={index}/>)
                            }
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={styles.choiceImg}>
                            <img src="https://cdn.corporatefinanceinstitute.com/assets/home-office1.jpeg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SetCourse