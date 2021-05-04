import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './wrapper_slider.module.css'

const WrapperSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

    let content = [
        {
            id: 1,
            image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip',
            left_box_text_1: 'Լավագույն Ընտրությունը',
            left_box_text_2: 'Մենք կարևորում ենք ուսուցման որակը',
            left_box_text_3: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեր համար',
            right_box_text_1: 'Բարձր արձյունք',
            right_box_text_2: 'Բարձր արձյունք',
        },
        {
            id: 2,
            image: 'https://ellenlandreth.files.wordpress.com/2014/11/books-opened.jpg',
            left_box_text_1: 'Լավագույն Ընտրությունը',
            left_box_text_2: 'Մենք կարևորում ենք ուսուցման որակը',
            left_box_text_3: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեր համար',
            right_box_text_1: 'Բարձր արձյունք',
            right_box_text_2: 'Բարձր արձյունք',
        },
        {
            id: 3,
            image: 'https://image.freepik.com/free-photo/opened-books-on-library-table_23-2147767300.jpg',
            left_box_text_1: 'Լավագույն Ընտրությունը',
            left_box_text_2: 'Մենք կարևորում ենք ուսուցման որակը',
            left_box_text_3: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեր համար',
            right_box_text_1: 'Բարձր արձյունք',
            right_box_text_2: 'Բարձր արձյունք',
        },
    ]
    return (
        <section>
            <Slider {...settings}>
                {
                    content.map(i => (
                        <div key={i.id} className={styles.wrapperBox}>
                            <div className="row p-5" style={{backgroundColor: '#F1F5FC'}}>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <p className={styles.sliderText1}>{i.left_box_text_1}</p>
                                    <p className={styles.sliderText2}>{i.left_box_text_2}</p>
                                    <p className={styles.sliderText3}>{i.left_box_text_3}</p>
                                    <div className={styles.buttonsField}>
                                        <button className={`btn ${styles.moreBtn}`}>Իմանալ ավելին</button>
                                        <button className={`btn ${styles.regBtn}`}>Գրանցվել</button>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className={styles.wrapperRightBox}>
                                        <div className={`${styles.imgBox}`}>
                                            <img src={i.image}
                                                 alt={i.image}
                                            />
                                        </div>
                                        <div className={styles.outBox1}>
                                            <div className={styles.outBox1_childBox_1}>
                                                <img src="assets/icons/book.png" alt={i.image}/>
                                            </div>
                                            <div className={styles.outBox1_childBox_2}>
                                                <p>{i.right_box_text_1}</p>
                                            </div>
                                        </div>
                                        <div className={styles.outBox2}>
                                            <div className={styles.outBox1_childBox_2}>
                                                <p>{i.right_box_text_2}</p>
                                            </div>
                                            <div>
                                                <img src="assets/icons/diagram.png" alt={i.image}/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </section>
    )
}

export default WrapperSlider