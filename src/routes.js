import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';
// 业务-网购
import OnlineFirstLevel from './pages/line/FirstLevel.vue';
import OnlineSecondLevel from './pages/line/SecondLevel.vue';
import OnlineThirdLevel from './pages/line/ThirdLevel.vue';
import OnlineProductList from './pages/line/ProductList.vue';
import OnlineProduct from './pages/line/Product.vue';
// 业务-新品
import NewFirstLevel from './pages/new/FirstLevel.vue';
import NewSecondLevel from './pages/new/SecondLevel.vue';
import NewThirdLevel from './pages/new/ThirdLevel.vue';
import NewProductList from './pages/new/ProductList.vue';
import NewProduct from './pages/new/Product.vue';

// 咨询
import Consultation from './pages/consultation/Index.vue';
import About from './pages/consultation/About.vue';
import Contact from './pages/consultation/Contact.vue';
import News from './pages/consultation/News.vue';
import Policy from './pages/consultation/Policy.vue';
import Rules from './pages/consultation/Rules.vue';
import Sharing from './pages/consultation/Sharing.vue';
import Terms from './pages/consultation/Terms.vue';
import Tips from './pages/consultation/Tips.vue';

// 登录
import Login from './pages/common/Login.vue';
import Forget from './pages/common/Forget.vue';
import Register from './pages/common/Register.vue';

// 购物车
import CartList from './pages/cart/List.vue';

export default [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/Login/',
        component: Login,
    },
    {
        path: '/Forget/',
        component: Forget,
    },
    {
        path: '/Register/',
        component: Register,
    },
    {
        path: '/CartList/',
        component: CartList,
    },
    {
        path: '/consultation/',
        routes: [
            {
                path: '/Index/',
                component: Consultation,
            },
            {
                path: '/About/',
                component: About,
            },
            {
                path: '/Contact/',
                component: Contact,
            },
            {
                path: '/News/',
                component: News,
            },
            {
                path: '/Policy/',
                component: Policy,
            },
            {
                path: '/Rules/',
                component: Rules,
            },
            {
                path: '/Sharing/',
                component: Sharing,
            },
            {
                path: '/Terms/',
                component: Terms,
            },
            {
                path: '/Tips/',
                component: Tips
            }
        ],
    },
    {
        path: '/line/',
        routes: [
            {
                path: '/FirstLevel/',
                component: OnlineFirstLevel,
            },
            {
                path: '/SecondLevel/',
                component: OnlineSecondLevel,
            },
            {
                path: '/ThirdLevel/',
                component: OnlineThirdLevel,
            },
            {
                path: '/ProductList/',
                component: OnlineProductList,
            },
            {
                path: '/Product/',
                component: OnlineProduct,
            }
        ],
    },
    {
        path: '/new/',
        routes: [
            {
                path: '/FirstLevel/',
                component: NewFirstLevel,
            },
            {
                path: '/SecondLevel/',
                component: NewSecondLevel,
            },
            {
                path: '/ThirdLevel/',
                component: NewThirdLevel,
            },
            {
                path: '/ProductList/',
                component: NewProductList,
            },
            {
                path: '/Product/',
                component: NewProduct,
            }
        ],
    },
    {
        path: '/panel-left/',
        component: PanelLeftPage,
    },
    {
        path: '/panel-right/',
        component: PanelRightPage,
    },
    {
        path: '/about/',
        component: AboutPage,
    },
    {
        path: '/form/',
        component: FormPage,
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];
