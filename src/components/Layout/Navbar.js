import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import './Navbar.css'
import logo from '../../images/arabfamily.jpg'




class Navbar extends Component {

    componentDidMount() {

        var elems1 = document.querySelectorAll('.sidenav');
        var instances2 = M.Sidenav.init(elems1);
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems);



    }

    render() {
        return (
            <div className="header">

                <button href="#" className='sidenav-trigger hide-on-med-and-up  blue-grey darken-3 blue-text' data-target='mobile-nav'>
                    <i className="material-icons">menu</i>
                </button>
                <nav className="container" >
                    <h6 className='hide-on-med-and-up'>
                        منظمة الأسرة العربية
            </h6>

                    <ul className="nav-links hide-on-small-only" >


                        <Link to='/' className="nav-item">الصفحة الرئيسية</Link>
                        <Link to='/page6' className="nav-item">النشأة والتطور </Link>
                        {/*                      
                    <Link to='/' className="nav-item">منظمة الأسرة العربية</Link>
                    <Link to='/' className="nav-item">الفعاليات</Link> */}
                        <Link to='/page4' className="nav-item">اهدافها</Link>
                        <Link to='/page5' className="nav-item">العضوية</Link>
                        {/* <a class='dropdown-trigger' href='#' data-target='dropdown1'>العضوية</a> */}
                        {/* <ul id='dropdown1' class='dropdown-content'>
                        <li> <Link to='/page1' className="nav-item">حول العضوية </Link></li>
                        <li> <Link to='/page2' className="nav-item">الاشتراك / عضوية المنظمة</Link></li>
                        <li class="divider" tabindex="-1"></li>
                        <li><Link to='/page3' className='nav-item'>  رسوم الاشتراك السنوي</Link></li>
                        <li><Link to='/page3' className='nav-item'> رقم حساب المنظمة</Link></li>
                        <li><Link to='/page3' className='nav-item'> استمارة العضوية</Link></li>
                    </ul>
 */}

                        {/* DROPDOWN LISTTTTTTTTTTTTTTTTT */}
                        <a class='dropdown-trigger' href='#' data-target='dropdown1'>أخبار المنظمة </a>
                        <ul id='dropdown1' class='dropdown-content'>
                            <li> <Link to='/page1' className="nav-item">عرس زايد العربي</Link></li>
                            <li> <Link to='/page2' className="nav-item">يوم المرأة الامارتية</Link></li>
                            <li class="divider" tabindex="-1"></li>
                            <li><Link to='/page3' className='nav-item'>  تفاهم بين جامعة الشارقة ومنظمة الأسرة العربية</Link></li>
                        </ul>

                    </ul>

                </nav>

                <ul className="sidenav" id='mobile-nav'>
                    <li className="nav-item"><a href="/">الصفحة الرئيسية </a></li>
                    <li className="nav-item"><a href="/page6">النشأة والتطور</a></li>
                    <li className="nav-item"><a href="/page4">اهدافها</a></li>
                    <li className="nav-item"><a href="/page1">عرس زايد العربي</a></li>
                    <li className="nav-item"><a href="/page5">العضوية</a></li>
                    <li className="nav-item"><a href="/page2">يوم المرأة الامارتية</a></li>

                </ul>
                <a className="logo hide-on-med-and-down">
                    <img src={logo} alt='logo' className='logo' />
                </a>
            </div>
        )
    }
}
export default Navbar