import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "./Review";

const Reviews = ({candidate}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // initialSlide: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='mt-2 p-5' style={{backgroundColor: '#F1F5FC'}}>
            <h4 className={`text-center mb-3 title_text_wrapper`}>Կարծիքներ</h4>

            {
                candidate.Teacher_reviews.length
                    ? <Slider {...settings}>
                        {
                            candidate.Teacher_reviews.map(review => (
                                <Review key={review.id} review={review}/>
                            ))
                        }
                    </Slider>
                    : null
            }
        </section>
    )
}

export default Reviews