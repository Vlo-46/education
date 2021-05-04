import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Certificate from "./Certificate";

const Certificates = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

    let certificates = [
        {id: 1, img: 'assets/images/certificate.png'},
        {id: 2, img: 'assets/images/certificate.png'},
        {id: 3, img: 'assets/images/certificate.png'},
    ]

    return (
        <div className={'mt-3 mb-3'}>
            <Slider {...settings}>
                {
                    certificates.map(c => <Certificate key={c.id} certificate={c}/>)
                }
            </Slider>
        </div>
    )
}

export default Certificates