import { ADD_PRODUCT, GET_SHOPCAR_LIST, COUNT_PRICE } from '../components/shopCarType'

export const addProductAction = () => {
    return {
        type: ADD_PRODUCT
    }
}

export const getshopcarlist = (shopCarList) => {
    return {
        type: GET_SHOPCAR_LIST,
        shopCarList
    }
}

export const getPrice = (price) => {
    return {
        type: COUNT_PRICE,
        price
    }
}