import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import logo from '../../images/arabfamily.jpg'




const Navbar = (props) => {


    return (
        <div className="header">

            <a href="#" className='sidenav-trigger hide-on-med-and-up' data-target='mobile-nav'>
                <i class="material-icons">menu</i>
            </a>
            <nav className="container" >
                <h6 className='hide-on-med-and-up'>
                    منظمة الأسرة العربية
            </h6>
                <ul className="nav-links hide-on-small-only" >

                    <Link to='/' className="nav-item">الصفحة الرئيسية</Link>
                    <Link to='/' className="nav-item">حول المنظمة</Link>
                    <Link to='/' className="nav-item">منظمة الأسرة العربية</Link>
                    <Link to='/' className="nav-item">الفعاليات</Link>
                    <Link to='/' className="nav-item">العضوية</Link>
                    <Link to='/' className="nav-item">مجلس سفراء الأسرة العربية</Link>

                </ul>

            </nav>

            <ul className="sidenav" id='mobile-nav'>
                <li to='/' className="nav-item">الصفحة الرئيسية</li>
                <li to='/' className="nav-item">حول المنظمة</li>
                <li to='/' className="nav-item">منظمة الأسرة العربية</li>
                <li to='/' className="nav-item">الفعاليات</li>
                <li to='/' className="nav-item">العضوية</li>
                <li to='/' className="nav-item">مجلس سفراء الأسرة العربية</li>

            </ul>
            <a class="logo hide-on-med-and-down">
                <img src={logo} className='logo' />
            </a>
        </div>
    )
}

export default Navbar