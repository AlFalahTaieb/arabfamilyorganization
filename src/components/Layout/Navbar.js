import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'


const Navbar = (props) => {


    return (
        <nav className="container">
            {/* <ul className="container"> */}
            <ul class="nav-links">
                <Link to='/' className=".nav-item ">
                    الصفحة الرئيسية
</Link>
                <Link to='/' className=".nav-item ">حول المنظمة</Link>
                < Link to='/' className=".nav-item">منظمة الأسرة العربية</Link>
            </ul>

        </nav>
    )
}

export default Navbar