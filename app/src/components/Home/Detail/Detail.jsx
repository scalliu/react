import React, { Component } from 'react'
import Head from './header'
import './Detail.css'
class Detail extends Component {
    render () {
        const { detail } = this.props
        return (
           <div>
               <div className="detail">
                    <Head />
                    <div id="hash">
                        <img src={detail.image} alt=""/>
                        <p>{detail.name}</p>

                        <div id="detail">详情</div>
                        <div id="anxin">详777情</div>
                    </div>
               </div>
           </div>
        )
    }
}
export default Detail