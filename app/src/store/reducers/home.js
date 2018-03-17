import { GET_INDEX_LIST_SUCESS, GET_PRODUCT_LIST, GET_INDEX_LIST_REQUEST } from '../components/hoemType'

const initalState = {
    productList: null,
    categoryList: null,
    detail: null
}

export default (state = initalState, action) => {

    switch (action.type) {
        case GET_INDEX_LIST_REQUEST:
            return Object.assign(
                {}, state,
                { productList: [] }
            )
        case GET_INDEX_LIST_SUCESS:
            return Object.assign(
                {}, state,
                {
                    productList: action.productList,
                    categoryList: action.categoryList
                }
            )
        case GET_PRODUCT_LIST:
            return Object.assign(
                {},
                state,
                {
                    productList: action.productList
                })
        case 'GET_DETAIL_SUCESS':
            return Object.assign(
                {},
                state,
                {
                    detail: action.detail
                }
            )
        default:
            return state
    }
}