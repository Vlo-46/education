import React from 'react'
import styles from './summery.module.css'

const FundAccount = () => {
    return (
        <div className={`${styles.fundAccountField} p-3`}>
            <div className={styles.fundAccountHead}>
                <span>
                    <img src="assets/icons/transfer.svg" alt="transfer"/>
                    &nbsp;&nbsp;
                    Հաշվի համալրում
                </span>
                <span>Դրամապանակ №  1001</span>
            </div>
            <p className={'d-flex align-items-center mt-4 mb-3'}>
                <b>Հաշվի մնացորդ </b>
                &nbsp;&nbsp;
                <img src="assets/icons/dram.svg" alt="dram"/>
                &nbsp;
                <b>30000</b>
            </p>
            <div className={styles.selectCardField}>
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-3">
                        <div className="form-group position-relative">
                            <input type="number" className="form-control pl-4" defaultValue={25000}/>
                            <img src="assets/icons/dram.svg" alt="dram"
                                 style={{position: 'absolute', top: '10px', left: '5px'}}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-9">
                        <div className="form-group">
                            <select className={'form-control'}>
                                <option value="1">4000 *** **** **90</option>
                                <option value="2">2000 *** **** **20</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={'d-flex justify-content-end mt-4'}>
                    <button className={`btn ${styles.cancelBtn}`}>Չեղարկել</button>
                    <button className={`btn ${styles.payBtn}`}>Վճարել</button>
                </div>
            </div>
        </div>
    )
}

export default FundAccount