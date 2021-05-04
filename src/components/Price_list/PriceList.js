import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListItem from "./ListItem";

const PriceList = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
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

    let price_list = [
        {
            id: 1,
            price: 15000,
            quantity: 8,
            description: [
                {id: 11, text: '1 անվճար փորձնական դաս'},
                {id: 12, text: 'Խմբում առավելագույն 3 անդամ'},
                {id: 13, text: 'Ինտերակտիվ Մեթոդներ'},
            ]
        },
        {
            id: 2,
            price: 10000,
            quantity: 7,
            description: [
                {id: 22, text: '1 անվճար փորձնական դաս'},
                {id: 23, text: 'Խմբում առավելագույն 3 անդամ'},
                {id: 24, text: 'Ինտերակտիվ Մեթոդներ'},
            ]
        },
        {
            id: 3,
            price: 14000,
            quantity: 9,
            description: [
                {id: 33, text: '1 անվճար փորձնական դաս'},
                {id: 34, text: 'Խմբում առավելագույն 3 անդամ'},
                {id: 35, text: 'Ինտերակտիվ Մեթոդներ'},
            ]
        },
        {
            id: 4,
            price: 18000,
            quantity: 10,
            description: [
                {id: 44, text: '1 անվճար փորձնական դաս'},
                {id: 45, text: 'Խմբում առավելագույն 3 անդամ'},
                {id: 46, text: 'Ինտերակտիվ Մեթոդներ'},
            ]
        },
        {
            id: 5,
            price: 19000,
            quantity: 12,
            description: [
                {id: 55, text: '1 անվճար փորձնական դաս'},
                {id: 56, text: 'Խմբում առավելագույն 3 անդամ'},
                {id: 57, text: 'Ինտերակտիվ Մեթոդներ'},
            ]
        },
        {
            id: 6,
            price: 22000,
            quantity: 18,
            description: [
                {id: 66, text: '1 անվճար փորձնական դաս'},
                {id: 65, text: 'Խմբում առավելագույն 3 անդամ'},
                {id: 67, text: 'Ինտերակտիվ Մեթոդներ'},
            ]
        },
        {
            id: 7,
            price: 16000,
            quantity: 14,
            description: [
                {id: 77, text: '1 անվճար փորձնական դաս'},
                {id: 78, text: 'Խմբում առավելագույն 3 անդամ'},
                {id: 79, text: 'Ինտերակտիվ Մեթոդներ'},
            ]
        },
    ]

    return (
        <section className='mt-2 p-5'>
            <h4 className={`text-center mb-3 title_text_wrapper`}>Գնացուցակ</h4>
            <Slider {...settings}>
                {
                    price_list.map(p => <ListItem key={p.id} item={p}/>)
                }
            </Slider>
        </section>
    )
}

export default PriceList