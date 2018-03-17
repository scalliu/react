import React, { Component } from 'react'
import { getIndexList, getProductList } from '../../common/home'
import { connect } from 'react-redux'
import Header from '../component/header'
import Tab from '../../components/Home/Tab'
import { getListAction, getProductAction, getListActionRequest } from '../../store/action/home'

class Home extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        getIndexList('/index')
            .then((val) => {
                dispatch(getListAction(val.product_list.products, val.category_list))
            })
    }
    saveGetInternalId(url) {
        const { dispatch } = this.props
        getProductList(url)
            .then((val) => {
                dispatch(getListActionRequest())
                dispatch(getProductAction(val.products))
            })
    }
    render() {
        const { productList } = this.props
        return (
            <div className='home'>
                <Header />
                {productList !== null ? <Tab getInternalId={(id) => this.saveGetInternalId(id)} {...this.props} /> : ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.home.productList,
        categoryList: state.home.categoryList
    }
}

export default connect(mapStateToProps)(Home)