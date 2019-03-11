import React, {Component} from 'react';
import propTypes from 'prop-types';
import Link from "next/link";

class Menu extends Component {

    static async getInitialProps() {
        return {};
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link" >Home</a>
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link href="/speakers">
                                <a className="nav-link" href="#">Speakers</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sessions">
                                <a className="nav-link" href="#">Sessions</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;