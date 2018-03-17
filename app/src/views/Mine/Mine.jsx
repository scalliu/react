import React from 'react'
import Navs from './navs'
import './Mine.css'
import { withRouter } from 'react-router-dom';

@withRouter
class Mine extends React.Component {
    constructor () {
        super()
        this.state = {
            arr: [
                {
                    count: '0元',
                    cont: '余额'
                },
                {
                    count: '张',
                    cont: '红包'
                },
                {
                    count: '张',
                    cont: '商品劵'
                },
                {
                    count: '分',
                    cont: '积分兑换>'
                }
            ]
        }
    }
    login () {
        const { history } = this.props
        history.push('/login')
    }
   
    render () {
        const { arr } = this.state
        console.log(arr)
        return (
            <div>
               <div className="box">
                    <div className="login">
                        <div className="btn" onClick={() => this.login()}>用户登录</div>
                    </div>
                    <div className="uls">
                        <ul>
                            {
                                arr.map((item, idx) => {
                                    return <li key={idx}><p>{item.count}</p><span>{item.cont}</span></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="vip">
                        <h4>会员权益</h4><span>开通会员></span>
                    </div>
                    <Navs />
               </div>
            </div>
        )
    }
}
export default Mine