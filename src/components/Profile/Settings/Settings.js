import React, {useState} from 'react'
import './switch.css'
import styles from './settings.module.css'
import SettingsModal from "./SettingsModal";


const Settings = () => {
    const [openModal, setOpenModal] = useState(null)
    const [modalType, setModalType] = useState(null)

    let OPEN_MODAL = type => {
        setModalType(type)
        setOpenModal(true)
    }

    let CLOSE_MODAL = bool => {
        setOpenModal(bool)
    }


    return (
        <div className={'p-4'}>
            {
                openModal
                    ? <SettingsModal CLOSE_MODAL={CLOSE_MODAL} type={modalType}/>
                    : null
            }
            <p style={{fontSize: '18px', color: '#061358'}}>Կարգավորումներ</p>
            <div className="settings_box table-responsive">
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <th>Փոխել գաղտնաբառը</th>
                        <td>
                            Գաղտնաբառը պետք է պարունակի առնվազն 8 սիմվոլ Մեցատառեր և թվանշաններ
                        </td>
                        <td><span className={styles.btn} onClick={() => OPEN_MODAL('password')}>Փոխել</span></td>
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
                        <td><span className={styles.btn} onClick={() => OPEN_MODAL('account')}>Ջնջել</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Settings