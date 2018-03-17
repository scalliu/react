import React, { Component } from 'react'
import './AddCartBar.css'

class AddCartBar extends Component {
    addProduct () {
        const { addCart } = this.props
        addCart()
    }
    render() {
        const { total } = this.props
        return (
            <div className="food">
                <div className="shop">
                    { total }
                </div>
                <div onClick={this.addProduct.bind(this)} className="car">
                    点击加入购物车
                </div>
            </div>
        )
    }
}

export default AddCartBar