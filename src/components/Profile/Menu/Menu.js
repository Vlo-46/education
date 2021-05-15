import React, {useState, useEffect} from 'react'
import styles from './menu.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeProfileMenu} from "../../../redux/actions/profileAction";
import axios from "axios";
import keys from "../../../keys";

const Menu = ({candidate}) => {
    let menuTabs = useSelector(state => state.profile.menuTabs)
    // let menuTab = useSelector(state => state.profile.menuTab)

    // menuTabs.find(i => {
    //     return i.name === menuTab ? i.active = true : i.active = false
    // })
    const [teacherProfession, setTeacherProfession] = useState(null)

    let dispatch = useDispatch()

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem(keys.AUTH))
        axios.get(`${keys.BACKEND_URI}/subject/get_single_subject`, {
            params: {id: candidate.id},
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then(res => {
                setTeacherProfession(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [dispatch, candidate.id])

    let CHANGE_FIELD = name => {
        dispatch(changeProfileMenu(name))
    }


    if (candidate.role === 'teacher') {
        return (
            <div className={styles.wrapperBox}>
                <div className={styles.profile}>
                    <div className={styles.imgField}>
                        {
                            candidate.image
                                ? <img src={candidate.image} alt={candidate.name}/>
                                : <img src="assets/images/no-photo.png" alt={candidate.name}/>
                        }

                    </div>
                    <div className={styles.infoField}>
                        <p>{candidate.name}</p>
                        {
                            teacherProfession
                                ? <span>@{teacherProfession.name}</span>
                                : null
                        }

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
                        {
                            candidate.image
                                ? <img src={candidate.image} alt={candidate.name}/>
                                : <img src="assets/images/no-photo.png" alt={candidate.name}/>
                        }
                    </div>
                    <div className={styles.infoField}>
                        <p>{candidate.name}</p>
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