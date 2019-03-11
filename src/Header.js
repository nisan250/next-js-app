import React, {Component} from 'react';
import propTypes from 'prop-types';
import svccImg from '../static/SVCClogo.png';

class Header extends Component {

    static async getInitialProps() {
        return {};
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-12 col-sm-4 text-center">
                        <h6 className="text-uppercase">October 13-14&nbsp;&nbsp;2018</h6>
                        <h6 className="text-uppercase">San Jose, California</h6>
                    </div>
                    <div className="col-12 col-sm-8 text-lg-right">
                        <div><img src={svccImg}/></div>
                        <h2>Silicon Valley Code Camp 2018</h2>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;