import routers from './router'

export const ROUTER_MAP = {
    NAV: [
        {
            to: '/',
            text: '首页',
            icon: 'down'
        },
        {
            to: '/news',
            text: '新鲜事',
            icon: 'down'
        },
        {
            to: '/vips',
            text: '会员',
            icon: 'down'
        },
        {
            to: '/shopcar',
            text: '购物车',
            icon: 'down'
        },
        {
            to: '/mine',
            text: '我的',
            icon: 'down'
        }
    ],
    ROUTE: [
        {
            path: '/',
            component: routers.Home
        },
        {
            path: '/news',
            component: routers.News
        },
        {
            path: '/vips',
            component: routers.Vips
        },
        {
            path: '/shopcar',
            component: routers.ShopCar
        },
        {
            path: '/mine',
            component: routers.Mine
        },
        {
            path: '/detail',
            component: routers.Detail
        },
        {
            path: '/login',
            component: routers.login
        },
        {
            path: '/share',
            component: routers.share
        }
    ]
}