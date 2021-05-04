import React from 'react'
import styles from './price_list.module.css'

const ListItem = ({item}) => {
    return (
        <div className={'p-2'}>
            <div className={styles.list}>
                <div className={styles.imgField}>
                    <img src="assets/images/price-list-img.png" alt=""/>
                    <div className={styles.imgInnerField}>
                        <span>{item.price}&nbsp;Դրամ</span>
                        <span>{item.quantity}&nbsp;դաս</span>
                    </div>
                </div>
                <div>
                    <ul className={styles.infoField}>
                        {
                            item.description.map(d => (
                                <li key={d.id}><i className={`fa fa-check ${styles.checkIcon}`}/>&nbsp;{d.text}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={'d-flex justify-content-center'}>
                    <button className={`btn ${styles.listBtn}`}>Իմանալ ավելին</button>
                </div>
            </div>
        </div>
    )
}

export default ListItem

//assets/images/price-list-img.png