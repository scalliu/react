import { CHANGE_A } from '../components/newsTypes'

export default (state={ a: 0 }, action) => {
    switch (action.type) {
        case CHANGE_A:
            return { a: action.a }
        default:
            return state
    }
}