import React from 'react'
import styles from './bests_section.module.css'
import Teacher from "../Teachers/Teacher";

const BestsSection = () => {
    // let [hovered, setHovered] = useState(false)

    let teachers = [
        {
            id: 1,
            name: 'Կարեն Գեղամյան',
            profession: 'Անգլերենի մասնագետ',
            image: 'assets/images/teacher-1.png'
        },
        {
            id: 2,
            name: 'Մառլեն Բաբայան',
            profession: 'Իտալերենի մասնագետ',
            image: 'assets/images/teacher-2.png'
        },
        {
            id: 3,
            name: 'Գեղամ Խաչատրյան',
            profession: 'Արաբերենի մասնագետ',
            image: 'assets/images/teacher-1.png'
        },
        {
            id: 4,
            name: 'Պողոս Պետրոսյան',
            profession: 'Իսպաներենի մասնագետ',
            image: 'assets/images/teacher-2.png'
        },
    ]

    // let shadow = {
    //     boxShadow: '1px -15px 13px 3px #1472e2 inset',
    //     transition: '0.5s',
    //     display: 'block'
    // }

    return (
        <section className='mt-2 p-5'>
            <h4 className={`text-center mb-3 title_text_wrapper`}>Շաբաթվա լավագույնները</h4>
            <p className={styles.subTitle}>Շաբաթվա լավագույն դասախոսներ քառյակը կազմվում է ձեր գնահատման
                միջոցով</p>
            <div className={styles.imgBox}>
                <img src="assets/icons/trophy.png" alt="trophy"/>
            </div>
            <div className="row mt-5"
                 data-aos="fade-up"
                 data-aos-duration="3000"
            >
                {
                    teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}/>)
                }
            </div>
        </section>
    )
}

export default BestsSection