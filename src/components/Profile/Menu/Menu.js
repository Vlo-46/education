import React from 'react'
import styles from './menu.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeProfileMenu} from "../../../redux/actions/profileAction";

const Menu = ({candidate}) => {
    let menuTabs = useSelector(state => state.profile.menuTabs)
    // let menuTab = useSelector(state => state.profile.menuTab)

    // menuTabs.find(i => {
    //     return i.name === menuTab ? i.active = true : i.active = false
    // })

    let dispatch = useDispatch()

    let CHANGE_FIELD = name => {
        dispatch(changeProfileMenu(name))
    }


    if (candidate.role === 'teacher') {
        return (
            <div className={styles.wrapperBox}>
                <div className={styles.profile}>
                    <div className={styles.imgField}>
                        <img src="assets/images/teacher-2.png" alt=""/>
                    </div>
                    <div className={styles.infoField}>
                        <p>Teacher</p>
                        <span>@english teacher</span>
                    </div>
                </div>
                {
                    menuTabs
                        ? <ul className={styles.menuFields}>
                            {
                                menuTabs['teacher'].map(m => (
                                    <li key={m.id} onClick={() => CHANGE_FIELD(m.name)}>
                                        <div><img src={m.icon} alt={m.name}/></div>
                                        <span style={m.active ? {color: 'blue'} : null}>{m.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        : null
                }
            </div>
        )
    }
    if (candidate.role === 'student') {
        return (
            <div className={styles.wrapperBox}>
                <div className={styles.profile}>
                    <div className={styles.imgField}>
                        <img src="assets/images/teacher-2.png" alt=""/>
                    </div>
                    <div className={styles.infoField}>
                        <p>Student</p>
                        {/*<span>@english teacher</span>*/}
                    </div>
                </div>
                {
                    menuTabs
                        ? <ul className={styles.menuFields}>
                            {
                                menuTabs['student'].map(m => (
                                    <li key={m.id} onClick={() => CHANGE_FIELD(m.name)}>
                                        <div><img src={m.icon} alt={m.name}/></div>
                                        <span style={m.active ? {color: 'blue'} : null}>{m.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        : null
                }
            </div>
        )
    }

}

export default Menu