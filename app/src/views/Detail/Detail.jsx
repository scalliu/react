import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProductList} from '../../common/home'
import Detail from '../../components/Home/Detail'

class DetailCell extends Component {
    componentDidMount () {
        const { dispatch } = this.props
        getProductList('/detail')
        .then((val) => {
            dispatch({
                type: 'GET_DETAIL_SUCESS',
                detail: val
            })
        })
    }
    render () {
        const { detail } = this.props
        return (
            <div>
                {detail !== null ? <Detail {...this.props} /> : ''}
            </div>
        )
    }
}
const  mapStateToProps = (state) => {
    return {
        detail: state.home.detail
    }
}
export default connect(mapStateToProps)(DetailCell)