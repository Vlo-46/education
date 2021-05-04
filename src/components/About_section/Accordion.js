import React, {useState} from 'react'
import styles from './about_section.module.css'

const Accordion = ({item}) => {
    let [collapsed, setCollapsed] = useState(false)

    let collapseAccordion = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true)
    }

    let transformStyle = {
        transform: "rotate(90deg)",
        transition: "0.5s"
    }

    return (
        <div className="accordion-item mb-2"
             data-aos="fade-up"
             data-aos-anchor-placement="center-bottom"
        >
            <div className="accordion-header" id={`${item.title}-${item.id}`}>
                <button className={`accordion-button ${styles.accordion}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.title.replace(' ', '')}`}
                        aria-expanded="false"
                        aria-controls={`${item.title.replace(' ', '')}`}
                        onClick={collapseAccordion}
                >
                    {item.title}
                    <span className={styles.arrow}>
                        <img src="assets/icons/arrow-right.png" alt="arrow" style={collapsed ? transformStyle : null}/>
                    </span>
                </button>
            </div>
            <div id={`${item.title.replace(' ', '')}`}
                 className="accordion-collapse collapse"
                 aria-labelledby={`${item.title}-${item.id}`}
            >
                <div className="accordion-body p-2">
                    {item.description}
                </div>
            </div>
        </div>
    )
}

export default Accordion