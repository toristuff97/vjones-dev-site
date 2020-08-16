import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Link
                    activeClass="active"
                    to="may"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                <h1 style={{fontFamily: "Bebas Neue", fontSize: "75pt", color: "#FBFFF1"}}>VICTORIA JONES</h1>
                </Link>
            </div>
        )
    }
}
