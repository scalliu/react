import React, { Component } from 'react'
import './ShopCarList.css'

class ShopCarList extends Component {
    constructor () {
        super()
        this.state ={
            num: 1
        }
    }
    add () {
        const { item } = this.props
        this.setState({
            num: this.state.num + 1
        })
        const { countPrice } = this.props
        countPrice(item.price)
    }
    reduce () {
        this.setState({
            num: this.state.num <= 1 ? 1 : this.state.num - 1
        })
    }
    render () {
        const { item } = this.props
        const { num } = this.state
        console.log(item)
        return (
                <div className="lists">
                    <dl>
                        <dt>
                            <img src={item.images.cart} alt="" />
                        </dt>
                        <dd>
                            <h5>{item.name}</h5>
                            <b>单价：{(item.price / 100).toFixed(2)}</b>
                            <div className="btn">
                                <button onClick={this.add.bind(this)}>+</button>
                                    <span>{ num }</span> 
                                <button onClick={this.reduce.bind(this)}>-</button>
                            </div>
                        </dd>
                    </dl>
                </div>
        )
    }
}
export default ShopCarList