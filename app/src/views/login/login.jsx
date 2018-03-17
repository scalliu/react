import React, { Component } from 'react'
import './login.css'
import Header from './Head'
import Count from './count'

class login extends Component {
    render () {
        return (
            <div>
               <div className="box">
                    <Header />
                    <Count/>
                 <div className="btns">
                    <button>登录</button>
                 </div>
               </div>
            </div>
        )
    }
}
export default login