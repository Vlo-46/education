import React from 'react'
import styles from './footer.module.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#000D83'}} className={`p-5 text-white ${styles.footer}`}>
            <div className="container">
                <div className="row">
                    <div className="col sm-12 col-md-6 col-lg-3 p-1">
                        <svg id="logo_edu" className="navbar_webSiteLogo__1vi1P" data-name="logo edu"
                             xmlns="http://www.w3.org/2000/svg" width="85.95" height="62.823"
                             viewBox="0 0 85.95 62.823">
                            <path id="Контур_786" data-name="Контур 786"
                                  d="M422.927,473.906h-.079l-2.185,1.571-2.125-1.356L403.61,465l.262,10.94c0,2.409,7.373,6.5,16.479,6.5a30.525,30.525,0,0,0,3.546-.206v-1.454a32.784,32.784,0,0,0-.9-6.583C422.971,474.088,422.947,474,422.927,473.906Z"
                                  transform="translate(-376.776 -436.798)" fill="#262d3d"></path>
                            <path id="Контур_787" data-name="Контур 787"
                                  d="M523.22,475.4c0,2.255,0,3.241,1.252,8.843,6.4-1.229,11.458-4.287,11.458-6.151l.3-10.494Z"
                                  transform="translate(-475.876 -438.952)" fill="#262d3d"></path>
                            <path id="Контур_788" data-name="Контур 788"
                                  d="M315.136,381h0a8.743,8.743,0,0,0,.171,5.99l31.313,19.68.074-6.578Z"
                                  transform="translate(-303.119 -367.201)" fill="#3c405c"></path>
                            <path id="Контур_789" data-name="Контур 789"
                                  d="M531.5,386.54l-.727.288h0l-.024.014-.225.089v.048l-29.482,17.73-.415,3.848.171-.108v.67l30.572-18.884A8.926,8.926,0,0,1,531.5,386.54Z"
                                  transform="translate(-457.159 -371.791)" fill="#b1becf"></path>
                            <path id="Контур_790" data-name="Контур 790"
                                  d="M133.191,13.793,101.63,32.918,70.07,13.793,101.63,0Z"
                                  transform="translate(-58.055)" fill="#2f394d"></path>
                            <path id="Контур_791" data-name="Контур 791"
                                  d="M499.439,405.264a11.449,11.449,0,0,1,.23-4.57l30.8-18.836V381l-31.551,19.119a12.084,12.084,0,0,0-.079,6.555l31.532-19.8v-.857Z"
                                  transform="translate(-455.331 -367.201)" fill="#9398b3"></path>
                            <path id="Контур_792" data-name="Контур 792" d="M260.35,209.24l.329.629.616-.381Z"
                                  transform="translate(-215.707 -173.361)" fill="#414042" opacity="0.7"></path>
                            <path id="Контур_793" data-name="Контур 793"
                                  d="M511.836,515.418v-5.367c0-7.756-2.21-8.231-2.21-8.231l-2.155,1.372s2.174.2,2.174,8.231v5.266l1.262-1.886Z"
                                  transform="translate(-462.827 -467.304)" fill="#6f81c7"></path>
                            <path id="Контур_794" data-name="Контур 794"
                                  d="M253.513,624.612v1.528H247.12v-8.25h6.24v1.533h-4.342v1.792h3.834v1.5h-3.834v1.91Z"
                                  transform="translate(-247.12 -563.471)" fill="#262d3d"></path>
                            <path id="Контур_795" data-name="Контур 795"
                                  d="M302.9,617.89h3.752c2.7,0,4.553,1.627,4.553,4.127s-1.852,4.122-4.553,4.122H302.9Zm3.658,6.688a2.567,2.567,0,1,0,0-5.125h-1.746v5.12Z"
                                  transform="translate(-293.335 -563.471)" fill="#262d3d"></path>
                            <path id="Контур_796" data-name="Контур 796"
                                  d="M368.94,622.48v-4.63h1.91V622.4c0,1.569.686,2.217,1.84,2.217s1.84-.648,1.84-2.217v-4.546h1.886v4.63a3.738,3.738,0,1,1-7.476-.007Z"
                                  transform="translate(-348.051 -563.438)" fill="#262d3d"></path>
                            <path id="Контур_797" data-name="Контур 797"
                                  d="M430.16,621.37a4.545,4.545,0,0,1,7.878-2.807l-1.226,1.132a2.658,2.658,0,0,0-2.077-.967,2.642,2.642,0,0,0,0,5.285,2.632,2.632,0,0,0,2.085-.986l1.226,1.132a4.544,4.544,0,0,1-7.886-2.788Z"
                                  transform="translate(-398.773 -562.816)" fill="#262d3d"></path>
                            <path id="Контур_798" data-name="Контур 798"
                                  d="M492.466,624.344h-3.838l-.73,1.763H485.94l3.68-8.256h1.886l3.694,8.256h-2.006Zm-.6-1.451-1.308-3.162-1.31,3.162Z"
                                  transform="translate(-444.988 -563.438)" fill="#262d3d"></path>
                            <path id="Контур_799" data-name="Контур 799"
                                  d="M549.392,619.477H546.75V617.92h7.2v1.557H551.3v6.688h-1.91Z"
                                  transform="translate(-495.371 -563.496)" fill="#262d3d"></path>
                            <path id="Контур_800" data-name="Контур 800" d="M604.32,617.89h1.91v8.25h-1.91Z"
                                  transform="translate(-543.069 -563.471)" fill="#262d3d"></path>
                            <path id="Контур_801" data-name="Контур 801"
                                  d="M633.48,621.37a4.525,4.525,0,1,1,4.518,4.27A4.273,4.273,0,0,1,633.48,621.37Zm7.1,0A2.583,2.583,0,1,0,638,624.012,2.518,2.518,0,0,0,640.581,621.37Z"
                                  transform="translate(-567.229 -562.816)" fill="#262d3d"></path>
                            <path id="Контур_802" data-name="Контур 802"
                                  d="M711.781,617.89v8.25h-1.569l-4.115-5.014v5.014H704.21v-8.25h1.581L709.9,622.9V617.89Z"
                                  transform="translate(-625.831 -563.471)" fill="#262d3d"></path>
                        </svg>
                        <p className='pt-3 pb-3'>
                            Անվճար գիտական ռեսուրսներ մանկավարժների և ծնողների համար: Հեռավար կրթությունը ավելի անվտանգ
                            է մեր օրերում:
                        </p>
                        <div className='d-flex justify-content-around'>
                            <img src="assets/icons/facebook.png" alt="" className={styles.social_icon}/>
                            <img src="assets/icons/instagram.png" alt="" className={styles.social_icon}/>
                            <img src="assets/icons/telegram.png" alt="" className={styles.social_icon}/>
                        </div>
                    </div>
                    <div className="col sm-12 col-md-6 col-lg-3">
                        <span>Բաժիններ</span>
                        <div className={styles.bottomBorder}/>
                        <ul>
                            <li><Link to='/'>Գլխավոր</Link></li>
                            <li><Link to='/courses'>Դասընթացներ</Link></li>
                            <li><Link to='/'>Մասնագետներ</Link></li>
                        </ul>
                    </div>
                    <div className="col sm-12 col-md-6 col-lg-3">
                        <span>Օգտակար հղումներ</span>
                        <div className={styles.bottomBorder}/>
                        <ul>
                            <li><Link to='/login'>Մուտք</Link></li>
                            <li><Link to='/'>Մեր առավելությունները</Link></li>
                            <li><Link to='/'>Լավագույն դասախոսներ</Link></li>
                            <li><Link to='/conditions'>Պայմաններ</Link></li>
                        </ul>
                    </div>
                    <div className="col sm-12 col-md-6 col-lg-3">
                        <span>Կապ</span>
                        <div className={styles.bottomBorder}/>
                        <div className="form-group position-relative">
                            <input type="text"
                                   className={`form-control ${styles.input}`}
                                   placeholder={'Ուղարկել էլ հասցե'}
                            />
                            <i className={`fa fa-send ${styles.sendBtn}`}/>
                        </div>
                        <ul>
                            <li><Link to='/'><i className="fa fa-phone"/>&nbsp;&nbsp;+37477123456</Link></li>
                            <li><Link to='/'><i className="fa fa-map-marker"/>&nbsp;&nbsp;19 Իսակով</Link></li>
                            <li><Link to='/'><i className="fa fa-envelope"/>&nbsp;&nbsp;example@gmail.com</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer