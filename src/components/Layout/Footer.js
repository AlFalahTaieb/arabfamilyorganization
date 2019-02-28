import React from 'react'

import './Footer.css'





const Footer = (props) => {


    return (
        <main>
            <footer className="page-footer blue darken-4">

                <div className="container">
                    <div className="row">

                        <div className="col l6 s12">
                            <h5 class="white-text">تواصل معنا</h5>
                            <ul>


                                {/* <li><a className="grey-text text-lighten-3" href="#!">فيسبوك</a><a className="fab fa-facebook-f"></a></li>

                            <li><a className="grey-text text-lighten-3" href="#!">تويتر</a> <a className="fab fa-twitter"></a></li> */}

                                <li><a href='https://twitter.com/arabfamilyorg?lang=en' className='btn-floating btn-small indigo darken-4'>
                                    <i className='fab fa-twitter'></i>
                                </a></li>

                                <li><a href='https://www.facebook.com/arabfamilyorganization.ae/' className='btn-floating btn-small indigo darken-4'>
                                    <i className='fab fa-facebook-f'></i>
                                </a></li>
                                <li><a className="grey-text text-lighten-3" href={"tel:" + "0097165561444"}>اتصل الان</a> ☎️</li>

                                <li><a className="grey-text text-lighten-3" href={"mailto:" + "info@arabfamilyorganization.ae"}>   البريد الإلكتروني</a> 📧</li>

                            </ul>

                        </div>
                        <div className="col l4 offset-l2 s12">

                            <h5 className="white-text">من نحن</h5>
                            <ul>


                                <li><a className="grey-text text-lighten-3" href="#!">من نحن</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">الأحكام والشروط </a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">سياسة ملفات تعريف الارتباط</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">بيانات صحفية</a></li>
                           
                            </ul>
                            <p className="grey-text text-darrken-4">جميع الحقوق محفوظة  2019  منظمة الأسرة العربية</p>
                        </div>
                    </div>
                </div>

       
            </footer>
        </main>
    )
}

export default Footer
