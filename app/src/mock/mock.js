import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import mryxList from './datas/mryxList.json'
import huoguo from './datas/huoguo.json'
import shuiguo from './datas/shuiguo.json'
import sc from './datas/sc.json'
import milk from './datas/milk.json'
import food from './datas/food.json'
import snack from './datas/snack.json'
import drink from './datas/drink.json'
import seafood from './datas/seafood.json'
import fastfood from './datas/fastfood.json'
import sushi from './datas/hb-fastfood.json'
import liangyou from './datas/liangyou.json'
import qingshi from './datas/qingshi.json'
import com from './datas/com.json'
import detail from './datas/detail/detail.json'
import shopcar from './datas/shopcar/shopcar.json'
import shopCar from './../views/shopCar/shopCar';
import vip from './datas/vip.json'
const mock = new AxiosMockAdapter(axios)

const information = () => {
    mock.onGet('/index').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, mryxList])
        })
    })
    
    mock.onGet('/hbcrd-huoguo').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, huoguo])
        })
    })
    mock.onGet('/hd-fruit').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, shuiguo])
        })
    })
    mock.onGet('/hb-sc').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, sc])
        })
    })
    mock.onGet('/hb-milk').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, milk])
        })
    })
    mock.onGet('/hb-food').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, food])
        })
    })
    mock.onGet('/hb-snack').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, snack])
        })
    })
    mock.onGet('/hb-drink').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, drink])
        })
    })
    mock.onGet('/hb-seafood').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, seafood])
        })
    })
    mock.onGet('/sss-hb-fastfood').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, fastfood])
        })
    })
    mock.onGet('/hb-fastfood').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, sushi])
        })
    })
    mock.onGet('/hb-liangyou').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, liangyou])
        })
    })
    mock.onGet('/hb-qingshi').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, qingshi])
        })
    })
    mock.onGet('/hb-com').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, com])
        })
    })
    mock.onGet('/detail').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, detail])
        })
    })
    mock.onGet('/shopcar').reply((config) => {
       return new Promise((resolve, reject) => {
           resolve([200, shopcar])
       })
    })
    mock.onGet('/vip').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, vip])
        })
    })
}

export default information