import React from 'react'
import styles from './profile_layout.module.css'
import Menu from "../components/Profile/Menu/Menu";
import MsgField from "../components/Profile/MsgField/MsgField";
import {useSelector} from "react-redux";

// import {NotificationContainer, NotificationManager} from 'react-notifications';
// import 'react-notifications/lib/notifications.css';

const ProfileLayout = ({currentComponent, candidate}) => {
    let windowMessageField = useSelector(state => state.profile.windowMessageField)

    // let createNotification = (type) => {
    //     console.log(type)
    //     return () => {
    //         switch (type) {
    //             case 'info':
    //                 NotificationManager.info('Info message');
    //                 break;
    //             case 'success':
    //                 NotificationManager.success('Success message', 'Title here');
    //                 break;
    //             case 'warning':
    //                 NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
    //                 break;
    //             case 'error':
    //                 NotificationManager.error('Error message', 'Click me!', 5000, () => {
    //                     alert('callback');
    //                 });
    //                 break;
    //         }
    //     };
    // };

    return (
        <div style={{backgroundColor: '#FAFAFB'}}>
            <div className={styles.container}>
                <div className={styles.menuBar}
                     style={{boxShadow: '0 0 5px 0 #ccc'}}
                >
                    <Menu candidate={candidate}/>
                </div>
                <div className={styles.profileContent}>
                    {currentComponent}
                    {/*<NotificationContainer/>*/}
                </div>
                {
                    windowMessageField
                        ? <MsgField user={windowMessageField}/>
                        : null
                }
            </div>
        </div>
    )
}
export default ProfileLayout