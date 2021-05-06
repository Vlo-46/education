import React from 'react'
import styles from './messages.module.css'

const SearchMsg = () => {
    return (
        <div className={'form-group position-relative'}>
            <input type="text"
                   className="form-control"
                   placeholder={'Արագ որոնում'}
            />
            <i className={`fa fa-search ${styles.searchBtn}`}/>
        </div>
    )
}

export default SearchMsg