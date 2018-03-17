import React, { Component } from 'react'
import './navs.css'
import { withRouter } from 'react-router-dom';

@withRouter
class navs extends Component {
    constructor () {
        super()
        this.state = {
            arrs: [
                {
                    cont: '我的订单',
                    icon: '>'
                },
                {
                    cont: '我的地址',
                    icon: '>'
                },
                {
                    cont : '下载每日优鲜APP',
                    icon: '>'
                },
                {
                    cont: '客服与帮助',
                    icon: '>'
                },
                {
                    cont: '意见反馈',
                    icon: '>'
                },
                {
                    cont: '消息',
                    icon: '>'
                },
                {
                    cont: '关于我们',
                    icon: '>'
                },
                {
                    cont: '设置',
                    icon: '>'
                }
            ]
        }
    }
    share() {
        const { history } = this.props
        history.push('/Share')
    }
    render () {
        const { arrs } = this.state
       
        return (
            <div>
                <div className="list">
                    <ul>
                        {
                            arrs.map((item, idx) => {
                                return <li key={idx} onClick={this.share.bind(this)}><p>{item.cont}</p><b>{item.icon}</b></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default navs