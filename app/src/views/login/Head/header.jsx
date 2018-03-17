import React, { Component } from 'react'
import './header.css'
import { withRouter } from 'react-router-dom';

@withRouter
class Header extends Component {
    back() {
        const { history } = this.props
        history.goBack(-1)
    }
    render () {
        return (
            <div>
                <div className="header">
                    <ul>
                        <li onClick={this.back.bind(this)}><span>←</span></li>
                        <li>验证手机</li>
                        <li>  </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header