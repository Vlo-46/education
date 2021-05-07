import {CHANGE_PROFILE_MENU, DELETE_MESSAGE, GET_CANDIDATE, GET_MESSAGES, SEND_MESSAGE} from "../types";

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
    messages: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PROFILE_MENU:
            return {...state, menuTab: action.payload}
        case GET_CANDIDATE:
            return {...state, candidate: action.payload}
        case GET_MESSAGES:
            return {...state, messages: action.payload}
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, {...action.payload}]}
        case DELETE_MESSAGE:
            return {...state, messages: state.messages.filter(i => i.id !== action.payload)}
        default:
            return state
    }
}