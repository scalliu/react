import axios from 'axios'

export const getIndexList = (url) => {
    return axios.get(url)
        .then((res) => {
            if (res.data.code !== 0) return
            return res.data
        })
        .catch((e) => {
            throw Error(e)
        })
}

export const getProductList = (url) => {
    return axios.get(url)
        .then((res) => {
            return res.data
        })
        .catch((e) => {
            throw Error(e)
        })
}