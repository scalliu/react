import { GET_INDEX_LIST_SUCESS, GET_PRODUCT_LIST, GET_INDEX_LIST_REQUEST } from '../components/hoemType'

export const getListActionRequest = () => {
    return {
        type: GET_INDEX_LIST_REQUEST
    }
}

export const getListAction = (productList, categoryList) => {
    return {
        type: GET_INDEX_LIST_SUCESS,
        productList,
        categoryList
    }
}

export const getProductAction = (productList) => {
    return {
        type: GET_PRODUCT_LIST,
        productList
    }
}