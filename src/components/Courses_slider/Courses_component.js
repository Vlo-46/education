import React from 'react'
import styles from './courses.module.css'
import PriceList from "../Price_list/PriceList";

const Courses_component = () => {


    return (
        <div className='mt-5 p-5'>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={styles.imgField}>
                        <img
                            src="https://image.freepik.com/free-photo/teenage-girl-with-usa-flag-hand_23-2148167009.jpg"
                            alt=""/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={styles.infoField}>
                        <p style={{color: '#343434'}}>
                            Դուք կմասնակցեք առօրյա իրավիճակներին, որտեղ կարող եք գործնականում կիրառել Ձեր բանավոր,
                            հաղորդակցության հմտությունները և սահուն տիրապետել:
                            <br/>
                            <br/>
                            Ինչո՞ւ սովորել Անգլերեն
                            <br/>
                            <br/>
                            Այն աշխարհի ամենաշատ օգտագործվող լեզուն է, ուստի անգլերենի իմացությամբ դուք կբարելավեք Ձեր
                            կարիերան և անձնական հնարավորությունները:
                            <br/>
                            <br/>
                            Դուք հեշտությամբ կտիրապետեք անգլերեն բանավոր խոսքին, քանի որ այբուբենը պարզ է և, ի
                            տարբերություն հայերենի, հարուստ չէ շատ ժամանակաձևերով:
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <PriceList/>
            </div>
        </div>
    )
}

export default Courses_component