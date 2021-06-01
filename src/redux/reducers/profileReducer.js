import {
    ALL_FREE_TIMES,
    CHANGE_PROFILE_MENU, CHECK_NOTIFICATION, CREATE_FREE_TIME, DELETE_CREATED_FREE_TIME,
    DELETE_MESSAGE,
    GET_CANDIDATE,
    GET_MESSAGES,
    GET_TEACHER, SAVE_CREATED_TIMES,
    SEND_MESSAGE,
    TEACHER_CREATE_EDUCATION,
    TEACHER_CREATE_PHONE, TEACHER_CREATE_VIDEO,
    TEACHER_CREATE_WORK_EXPERIENCE,
    TEACHER_DELETE_EDUCATION, TEACHER_DELETE_PHONE, TEACHER_DELETE_VIDEO,
    TEACHER_DELETE_WORK_EXPERIENCE
} from "../types";

const initialState = {
    menuTabs: {
        teacher: [
            {id: 1, title: 'Վահանակ', name: 'panel', active: false, icon: 'assets/icons/panel.svg'},
            {id: 2, title: 'Ծանուցումներ', name: 'notifications', active: false, icon: 'assets/icons/alarm.svg'},
            {id: 3, title: 'Դասասենյակ', name: 'room', active: false, icon: 'assets/icons/chat.svg'},
            {id: 4, title: 'Նամակներ', name: 'messages', active: false, icon: 'assets/icons/message.svg'},
            {id: 10, title: 'Պրոֆիլ', name: 'profile', active: false, icon: 'assets/icons/menu-profile.svg'},
            {id: 5, title: 'Ուսանողներ', name: 'students', active: false, icon: 'assets/icons/students.svg'},
            {id: 6, title: 'Վարկանիշ', name: 'ratings', active: false, icon: 'assets/icons/favorite.svg'},
            {id: 7, title: 'Օրացույց', name: 'calendar', active: false, icon: 'assets/icons/calendar.svg'},
            {id: 8, title: 'Հաշիվ', name: 'summery', active: false, icon: 'assets/icons/summary.svg'},
            {id: 9, title: 'Կարգավորումներ', name: 'settings', active: false, icon: 'assets/icons/settings.svg'},
        ],
        student: [
            {id: 1, title: 'Վահանակ', name: 'panel', active: false, icon: 'assets/icons/panel.svg'},
            {id: 2, title: 'Ծանուցումներ', name: 'notifications', active: false, icon: 'assets/icons/alarm.svg'},
            {id: 4, title: 'Նամակներ', name: 'messages', active: false, icon: 'assets/icons/message.svg'},
            {id: 10, title: 'Պրոֆիլ', name: 'profile', active: false, icon: 'assets/icons/menu-profile.svg'},
            {id: 8, title: 'Հաշիվ', name: 'summery', active: false, icon: 'assets/icons/summary.svg'},
            {id: 9, title: 'Կարգավորումներ', name: 'settings', active: false, icon: 'assets/icons/settings.svg'},
        ]
    },
    menuTab: 'panel',
    candidate: null,
    messages: [],
    teacherReview: [],
    teacherEducation: [],
    teacherCertificate: [],
    teacherWorkExperience: [],
    teacherLanguageOfInstruction: null,
    teacherAddress: null,
    teacherPhone: [],
    teacherVideo: [],
    notification: [],
    freeHours: {}
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PROFILE_MENU:
            return {...state, menuTab: action.payload}
        case GET_CANDIDATE:
            return {
                ...state,
                candidate: action.payload,
                teacherReview: action.payload['Teacher_reviews'],
                teacherEducation: action.payload['Teacher_educations'],
                teacherCertificate: action.payload['Teacher_certificates'],
                teacherWorkExperience: action.payload['Teacher_work_experiences'],
                teacherLanguageOfInstruction: action.payload['Teacher_language_of_instructions'],
                teacherAddress: action.payload['TeacherAddresses'],
                teacherPhone: action.payload['Teacher_phones'],
                teacherVideo: action.payload['Teacher_videos'],
                notification: action.payload['Notifications']
            }
        case GET_MESSAGES:
            return {...state, messages: action.payload}
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, {...action.payload}]}
        case DELETE_MESSAGE:
            return {...state, messages: state.messages.filter(i => i.id !== action.payload)}
        case GET_TEACHER:
            return {...state, teacher: action.payload}
        case TEACHER_CREATE_EDUCATION:
            return {...state, teacherEducation: [...state.teacherEducation, {...action.payload}]}
        case TEACHER_DELETE_EDUCATION:
            return {...state, teacherEducation: state.teacherEducation.filter(i => i.id !== action.payload)}
        case TEACHER_CREATE_WORK_EXPERIENCE:
            return {...state, teacherWorkExperience: [...state.teacherWorkExperience, {...action.payload}]}
        case TEACHER_DELETE_WORK_EXPERIENCE:
            return {...state, teacherWorkExperience: state.teacherWorkExperience.filter(i => i.id !== action.payload)}
        case TEACHER_CREATE_PHONE:
            return {...state, teacherPhone: [...state.teacherPhone, {...action.payload}]}
        case TEACHER_DELETE_PHONE:
            return {...state, teacherPhone: state.teacherPhone.filter(i => i.id !== action.payload)}
        case TEACHER_CREATE_VIDEO:
            return {...state, teacherVideo: [...state.teacherVideo, {...action.payload}]}
        case TEACHER_DELETE_VIDEO:
            return {...state, teacherVideo: state.teacherVideo.filter(i => i.id !== action.payload)}
        case CHECK_NOTIFICATION:
            let notItem = state.notification.filter(i => i.id === action.payload.notification_id)[0]
            notItem.status = action.payload.status
            state.notification.filter(i => i.id !== action.payload.notification_id)
            return {...state, notification: [...state.notification, {...notItem}]}
        case ALL_FREE_TIMES:
            return {...state, freeHours: action.payload}
        case CREATE_FREE_TIME:
            let obj = state.freeHours
            if (action.payload.weekday in obj) {
                obj[action.payload.weekday].push(action.payload)
            } else {
                obj[action.payload.weekday] = []
                obj[action.payload.weekday].push(action.payload)
            }
            return {
                ...state,
                freeHours: obj
            }
        case DELETE_CREATED_FREE_TIME:
            let todo = state.freeHours
            todo[action.payload.day].filter(i => i.id !== action.payload.id)
            return {
                ...state,
                freeHours: todo
            }
        case SAVE_CREATED_TIMES:
            return {...state, freeTimes: action.payload}
        default:
            return state
    }
}