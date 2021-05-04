import React from 'react'
import styles from './notifications.module.css'

const SearchStudents = () => {
    return (
        <div style={{position: 'absolute', bottom: '0px'}}>
            <div className="form-group" style={{position: 'relative'}}>
                <input type="text"
                       className={`form-control pl-5 `}
                       name={'search'}
                       // placeholder={'Որոնում'}
                       style={{border: '1px solid #f5f5f5'}}
                />
                <i className={`${styles.inputLeftIcon} fa fa-search`}/>
            </div>
        </div>

    )
}

export default SearchStudents