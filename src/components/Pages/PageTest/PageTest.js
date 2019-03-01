import React, { Component } from 'react'
import Siema from 'siema'
// import './Page1.css'
import M from "materialize-css/dist/js/materialize.min.js";

class PageTest extends Component {

    constructor(props) {
        var URLS = [
            'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family1.jpg',
            'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family2.jpg',

        ];

        super(props)
        this.state = {

            // family1: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family1.jpg',
            // family2: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family2.jpg',
            // family3: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family3.jpg',
            // family4: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family4.jpg',
            // family5: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family5.jpg',
            // family6: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family6.jpg',
            // family7: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family7.jpg',
            // family8: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family8.jpg',
            // family9: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family9.jpg',
            // family10: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family10.jpg',
            // family11: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family11.jpg',
            // family12: 'https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family12.jpg',
            data: []
        }


    }
    // setInterval(() => {
    //     carousel.next()
    // }, 3000)
    componentWillMount() {
        // const carousel = new Siema({
        //     selector: '.taieb',
        //     easing: 'cubic-bezier(.17,.67,.32,1.34)',
        //     perPage: 1,
        //     duration: 1500,
        //     startIndex: 0,
        //     draggable: true,
        //     multipleDrag: true,
        //     threshold: 20,
        //     loop: true,
        //     rtl: true,
        // })
        // setInterval(() => {
        //     carousel.next()
        // }, 5000)
        // var elems = document.querySelectorAll('.carousel-slider')
        // M.Carousel.init({
        //      fullWidth: true,
        //    });
    }
     async componentDidMount() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);
        var instance = M.Carousel.getInstance(elems);
        //  setInterval(() => {
        //     instance('next')
        // }, 5000)

        let response = await fetch('https://res.cloudinary.com/drvdkcdnl/image/upload/v1551265411/family1.jpg')
        let data = await response.url

        // _isMounted = true

        console.log(data)
        return this.setState({
            family1: data
        })
      
    }

    render() {
        let family1 = this.state.family1
        let text1 = 'CECI EST UN TEST PAGE'
        return (


            <div>
                <div className="carousel carousel-slider">
                    <a className="carousel-item" href="#one!"><img src={family1} /></a>
                    <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2" /></a>
                    <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3" /></a>
                    <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4" /></a>
                </div>
                <h1>wwaa</h1>


                <div class="row">
                    {/* <section className="container section" > */}

                    {/* <div  class='carousel carousel-slider data-indicator'> */}
                        <a href="#one!" className='carousel-item'>
                            <img src={family1} alt='' />
                        </a>
                        <a href="#one!" className='carousel-item'>
                            <img src={this.state.family2} alt='' />
                        </a>
                        {/* <a href="#two!" className='carousel-item'>
                                <img src={this.state.family2} alt='' />

                            </a>
                            <a href="#three!" className='carousel-item'>

                                <img src={this.state.family3} alt='' />
                            </a>
                            <a href="#four!" className='carousel-item'>

                                <img src={this.state.family4} alt='' />
                            </a>
                            <a href="#five!" className='carousel-item'>

                                <img src={this.state.family5} alt='' />
                            </a>
                            <a href="#six!" className='carousel-item'>

                                <img src={this.state.family6} alt='' />
                            </a>
                            <a href="#seven!" className='carousel-item'>

                                <img src={this.state.family7} alt='' />
                            </a>
                            <a href="#eight!" className='carousel-item'>

                                <img src={this.state.family8} alt='' />
                            </a>
                            <a href="#nine!" className='carousel-item'>

                                <img src={this.state.family9} alt='' />
                            </a>
                            <a href="#ten!" className='carousel-item'>

                                <img src={this.state.family10} alt='' />
                            </a>
                            <a href="#twelve!" className='carousel-item'>

                                <img src={this.state.family11} alt='' />
                            </a>
                            <a href="#eleven!" className='carousel-item'>

                                <img src={this.state.family12} alt='' />
                            </a> */}


                    </div>

                    <div class="container section" className='s12 m4 l8'>
                        <p>{text1}</p>

                        <br />

                    </div>




                {/* </div> */}

            </div>




        )
    }

}
//  

export default PageTest