import { ADD_PRODUCT, GET_SHOPCAR_LIST, COUNT_PRICE } from './../components/shopCarType';

const initalState = {
    total: 0,
    shopCarList: null,
    totalPrice:0
}

export default (state=initalState, action) => {
   switch (action.type) {
        case ADD_PRODUCT:
            return Object.assign({}, state, { total: state.total + 1})
        case GET_SHOPCAR_LIST:
            return Object.assign({}, state, { shopCarList: action.shopCarList })
        case COUNT_PRICE:
            return Object.assign({}, state, { totalPrice: state.totalPrice + action.price })
        default:
           return state
   }
}