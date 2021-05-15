import React, {useState} from 'react'
import styles from './profile_field.module.css'
import {useDispatch} from "react-redux";
import {
    teacherCreateEducation,
    teacherCreatePhone, teacherCreateVideo,
    teacherCreateWorkExperience
} from "../../../redux/actions/profileAction";

const ProfileModal = ({type, CLOSE_MODAL}) => {
    const [values, setValues] = useState({})
    let dispatch = useDispatch()

    let GET_VALUES = e => {
        values[e.target.name] = e.target.value;
        setValues(values)
    }


    let SEND_EDUCATION_DATA = e => {
        e.preventDefault()
        dispatch(teacherCreateEducation(values))
        document.getElementById('educationField').reset()
        setValues({})
        CLOSE_MODAL(false)
    }

    let SEND_WORK_EXPERIENCE_DATA = e => {
        e.preventDefault()
        dispatch(teacherCreateWorkExperience(values))
        document.getElementById('workField').reset()
        setValues({})
        CLOSE_MODAL(false)
    }

    let SEND_PHONE_DATA = e => {
        e.preventDefault()
        dispatch(teacherCreatePhone(values))
        document.getElementById('phoneField').reset()
        setValues({})
        CLOSE_MODAL(false)
    }

    let SEND_VIDEO_DATA = e => {
        e.preventDefault()
        let newIfram = values.video.split('width=')[0] + 'width="100%" height="300" src=' + values.video.split('src=')[1]
        dispatch(teacherCreateVideo({video: newIfram}))
        document.getElementById('videoField').reset()
        setValues({})
        CLOSE_MODAL(false)
    }

    return (
        <div className={styles.modalWindow}>
            <div className="modal-dialog">
                {
                    type === 'education'
                        ? <form className="modal-content" onChange={GET_VALUES} id={'educationField'}>
                            <div className="modal-header">
                                <h5 className="modal-title">Կրթություն</h5>
                                <button type="button"
                                        className="btn"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="university">Բուհը</label>
                                        <input type="text" className="form-control" name={'university'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Մասնագիտությունը</label>
                                        <input type="text" className="form-control" name={'education'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Ընդունվելու թվականը</label>
                                        <input type="text" className="form-control" name={'start_date'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Ավարտելու թվականը թվականը</label>
                                        <input type="text" className="form-control" name={'end_date'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-secondary"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    Փակել
                                </button>
                                <button type="submit"
                                        className="btn btn-primary"
                                        onClick={SEND_EDUCATION_DATA}
                                >
                                    Պահպանել
                                </button>
                            </div>
                        </form>
                        : null
                }
                {
                    type === 'certificate'
                        ? <form className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Վկայական</h5>
                                <button type="button"
                                        className="btn"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="">Վկայականի նկարը</label>
                                        <input type="file" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-secondary"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    Փակել
                                </button>
                                <button type="button" className="btn btn-primary">Պահպանել</button>
                            </div>
                        </form>
                        : null
                }
                {
                    type === 'work'
                        ? <form className="modal-content" onChange={GET_VALUES} id={'workField'}>
                            <div className="modal-header">
                                <h5 className="modal-title">Աշխատանքային փորձ</h5>
                                <button type="button"
                                        className="btn"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="">Ընկերությունը</label>
                                        <input type="text" className="form-control" name={'company'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Մասնագիտությունը</label>
                                        <input type="text" className="form-control" name={'profession'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Ընդունվելու թվականը</label>
                                        <input type="text" className="form-control" name={'start_date'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Ավարտելու թվականը թվականը</label>
                                        <input type="text" className="form-control" name={'end_date'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-secondary"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    Փակել
                                </button>
                                <button type="submit"
                                        className="btn btn-primary"
                                        onClick={SEND_WORK_EXPERIENCE_DATA}
                                >
                                    Պահպանել
                                </button>
                            </div>
                        </form>
                        : null
                }
                {
                    type === 'phone'
                        ? <form className="modal-content" onChange={GET_VALUES} id={'phoneField'}>
                            <div className="modal-header">
                                <h5 className="modal-title">Հեռախոսահամար</h5>
                                <button type="button"
                                        className="btn"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="">Հեռախոսահամարը</label>
                                        <input type="text" className="form-control" name={'phone'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-secondary"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    Փակել
                                </button>
                                <button type="submit"
                                        className="btn btn-primary"
                                        onClick={SEND_PHONE_DATA}
                                >
                                    Պահպանել
                                </button>
                            </div>
                        </form>
                        : null
                }
                {
                    type === 'by_age'
                        ? <form className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Ընտրել ըստ տարիքի</h5>
                                <button type="button"
                                        className="btn"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="form-group">
                                        <select name="by_age" className="form-control">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-secondary"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    Փակել
                                </button>
                                <button type="button" className="btn btn-primary">Պահպանել</button>
                            </div>
                        </form>
                        : null
                }
                {
                    type === 'language'
                        ? <form className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Դասավանդման լեզուն</h5>
                                <button type="button"
                                        className="btn"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="form-group">
                                        <select name="language" className="form-control">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-secondary"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    Փակել
                                </button>
                                <button type="button" className="btn btn-primary">Պահպանել</button>
                            </div>
                        </form>
                        : null
                }
                {
                    type === 'language_type'
                        ? <form className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Լեզվի տեսակը</h5>
                                <button type="button"
                                        className="btn"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="form-group">
                                        <select name="language" className="form-control">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-secondary"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    Փակել
                                </button>
                                <button type="button" className="btn btn-primary">Պահպանել</button>
                            </div>
                        </form>
                        : null
                }
                {
                    type === 'video'
                        ? <form className="modal-content" onChange={GET_VALUES} id={'videoField'}>
                            <div className="modal-header">
                                <h5 className="modal-title">Հոլովակ</h5>
                                <button type="button"
                                        className="btn"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="">Տեղադրեք Iframe-ը</label>
                                        <textarea style={{resize: 'none', height: '200px'}}
                                                  type="text"
                                                  className="form-control"
                                                  name={'video'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-secondary"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    Փակել
                                </button>
                                <button type="submit"
                                        className="btn btn-primary"
                                        onClick={SEND_VIDEO_DATA}
                                >
                                    Պահպանել
                                </button>
                            </div>
                        </form>
                        : null
                }
            </div>
        </div>
    )
}

export default ProfileModal