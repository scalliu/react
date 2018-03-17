import React, { Component } from 'react'
import './loading.css'
const loading = require('../../../assets/images/loading-gif-vip.gif')
class Loading extends Component {
    render () {
        return (
            <div className="loading">
                <img src={loading} alt="" />
            </div>
        )
    }
}
export default Loading