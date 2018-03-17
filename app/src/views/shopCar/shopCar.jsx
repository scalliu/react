import React, { Component } from 'react'
import ShopCarCount from '../../components/shangCar/shopCarCount'
import { getProductList } from '../../common/home'
import { connect } from 'react-redux'
import { getshopcarlist, getPrice } from '../../store/action/shopCar'
import './shopCar.css'

class shopCar extends Component {
    componentDidMount () {
        const { dispatch } = this.props
        getProductList('/shopcar')
        .then((val) => {
            dispatch(getshopcarlist(val[0].active_item))
        })
    }
    countPrice(price) {
        const { dispatch } = this.props
        dispatch(getPrice(price))
    }
    render () {
        const { shopCarList, totalPrice } = this.props
        return (
            <div style={{paddingBottom:"1rem"}}>
                {
                    shopCarList !== null ? <ShopCarCount savePrice={this.countPrice.bind(this)} shopCarList={shopCarList} />:''
                }
                <div className="foot">
                    <div className="money">
                        <p> 总价：{(totalPrice / 100).toFixed(2)}</p>
                    </div>
                    <div className="close">去结算</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        shopCarList: state.shopCar.shopCarList,
        totalPrice: state.shopCar.totalPrice
    }
}
export default connect(mapStateToProps)(shopCar)