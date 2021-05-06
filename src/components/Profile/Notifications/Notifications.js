import React from 'react';
import styles from './notifications.module.css';
import OnlineStudent from "./OnlineStudent";
import Notification from "./Notification";
import NotificationPagination from "./NotificationPagination";
import SearchStudents from "./SearchStudents";

const Notifications = () => {
    let onlineStudents = [
        {id: 1, username: 'Սոնա Սիմոնյան', image: 'assets/images/teacher-1.png'},
        {id: 2, username: 'Նարեկ Խաչատրյան', image: 'assets/images/teacher-2.png'},
        {id: 3, username: 'Աննա Կարապետյան', image: 'assets/images/teacher-1.png'},
    ]

    let notifications = [
        {
            id: 1,
            image: 'assets/images/teacher-1.png',
            username: 'Սոնա Սիմոնյան',
            description: 'Դուք ունեք անհատական դասընթացի նոր հայտ,Սոնան ցանկանում է միանալ Ձեր առաջին փորձնական դասին',
            sended_at: '16:30',
            checked: false,
        },
        {
            id: 2,
            image: 'assets/images/teacher-2.png',
            username: 'Նարեկ Խաչատրյան',
            description: 'Դուք ունեք անհատական դասընթացի նոր հայտ,Նարեկն ցանկանում է միանալ Ձեր առաջին փորձնական դասին',
            sended_at: '12:50',
            checked: true,
        },
        {
            id: 3,
            image: 'assets/images/teacher-1.png',
            username: 'Կարինե Գեղամյան',
            description: 'Դուք ունեք անհատական դասընթացի նոր հայտ,Կարինեն ցանկանում է միանալ Ձեր առաջին փորձնական դասին',
            sended_at: '10:09',
            checked: false,
        },
        {
            id: 4,
            image: 'assets/images/teacher-2.png',
            username: 'Վասպուրական Բաբկենյան',
            description: 'Դուք ունեք անհատական դասընթացի նոր հայտ,Վասպուրականն ցանկանում է միանալ Ձեր առաջին փորձնական դասին',
            sended_at: '21:00',
            checked: true,
        },
        {
            id: 5,
            image: 'assets/images/teacher-1.png',
            username: 'Տաթևիկ Բալյան',
            description: 'Դուք ունեք անհատական դասընթացի նոր հայտ,Տաթևիկն ցանկանում է միանալ Ձեր առաջին փորձնական դասին',
            sended_at: '18:38',
            checked: false,
        },
        {
            id: 6,
            image: 'assets/images/teacher-2.png',
            username: 'Վարազդատ Ուրումյան',
            description: 'Դուք ունեք անհատական դասընթացի նոր հայտ,Վարազդատն ցանկանում է միանալ Ձեր առաջին փորձնական դասին',
            sended_at: '07:40',
            checked: true,
        },
        {
            id: 7,
            image: 'assets/images/teacher-1.png',
            username: 'Գիսանե Ակունց',
            description: 'Դուք ունեք անհատական դասընթացի նոր հայտ,Գիսանեն ցանկանում է միանալ Ձեր առաջին փորձնական դասին',
            sended_at: '20:45',
            checked: false,
        },
    ]

    return (
        <>
            <div className={'row'}>
                <div className="col-md-9 bg-light pt-5">
                    <p className={styles.notTitle}>Ծանուցումներ</p>
                    <div className={styles.notificationsField}>
                        {
                            notifications.map(notification => <Notification key={notification.id}
                                                                            notification={notification}/>)
                        }
                    </div>
                    <NotificationPagination/>
                </div>
                <div className="col-md-3 bg-white position-relative p-3" style={{boxShadow: '0 0 5px 0 #ccc'}}>
                    <p className={styles.chatTitle}>Ուսանողներ</p>
                    <div className={`${styles.onlineStudentsField}`}>
                        {
                            onlineStudents.map(student => <OnlineStudent student={student} key={student.id}/>)
                        }
                    </div>
                    <SearchStudents/>
                </div>
            </div>
        </>
    )
}

export default Notifications