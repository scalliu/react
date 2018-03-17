import Loadable from 'react-loadable'
import Loading from '../views/component/Loading'

const Home = Loadable({
    loader: () => import('../views/Home'),
    loading: Loading
  })
  
  const Mine = Loadable({
    loader: () => import('../views/Mine'),
    loading: Loading
  })
  
  const News = Loadable({
    loader: () => import('../views/News'),
    loading: Loading
  })

  const Vips = Loadable({
    loader: () => import('../views/Vips'),
    loading: Loading
  })

  const ShopCar = Loadable({
    loader: () => import('../views/shopCar'),
    loading: Loading
  })
  const Detail = Loadable({
    loader: () => import('../views/Detail'),
    loading: Loading
  })
  const login = Loadable({
    loader: () => import('../views/login'),
    loading: Loading
  })
  const Share = Loadable({
    loader: () => import('../views/Share'),
    loading: Loading
  })
  export default {
    Home,
    Mine,
    News,
    Vips,
    ShopCar,
    Detail,
    login,
    Share
  }
  