import React, { Component } from 'react'
import family1 from '../../images/family1.png'
import family5 from '../../images/family5.png'
import family3 from '../../images/family3.png'
import family4 from '../../images/family4.png'
import family2 from '../../images/family2.png'
import family7 from '../../images/family7.png'
import './Dashboard.css'


class Dashboard extends Component {
    _isMounted = false
    constructor(props) {
        super(props)

    }




    async componentDidMount() {
        this._isMounted = true
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
                {/* <section className="hero">
                    <section className="hero-body">
                        <div className="container">
                            <h1 className="title">{ heading }</h1>
                            <div className='is-two-thirds column is-paddingless'>
                                <h2 className='subtitle is-4'> { subHeading } </h2>
                            </div>
                            <a className='button is-primary' id ='Learn'>LearnMore</a>
                        </div>

                    </section>
                </section> */}

                <section class="container section" id="photos">
                    <h1 className="title">{heading}</h1>
                    <div class="row">
                        <div class="col s12 l4 hide-on-med-and-down">
                            <img src={family5} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{hadf1}</h5>
   
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 l4 offset-l1 push-l7">
                            <img src={family3} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1 pull-l5 right-align">
                            <h5 class="indigo-text text-darken-4">{hadf2}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 l4">
                            <img src={family2} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{hadf3}</h5>
   
                        </div>
                    </div>
                   
                    <div class="row">
                        <div class="col s12 l4 offset-l1 push-l7">
                            <img src={family4} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1 pull-l5 right-align">
                            <h5 class="indigo-text text-darken-4">{hadf4}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 l4">
                            <img src={family1} alt="" class="responsive-img materialboxed" />
                        </div>
                        <div class="col s12 l6 offset-l1">
                            <h5 class="indigo-text text-darken-4">{hadf3}</h5>
   
                        </div>
                        
                    </div>
                </section>
            </div>

        )
    }

}
//  

export default Dashboard