import React from 'react'
import styles from './notifications.module.css'

const NotificationModal = ({CLOSE_MODAL, lessons}) => {
    return (
        <div className={styles.modalWindow}>
            <div className="modal-dialog">
                <div className={styles.modalContent} id={'accountField'}>
                    <div className="modal-header">
                        <h5 className="modal-title">Նախընտրած օրերը</h5>
                        <button type="button"
                                className="btn"
                                onClick={() => CLOSE_MODAL(null)}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">ԵՐԿ․</th>
                                <th scope="col">ԵՐՔ․</th>
                                <th scope="col">ՉՐՔ․</th>
                                <th scope="col">ՀՆԳ․</th>
                                <th scope="col">ՈւՐԲ․</th>
                                <th scope="col">ՇԲԹ․</th>
                                <th scope="col">ԿԻՐ․</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                {
                                    <td>
                                        {
                                            lessons.map((lesson, index) => (
                                                lesson.weekday === 'monday'
                                                    ?
                                                    <p key={index}>
                                                        <b className={'text-dark'}>{index + 1}.&nbsp;</b>
                                                        <small>{lesson.start_time}&nbsp;{lesson.end_time}</small>
                                                    </p>
                                                    : null
                                            ))
                                        }
                                    </td>
                                }
                                {
                                    <td>
                                        {
                                            lessons.map((lesson, index) => (
                                                lesson.weekday === 'tuesday'
                                                    ?
                                                    <p key={index}>
                                                        <b className={'text-dark'}>{index + 1}.&nbsp;</b>
                                                        <small>{lesson.start_time}&nbsp;{lesson.end_time}</small>
                                                    </p>
                                                    : null
                                            ))
                                        }
                                    </td>
                                }
                                {
                                    <td>
                                        {
                                            lessons.map((lesson, index) => (
                                                lesson.weekday === 'wednesday'
                                                    ?
                                                    <p key={index}>
                                                        <b className={'text-dark'}>{index + 1}.&nbsp;</b>
                                                        <small>{lesson.start_time}&nbsp;{lesson.end_time}</small>
                                                    </p>
                                                    : null
                                            ))
                                        }
                                    </td>
                                }
                                {
                                    <td>
                                        {
                                            lessons.map((lesson, index) => (
                                                lesson.weekday === 'thursday'
                                                    ?
                                                    <p key={index}>
                                                        <b className={'text-dark'}>{index + 1}.&nbsp;</b>
                                                        <small>{lesson.start_time}&nbsp;{lesson.end_time}</small>
                                                    </p>
                                                    : null
                                            ))
                                        }
                                    </td>
                                }
                                {
                                    <td>
                                        {
                                            lessons.map((lesson, index) => (
                                                lesson.weekday === 'friday'
                                                    ?
                                                    <p key={index}>
                                                        <b className={'text-dark'}>{index + 1}.&nbsp;</b>
                                                        <small>{lesson.start_time}&nbsp;{lesson.end_time}</small>
                                                    </p>
                                                    : null
                                            ))
                                        }
                                    </td>
                                }
                                {
                                    <td>
                                        {
                                            lessons.map((lesson, index) => (
                                                lesson.weekday === 'saturday'
                                                    ?
                                                    <p key={index}>
                                                        <b className={'text-dark'}>{index + 1}.&nbsp;</b>
                                                        <small>{lesson.start_time}&nbsp;{lesson.end_time}</small>
                                                    </p>
                                                    : null
                                            ))
                                        }
                                    </td>
                                }
                                {
                                    <td>
                                        {
                                            lessons.map((lesson, index) => (
                                                lesson.weekday === 'sunday'
                                                    ? <p key={index}>
                                                        <b className={'text-dark'}>{index + 1}.&nbsp;</b>
                                                        <small>{lesson.start_time}&nbsp;{lesson.end_time}</small>
                                                    </p>
                                                    : null
                                            ))
                                        }
                                    </td>
                                }
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                                className="btn btn-secondary"
                                onClick={() => CLOSE_MODAL(null)}
                        >
                            Փակել
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationModal