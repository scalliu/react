import React, { Component } from 'react'
import { Icon } from 'antd-mobile';
import './header.css'

const titleImg = require('../../../assets/images/1.png')
class header extends Component {
    render () {
        return (
                <div className="header">
                    <ul>
                        <li> </li>
                        <li>
                            <img src={ titleImg } alt=""/>
                            北京
                        </li>
                        <li className="sreach"><Icon type="search" size='xxs' /><p>搜索</p></li>
                    </ul>
                </div>
        )
    }
}
export default header