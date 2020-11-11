import main from './views/main.vue'
import Menu from './views/Menu.vue'
import Table from './views/admin/Table.vue'
import ChangeInfo from './views/admin/ChangeInfo.vue'
import StyleMenu from './views/admin/StyleMenu.vue'
import UserSignUp from './views/user/UserSignup.vue'
import StoreSignUp from './views/user/StoreSignup.vue'
import StoreManegeMent from './views/admin/StoreManegeMent.vue'
import StoreList from './views/user/StoreList.vue'
import MenuList from './views/user/MenuList.vue'
import MenuInfo from './views/store/MenuInfo.vue'
import text from './views/store/text.vue'
import OrderList from './views/user/OrderList.vue'
import OrderStatus from './views/admin/OrderStatus.vue'
export default [

    {
        path : '/',
        name : 'main',
        component : main
    },

    {
        path : '/Menu',
        name : 'Menu',
        component : Menu
    },
    {
        path : '/Table',
        name : 'Table',
        component : Table
    },
    {
        path : '/ChangeInfo',
        name : 'ChangeInfo',
        component : ChangeInfo
    },
    {
        path : '/StyleMenu',
        name : 'StyleMenu',
        component : StyleMenu
    },

    {
        path : '/StoreSignup',
        name : 'StoreSignUp',
        component : StoreSignUp
    },
    {
        path : '/StoreManegeMent',
        name : 'StoreManegeMent',
        component : StoreManegeMent
    },
    {
        path : '/UserSignup',
        name : 'UserSignUp',
        component : UserSignUp
    },
    {
        path : '/StoreList',
        name : 'StoreList',
        component : StoreList,
    },
    {
        path : '/MenuList',
        name : 'MenuList',
        component : MenuList,
    },
    {
        path : '/MenuInfo',
        name : 'MenuInfo',
        component : MenuInfo
    },

    {
        path : '/text',
        name : 'text',
        component : text
    },
    {
        path : '/OrderList',
        name : 'OrderList',
        component : OrderList
    },
    {
        path : '/OrderStatus',
        name : 'OrderStatus',
        component : OrderStatus
    }
   
]