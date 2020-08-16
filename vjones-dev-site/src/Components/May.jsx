import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


export default class May extends Component {
    render() {
        return (
            <div>
                <Link
                    activeClass="active"
                    to="landing"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                <h1 class="may" style={{fontFamily: "Bebas Neue", fontSize: "75pt", color: "#FBFFF1", left:"40%"}}>MAY 2020</h1>
                </Link>
            </div>
        )
    }
}
