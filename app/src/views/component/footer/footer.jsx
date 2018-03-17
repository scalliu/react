import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import './footer.css'

class Footer extends Component {
    render() {
        const { icon, text } = this.props
        return (
            <div className='footer'>
               <ul>
                   <li>
                        <Icon type={icon} size='xxs' id="icon" />
                        {text}
                   </li>
               </ul>
            </div>
        )
    }
}

export default Footer