import React from 'react'
import { Link,NavLink } from 'react-router-dom'

import './Navbar.css'
import logo from '../../images/arabfamily.jpg'




const Navbar = (props) => {


    return (
        <div className="header">

            <button href="#" className='sidenav-trigger hide-on-med-and-up' data-target='mobile-nav'>
                <i className="material-icons">menu</i>
            </button>
            <nav className="container" >
                <h6 className='hide-on-med-and-up'>
                    منظمة الأسرة العربية
            </h6>
                <ul className="nav-links hide-on-small-only" >

                   <li> <Link to='/page1' className="nav-item">الصفحة الرئيسية</Link></li>
                    <Link to='/' className="nav-item">حول المنظمة</Link>
                    <Link to='/' className="nav-item">منظمة الأسرة العربية</Link>
                    <Link to='/' className="nav-item">الفعاليات</Link>
                    <Link to='/' className="nav-item">العضوية</Link>
                    <Link to='/' className="nav-item">مجلس سفراء الأسرة العربية</Link>
                    {/* <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>


                    <ul id='dropdown1' className='dropdown-content'>
                        <li><a href="#!">one</a></li>
                        <li><a href="#!">two</a></li>
                        <li className="divider" tabindex="-1"></li>
                        <li><a href="#!">three</a></li>
                        <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                        <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
                    </ul> */}
                </ul>

            </nav>

            <ul className="sidenav" id='mobile-nav'>
                <li to='/page1' className="nav-item">الصفحة الرئيسية</li>
                <li to='/' className="nav-item">حول المنظمة</li>
                <li to='/' className="nav-item">منظمة الأسرة العربية</li>
                <li to='/' className="nav-item">الفعاليات</li>
                <li to='/' className="nav-item">العضوية</li>
                <li to='/' className="nav-item">مجلس سفراء الأسرة العربية</li>

            </ul>
            <a className="logo hide-on-med-and-down">
                <img src={logo} alt='logo' className='logo' />
            </a>
        </div>
    )
}

export default Navbar