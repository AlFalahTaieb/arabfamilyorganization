import React, { Component } from 'react'




class Page4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fam1: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551338567/Goals/family1.png',
            fam2: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551338567/Goals/family2.png',
            fam3: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551338567/Goals/family3.png',
            fam4: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551338567/Goals/family4.png',
            fam5: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551338567/Goals/family5.png',
        }
    }
    render() {
        let heading = ' اهدافها'
        let hadf1 = 'رعاية الأسرة العربية والنهوض بها وتمكينها من القيام بوظائفها الاجتماعية والاقتصادية والتربوية والثقافية'
        let hadf2 = 'العمل على تطوير تبني استراتيجيات وسياسات أسرية في الدول العربية وفقاً لمتطلبات النمو والظروف الخاصة بكل منها وفي إطار الوحدة العربية'
        let hadf3 = 'تأكيد مكانة الأسرة العربية ودورها الوطني والتنموي ، وتعزيز قدراتها في التعبير عن ذاتيتها'
        let hadf4 = ' تمثيل الأسرة العربية في المؤسسات والمحافل الإقليمية والدولية والعمل على تأكيد حقوقها والتعبير عن مصالحها واحتياجاتها وآمالها'
        let hadf5 = '  تدعيم الصلات والتعاون بين الأسر في العالم ، والحث على قيامها بمسؤولياتها الجماعية في العدالة والسلم والتضامن.'
        return (


            <div>

                <section class="container section" id="photos">
                    <h1 className="title">{heading}</h1>
                    <div class="row">
                        <div class="col s12 l4">
                            <img src={this.state.fam5} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{hadf1}</h5>
   
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 l4 offset-l1 push-l7">
                            <img src={this.state.fam3} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1 pull-l5 right-align">
                            <h5 class="indigo-text text-darken-4">{hadf2}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 l4">
                            <img src={this.state.fam2} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{hadf3}</h5>
   
                        </div>
                    </div>
                   
                    <div class="row">
                        <div class="col s12 l4 offset-l1 push-l7">
                            <img src={this.state.fam4} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1 pull-l5 right-align">
                            <h5 class="indigo-text text-darken-4">{hadf4}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 l4">
                            <img src={this.state.fam1} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{hadf5}</h5>
   
                        </div>
                        
                    </div>
                </section>
            </div>

        )
    }

}
//  

export default Page4