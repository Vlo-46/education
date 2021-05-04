import React from 'react'
import styles from './about_page.module.css'

const AboutPageSection2 = () => {
    return (
        <section className='p-5'>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6" data-aos="zoom-in-right">
                    <div className={`${styles.section_1_imgField} p-5`}>
                        <img
                            src="https://thumbs.dreamstime.com/b/d-modern-business-office-interior-render-161327610.jpg"
                            className={styles.wrapperImg2}
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={`${styles.section_1_info} p-5`}>
                        <p className={styles.title}>Նպատակներին հասնել</p>
                        <p className={styles.subTitle}>Մասնակցեք առցանց դասընթացների
                            Փորձառու մասնագետների հետ</p>
                        <p className={styles.description}>
                            Մեր առաքելությունն է ապահովել բոլորին հասանելի առցանց դասընթացներ Մեր առաքելությունն է
                            ապահովել բոլորին հասանելի առցանց դասընթացներ Մեր առաքելությունն է ապահովել բոլորին հասանելի
                            առցանց դասընթացներ Մեր առաքելությունն է ապահովել բոլորին հասանելի առցանց դասընթացներ:
                            Մեր առաքելությունն է ապահովել բոլորին հասանելի առցանց դասընթացներ Մեր առաքելությունն է
                            ապահովել բոլորին հասանելի առցանց դասընթացներ Մեր առաքելությունն է ապահովել բոլորին հասանելի
                            առցանց դասընթացներ Մեր առաքելությունն է ապահովել բոլորին հասանելի առցանց դասընթացներ:
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPageSection2