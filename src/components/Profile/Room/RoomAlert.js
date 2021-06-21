import React, {useState} from 'react'
import Swal from "sweetalert2";
import {Link} from 'react-router-dom'
import styles from './room.module.css'
const shortid = require('shortid');

const RoomAlert = ({CLOSE_MODAL}) => {
    const [roomId, setRoomId] = useState(shortid.generate())
    let url = window.location.origin

    let fullLink = `${url}/profile/video-chat/${roomId}`

    let COPY_LINK = () => {
        navigator.clipboard.writeText(fullLink)
        Swal.fire({
            icon: 'success',
            title: 'Text copied',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className={`${styles.modalWindow}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ձեր սենյակի ID-ն</h5>
                    </div>
                    <div className="modal-body">
                        <div className={'mt-2 mb-2'}>
                            <div className="form-group mb-2 d-flex">
                                <input type="text"
                                       className="form-control"
                                       name={'id'}
                                       defaultValue={fullLink}
                                />
                                <button className="btn btn-outline-primary" onClick={COPY_LINK}>
                                    <i className="fa fa-copy"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => CLOSE_MODAL(false)}
                        >
                            Փակել
                        </button>
                        <Link className="btn btn-primary"
                              to={`/profile/video-chat/${roomId}`}
                        >
                            Մուտք
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomAlert