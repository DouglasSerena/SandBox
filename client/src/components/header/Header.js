import React, { Component } from 'react';
import { LinkWrapper } from '../../wrappers/LinkWrapper';
import './style.css';

class Header extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        function te1st() {
            this.myRef.current.innerHTML = "oi"
        }
    }

    render() {
        return (
            <header>
                <nav className="nav-bar">
                    <LinkWrapper className="nav-title" to="/" activeStyle={{color: 'white'}}><h1>Cosmic</h1></LinkWrapper>
                    <div className="nav-link" ref={this.myRef}>
                        <ul className="links">
                            <li><LinkWrapper className="link-items" to="/comics">comic</LinkWrapper></li>
                            <li><LinkWrapper className="link-items" to="/eventos">eventos</LinkWrapper></li>
                            <li><LinkWrapper className="link-items" to="/sobre">sobre</LinkWrapper></li>
                        </ul>
                        <div className="user"></div>
                    </div>
                   
                    <div className="dashboard">
                        <i onClick={this.te1st} className="material-icons">dehaze</i>
                    </div>
                </nav>
            </header>
        );
    }
}

export { Header }