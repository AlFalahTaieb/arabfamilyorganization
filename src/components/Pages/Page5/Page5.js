import React, { Component } from 'react'

import './Page5.css'

class Page5 extends Component {

    constructor(props) {


        super(props)
        this.state = {
            family1: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551287618/1.jpg',

        }


    }

    render() {
        let heading = 'العضوية'

        /*TITLE */

        let colaps1 = 'حول العضوية'
        let colaps2 = 'الاشتراك / عضوية المنظمة'
        let colaps3 = 'رسوم الاشتراك السنوي'
        let colaps4 = ' رقم حساب المنظمة'
        let colaps5 = ' استمارة العضوية'

        /*TEXT */
        let text1 = `يحق لكل دولة عضو فى جامعة الدول العربية الانضمام إلى عضوية المنظمة وذلك من خلال الجهات التالية:`
        let li1 = `1- الجهات الحكومية المختصة بشؤون الأسرة وتشمل الوزارات والمؤسسات العامة وغيرها من الهيئات المعنية بشؤون الأسرة.`
        let li2 = ` 2- الجهات غير الحكومية وتشمل المنظمات الأهلية والجمعيات واللجان الخاصة التى تمارس أنشطة تتعلق بقضايا الأسرة وتتفق مع أهداف المنظمة.`
        let li3 = `        3- الجامعات والأكاديميات ومراكز البحوث الاجتماعية والتربوية والثقافية المهتمة بقضايا الأسرة.`
        let li4 = `4- الأفراد المتمتعون بجنسية إحدى الدول العربية من الباحثين والمفكرين والمختصين المهتمين بقضايا الأسرة.
        ويحدد النظام الداخلى قواعد وإجراءات الانضمام إلى عضوية المنظمة وإيقاف العضوية، وإسقاطها والانسحاب منها ، كما يحدد قيمة اشتراك العضوية السنوى .`
        let text2 = ``
        let text3 = ``
        let text4 = ``
        let text5 = ``
        return (


            <div>
                <div class="row">
                    <h1>{heading} </h1>
                    <section className="container section" >

                        <ul class="collapsible popout">
                            <li>
                                <div class="collapsible-header"><i class="material-icons">filter_drama</i>{colaps1}</div>
                                <div class="collapsible-body"><span>{text1}</span>
                                    <ul className='textFloat'>
                                        <li>{li1}</li>
                                        <li>{li2}</li>
                                        <li>{li3}</li>
                                        <li>{li4}</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header"><i class="material-icons">place</i>{colaps2}</div>
                                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div class="collapsible-header"><i class="material-icons">whatshot</i>{colaps3}</div>
                                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div class="collapsible-header"><i class="material-icons">whatshot</i>{colaps4}</div>
                                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div class="collapsible-header"><i class="material-icons">whatshot</i>{colaps5}</div>
                                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                        </ul>
                    </section>



                </div>

            </div>




        )
    }

}
//  

export default Page5