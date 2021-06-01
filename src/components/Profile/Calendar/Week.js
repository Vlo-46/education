import React from 'react'

const Week = ({SELECTED_WEEKDAY}) => {
    let weekdays = [
        {id: 1, day: "Երկուշաբթի", name: "monday"},
        {id: 2, day: "Երեքշաբթի", name: "tuesday"},
        {id: 3, day: "Չորեքշաբթի", name: "wednesday"},
        {id: 4, day: "Հինգշաբթի", name: "thursday"},
        {id: 5, day: "Ուրբաթ", name: "friday"},
        {id: 6, day: "Շաբաթ", name: "saturday"},
        {id: 7, day: "Կիրակի", name: "sunday"},
    ]

    return (
        <div className={'mb-3'}>
            <select name="weekday"
                    defaultValue={'default'}
                    className={'form-control'}
                    onChange={e => SELECTED_WEEKDAY(e.target.value)}
            >
                <option value="default" disabled>Ընտրեք շաբաթվա օրը</option>
                {weekdays.map(weekday => (
                    <option value={weekday.name} key={weekday.id}>{weekday.day}</option>
                ))}
            </select>
        </div>
    )
}

export default Week