import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';

class Navbar extends Component {

    constructor() {
        super();

        this.logOut = this.logOut.bind(this);
    }

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    logOut() {
        this.props.setJWTToken(null);
        sessionStorage.setItem('jwtToken', null);
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper white">
                    <ul id="nav-mobile" className="left">
                        <li><Link onClick={() => scroll.scrollTo(440)} to="/">Home</Link></li>
                        <li><Link onClick={() => scroll.scrollTo(440)} to="/patients">Patients</Link></li>
                        <li><Link onClick={() => scroll.scrollTo(440)} to="/calendar">Calendar</Link></li>
                        <li><Link onClick={() => scroll.scrollTo(440)} to="/profile">Profile</Link></li>
                        <li><Link onClick={this.logOut} to="/signin" >Log out</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
