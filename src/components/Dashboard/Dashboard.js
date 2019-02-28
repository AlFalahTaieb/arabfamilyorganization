import React, { Component } from 'react'




class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charity: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551292933/Dashboard/charity.png',
            family: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551292933/Dashboard/family.png',
            help: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551292933/Dashboard/help.png',
            teacher: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551292933/Dashboard/teacher.png',
            loving: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551292933/Dashboard/loving.png',
            friendship: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551292933/Dashboard/friendship.png',
        }

    }

    render() {
        let heading = ' الصفحة الرئيسية'
        let text1 = `تكونت منظمة الاسرة العربية بارادة المؤسسات الحكومية وغير الحكومية المعترف بها والتي تعمل لرعاية الاسر والنهوض بها في الوطن العربي.`
        let text7 = `
وقد شاركت في تأسيسها اغلبية الدول العربية وهي (الاردن 🇯🇴 – تونس 🇹🇳 - الجزائر 🇩🇿 - المملكة العربية السعودية 🇸🇦 – العراق  🇮🇶– فلسطين🇵🇸  – الصومال 🇸🇴 – ليبيا 🇱🇾 – لبنان 🇱🇧 – مصر 🇪🇬 – المغرب  🇲🇦   – موريتانيا  🇲🇷)

`
let text9=`ورحبت بذلك وباركته كل من الاقطار التالية (الكويت 🇰🇼 – سلطنة عمان 🇴🇲 – قطر  🇶🇦– السودان🇸🇩  – 🇸🇾 سوريا).
`
       let text8 = `
ثم شاركت في انشطتها كل من (البحرين 🇧🇭 – اليمن 🇾🇪) تاكيداً لمساندتها للمنظمة.
`

let text10=`
واعترفت بها جامعة الدول العربية واصدر مجلس الجامعة في شأنها القرار رقم 3782 بتاريخ 14سبتمبر1978م، والذي أكد فيه ايضاً على ضرورة التعاون والتنسيق والاشتراك في اجتماعات واعمال المنظمة ، كما دعت الدول العربية الى المبادرة بالانضمام اليها ، وفي هذا الموقف دعم صريح للمنظمة وتثمين لدورها الهام في خدمة كل اسرة عربية وتعزيز قدرات الامة على مواجهة تحديات الحداثة والتطور.
`
let text11=`
كما اعترفت بها الحكومة التونسية بالتاشيرة رقم 4488 بتاريخ 6 مارس 1978م.  
وتتمتع المنظمة بالحق في التمثيل لدى الامم المتحدة ووكالاتها المتخصصة، ولدى الاتحاد الدولي للمؤسسات العائلية والمنظمات الدولية الاخرى التي تتفق اهدافها واهداف الامة العربية.  
إن الرسالة التي التزمت المنظمة بتحقيقها تتصل وثيق الاتصال بآمال الامة العربية في مزيد من التلاحم والتضامن والعمل المشترك ، وقد حرصت على ابراز ذلك في الاهداف التي رسمتها لنفسها والتي تنص على:
`


        let text2 = ` رعاية الأسرة العربية والنهوض بها حتى تتمكن من القيام بوظائفها التربوية والاجتماعية والثقافية والاقتصادية.`
        let text3 = ` ايجاد سياسة عائلية حسب متطلبات النمو لكل قطر عربي وفي اطار الوحدة العربية.`
        let text4 = ` تأكيد مكانة الأسرة العربية والتعبير عن ذاتيتها.`
        let text5 = `تمثيل الأسرة وابراز حقوقها ومصالحها وحاجياتها وآمالها لدى المؤسسات القومية والدولية.`
        let text6 = `تدعيم صلة التعاون بين الأسر `

        return (


            <div>

                <section class="container section" id="photos">
                    <h1 className="title">{heading}</h1>
                    <div class="container section" className='s12 m4 l8'>
                        <p>{text1}</p>
                        <br />
                        <p>{text7}</p>
                        <br/>
                        <p>{text9}</p>
                        <br />
                        <p>{text8}</p>
                        <br/>
                        <p>{text10}</p>
                        <br/>
                        <p>{text11}</p>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col s12 l4">
                            <img src={this.state.charity} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{text2}</h5>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 l4 ">
                            <img src={this.state.family} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{text3}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 l4">
                            <img src={this.state.help} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{text4}</h5>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12 l4">
                            <img src={this.state.teacher} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{text5}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 l4">
                            <img src={this.state.friendship} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{text6}</h5>
                        </div>
                    </div>

                </section>
            </div>

        )
    }

}
//  

export default Dashboard