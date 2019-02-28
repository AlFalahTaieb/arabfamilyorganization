import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css"
import './Page5.css'

class Page5 extends Component {


    constructor(props) {
        super(props)
        this.state = {
            register: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551306661/Dashboard/clipboard.png',
        }

    }

    componentDidMount() {
        // this.initElem()
      
            let elems = document.querySelector('.collapsible')
            let instances = M.Collapsible.init(elems)


            console.log('WILLMOUNT')
        
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

        let text2 = `رسوم الاشتراك السنوي `
        let li5 = `رسال طلب العضوية مع نبذة للجهة الراغبة في الانضمام لعضوية المنظمة مرفقة بقرار تأسيسها هويتها وأهدافها وخططها وأنشطتها.`
        let li6 = ` ارسال طلب العضوية مع السيرة الذاتية للأفراد.`
        let li7 = `5000 دولار امركي للوزارات والجهات الحكومية.`
        let li8 = `500 - 1000 دولار امركي للمنظمات والجمعيات شبه الرسمية وفقاً لما يحدده قرار مجلس الإدارة.`
        let li9 = `300 دولار امركي للافراد.`
        let text3 = `الرجاء اتباع التعليمات الموجودة في استمارة التسجيل. نسخة من استمارة العضوية:`
        let text4 = `الرجاء اتباع التعليمات الموجودة في استمارة التسجيل. نسخة من استمارة العضوية: `
        return (


            <div>
                <div id='Home' className="row">
                    <h1>{heading} </h1>
                    <a> <img src={this.state.register} alt='' /></a>
                    <section className="container section" >

                        <ul className="collapsible popout">
                            <li class="active">
                                <div className="collapsible-header"><i className="material-icons">assignment_ind</i>{colaps1}</div>
                                <div className="collapsible-body"><span>{text1}</span>
                                    <ul className='textFloat'>
                                        <li>{li1}</li>
                                        <li>{li2}</li>
                                        <li>{li3}</li>
                                        <li>{li4}</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">assignment</i>{colaps2}</div>
                                <div className="collapsible-body"><ul className='textFloat'>
                                    <li>{li5}</li>
                                    <li>{li6}</li>
                                </ul></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">attach_money</i>{colaps3}</div>
                                <div className="collapsible-body"><span>{text2}</span>
                                    <ul className='textFloat'>
                                        <li>{li7}</li>
                                        <li>{li8}</li>
                                        <li>{li9}</li>
                                    </ul>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">done</i>{colaps4}</div>
                                <div className="collapsible-body"><span>{text3}</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">done_all</i>{colaps5}</div>
                                <div className="collapsible-body"><span>{text4}</span></div>
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