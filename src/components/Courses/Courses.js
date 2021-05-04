import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from "./Course";

const Courses = () => {
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

    return (
        <section className='mt-5 p-5'>
            <h4 className={`text-center mb-3 title_text_wrapper`}>Դասընթացներ</h4>
            <Slider {...settings}>
                {
                    courses.map(course => (
                        <Course key={course.id} course={course}/>
                    ))
                }
            </Slider>
        </section>
    )
}

export default Courses