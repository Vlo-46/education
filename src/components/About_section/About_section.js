import React from 'react'
import styles from './about_section.module.css'
import Accordion from "./Accordion";

const AboutSection = () => {
    let accordions = [
        {
            id: 1,
            title: 'Ուսուցման որակը',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեր համար'
        },
        {
            id: 2,
            title: 'Հարմարավետություն',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեր համար'
        },
        {
            id: 3,
            title: 'Մատչելիություն',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեր համար'
        },
        {
            id: 4,
            title: 'Նորագույն դասընթացներ',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեր համար'
        },
    ]


    return (
        <section className='mt-2 p-5' style={{backgroundColor: '#F1F5FC'}}>
            <div className="row p-5">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={styles.imgFiled}>
                        <img src="http://unblast.com/wp-content/uploads/2020/02/DL-Desktop-Calendar-Mockup.jpg"
                             alt="http://unblast.com/wp-content/uploads/2020/02/DL-Desktop-Calendar-Mockup.jpg"
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="accordion pl-5 pr-5" id="accordionExample">
                        {
                            accordions.map(a => (
                                <Accordion key={a.id} item={a}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection