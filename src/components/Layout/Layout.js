import Footer from './Footer'
import React, {Component} from 'react'
import Navbar from './Navbar';
import './Layout.css'


class Layout extends Component {
    render() {
        return (
            <main>
            <div>
                
                <Navbar />
                {this.props.children}
                {/* <Footer /> */}
            </div>
            </main>
        )
    }
}

export default Layout