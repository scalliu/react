import React, { Component } from 'react'
import './shopCarCount.css'
import ShopCarList from '../ShopcarList'

class shopCarCount extends Component {
    getPrice (price) {
        const { savePrice } = this.props
        savePrice(price)
    }
   
    render () {
       const { shopCarList } = this.props
        return (
            <div className="cont">
                {
                    shopCarList.map((item,idx) => {
                        return <ShopCarList countPrice={this.getPrice.bind(this)} key={idx} item={item}/>
                    })
                }
            </div>
        )
    }
}

export default shopCarCount