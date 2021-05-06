import React from 'react'
import './switch.css'
import styles from './settings.module.css'

const Settings = () => {
    return (
        <div className={'p-4'}>
            <p style={{fontSize: '18px', color: '#061358'}}>Ուսանողներ</p>
            <div className="settings_box table-responsive">
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <th>Փոխել գաղտնաբառը</th>
                        <td>
                            Գաղտնաբառը պետք է պարունակի առնվազն 8 սիմվոլ Մեցատառեր և թվանշաններ
                        </td>
                        <td><span className={styles.btn}>Փոխել</span></td>
                    </tr>
                    <tr>
                        <th>Ձայն</th>
                        <td>Ձայնը անջատելու դեպքում ․․․․․</td>
                        <td>
                            <div className="md-switch sm">
                                <input type="checkbox" id="notification" name="notification"
                                       className="md-toggle md-toggle-round"/>
                                <label htmlFor="notification"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Ջնջել հաշիվը</th>
                        <td>
                            Հաշիվը ջնջելու դեպքում ձեր տվյալները ամբողջությամբ կհեռացվեն․․․․․․․․․․․․․․․․․
                        </td>
                        <td><span className={styles.btn}>Ջնջել</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Settings