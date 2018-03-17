import { combineReducers } from 'redux'
import home from './home'
import mine from './mine'
import vips from './vips'
import news from './news'
import shopCar from './shopCar'

const rootReducer = combineReducers({
    home,
    mine,
    vips,
    news,
    shopCar
})

export default rootReducer
