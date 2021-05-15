import React, {useState} from 'react'
import Layout from "../layout/Layout";
import Condition1 from "../components/Conditions/Condition_1";
import Condition2 from "../components/Conditions/Condition_2";
import Condition3 from "../components/Conditions/Condition_3";
import Condition4 from "../components/Conditions/Condition_4";
import Condition5 from "../components/Conditions/Condition_5";

import styles from '../components/Conditions/condition.module.css'

const Conditions = () => {
    const [component, setComponent] = useState(<Condition1/>)
    let conditions = [
        {id: 1, name: 'Գաղտնիության քաղաքականություն 1'},
        {id: 2, name: 'Գաղտնիության քաղաքականություն 2'},
        {id: 3, name: 'Գաղտնիության քաղաքականություն 3'},
        {id: 4, name: 'Գաղտնիության քաղաքականություն 4'},
        {id: 5, name: 'Գաղտնիության քաղաքականություն 5'},
    ]

    let currentComponent = id => {
        switch (id) {
            case 1:
                return setComponent(<Condition1/>)
            case 2:
                return setComponent(<Condition2/>)
            case 3:
                return setComponent(<Condition3/>)
            case 4:
                return setComponent(<Condition4/>)
            case 5:
                return setComponent(<Condition5/>)
            default:
                return setComponent(<Condition1/>)
        }
    }

    return (
        <Layout>
            <div className={'conditions'} style={{margin: '0 140px'}}>
                <div className="row mt-5 mb-5">
                    <div className="col-md-3">
                        <ul className={styles.menuBar}>
                            {
                                conditions.map(c => (
                                    <li key={c.id}
                                        onClick={() => currentComponent(c.id)}
                                        className={styles.menuItem}
                                    >
                                        <span>{c.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-9">
                        {component}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Conditions