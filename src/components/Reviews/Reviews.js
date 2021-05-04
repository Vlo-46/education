import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "./Review";

const Reviews = () => {
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

    let reviews = [
        {
            id: 1,
            image: 'https://image.freepik.com/free-photo/the-charming-girl-stands-on-the-street_8353-5372.jpg',
            name: 'Աննա Գրիգորյան',
            text: 'Ուսուցման որակը բարձր է ։Անչափ շնորհակալ ենք ստացած գիտելիքի համար:Ուսուցման որակը բարձր է ։Անչափ շնորհակալ ենք ստացած գիտելիքի համար'
        },
        {
            id: 2,
            image: 'https://image.freepik.com/free-photo/the-charming-girl-stands-on-the-street_8353-5372.jpg',
            name: 'Աննա Գրիգորյան',
            text: 'Ուսուցման որակը բարձր է ։Անչափ շնորհակալ ենք ստացած գիտելիքի համար:Ուսուցման որակը բարձր է ։Անչափ շնորհակալ ենք ստացած գիտելիքի համար'
        },
        {
            id: 3,
            image: 'https://image.freepik.com/free-photo/the-charming-girl-stands-on-the-street_8353-5372.jpg',
            name: 'Աննա Գրիգորյան',
            text: 'Ուսուցման որակը բարձր է ։Անչափ շնորհակալ ենք ստացած գիտելիքի համար:Ուսուցման որակը բարձր է ։Անչափ շնորհակալ ենք ստացած գիտելիքի համար'
        },

    ]

    return (
        <section className='mt-2 p-5' style={{backgroundColor: '#F1F5FC'}}>
            <h4 className={`text-center mb-3 title_text_wrapper`}>Կարծիքներ</h4>
            <Slider {...settings}>
                {
                    reviews.map(item => (
                        <Review key={item.id} item={item}/>
                    ))
                }
                {
                    reviews.map(item => (
                        <Review key={item.id} item={item}/>
                    ))
                }
            </Slider>
        </section>
    )
}

export default Reviews