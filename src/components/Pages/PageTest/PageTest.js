import React, { Component } from 'react'
import Siema from 'siema'
import './PageTest.css'
import M from "materialize-css/dist/js/materialize.min.js";

class PageTest extends Component {

    constructor(props) {
        var URLS = [
            'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family1.jpg',
            'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family2.jpg',

        ];

        super(props)
        this.state = {

            family1: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family1.jpg',
            family2: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family2.jpg',
            family3: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family3.jpg',
            family4: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family4.jpg',
            family5: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family5.jpg',
            family6: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family6.jpg',
            family7: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family7.jpg',
            family8: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family8.jpg',
            family9: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family9.jpg',
            family10: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family10.jpg',
            family11: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family11.jpg',
            family12: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family12.jpg',
            data: []
        }


    }

    componentWillMount() {

    }
    async componentDidMount() {

        let elems = document.querySelectorAll('.carousel');
        let instances = M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true
        });
        // let instance = M.Carousel.getInstance(elems);
        // instances('next')
        // instance('next')
        // setInterval(function () { instance('next') }, 5000)
    setInterval(() => {
            var instance = M.Carousel.getInstance(elems);
            instance.next();
        }, 5000)

    }

    render() {
        let heading = 'صور فعالية عرس زايد العربي'
        let hadf2 = `رعاية الأسرة العربية والنهوض بها وتمكينها من القيام بوظائفها الاجتماعية والاقتصادية والتربوية والثقافيةشهد معالي الشيخ سعيد بن طحنون آل نهيان «عرس زايد العربي الجماعي الأول»، والذي نظمته «منظمة الأسرة العربية»، مساء أمس -السبت- في مركز «إكسبو الشارقة»، بمشاركة 500 عريس وعروس، من أبناء الدول العربية المقيمين على أرض دولة الإمارات العربية المتحدة، والذي يأتي تزامناً مع «عام زايد 2018»، ومئوية الأب المؤسس.`
        let hadf3 = `كما حضر الحفل الشيخ محمد بن حميد القاسمي، مدير دائرة الإحصاء والتنمية المجتمعية بالشارقة، والدكتور ماجد سعيد النعيمي، رئيس الديوان الأميري بعجمان، وسيف بن محمد المدفع، الرئيس التنفيذي لمركز «إكسبو الشارقة»، ورجل الأعمال عبد الرحيم الزرعوني، وجمال عبيد البح رئيس منظمة الأسرة العربية، وعدد من رجال السلك الدبلوماسي والشخصيات العربية، والفنانين. `
        let hadf4 = `وشارك في العرس عرسان يمثلون عدداً من البلدان العربية من: مصر، الأردن، فلسطين، اليمن، السودان، جزر القمر، الجزائر، المغرب، ليبيا، العراق، سلطنة عمان، سوريا، بالإضافة لعدد من العرسان من باكستان، وإيران وثلاثة من المواطنين من الإمارات العربية المتحدة. وأكد جمال البح، في كلمة بالعرس، أن «عرس زايد العربي الأول» يمثل علامة مضيئة في سجلات الترابط الأسري، ويؤكد على السلام والتآخي بين الشعوب العربية والصديق`
        return (


            <div>
                <div class="row">
                    <h1>{heading} </h1>
                    <section className="container section" >
                        <div class="carousel carousel-slider" data-indicators='true'>
                            <a href="#one!" className='carousel-item'>
                                <img src={this.state.family1} alt='' />
                            </a>
                            <a href="#two!" className='carousel-item'>
                                <img class='fixed-height' src={this.state.family2} alt='' />

                            </a>
                            <a href="#three!" className='carousel-item'>

                                <img class='fixed-height' src={this.state.family3} alt='' />
                            </a>
                            <a href="#four!" className='carousel-item'>

                                <img class='fixed-height' src={this.state.family4} alt='' />
                            </a>
                            <a href="#five!" className='carousel-item'>

                                <img class='fixed-height' src={this.state.family5} alt='' />
                            </a>
                            <a href="#six!" className='carousel-item'>

                                <img class='fixed-height' src={this.state.family6} alt='' />
                            </a>
                            <a href="#seven!" className='carousel-item'>

                                <img class='fixed-height' src={this.state.family7} alt='' />
                            </a>
                            <a href="#eight!" className='carousel-item'>

                                <img class='fixed-height' src={this.state.family8} alt='' />
                            </a>
                            <a href="#nine!" className='carousel-item'>

                                <img class='fixed-height' src={this.state.family9} alt='' />
                            </a>
                            <a href="#ten!" className='carousel-item'>

                                <img class='fixed-height' src={this.state.family10} alt='' />
                            </a>
                            <a href="#twelve!" className='carousel-item'>

                                <img class='fixed-height' src={this.state.family11} alt='' />
                            </a>
                            <a href="#eleven!" className='carousel-item'>

                                <img class='fixed-height' src={this.state.family12} alt='' />
                            </a>


                        </div>

                        <div class="container section" className='s12 m4 l8'>
                            <p>{hadf2}</p>
                            <br />
                            <p>{hadf3}</p>
                            <br />
                            <p>{hadf4}</p>
                            <br />

                        </div>
                    </section>

                </div>

            </div>




        )
    }

}
//  

export default PageTest