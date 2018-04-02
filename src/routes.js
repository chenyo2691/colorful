import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';
// 业务
import FirstLevel from './pages/line/FirstLevel.vue';
import SecondLevel from './pages/line/SecondLevel.vue';
import ThirdLevel from './pages/line/ThirdLevel.vue';
import ProductList from './pages/line/ProductList.vue';
import Product from './pages/line/Product.vue';

// 登录
import Login from './pages/Login.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: Login,
  },
  {
    path: '/line/',
    routes: [
      {
        path: '/FirstLevel/',
        component: FirstLevel,
      },
      {
        path: '/SecondLevel/',
        component: SecondLevel,
      },
      {
        path: '/ThirdLevel/',
        component: ThirdLevel,
      },
      {
        path: '/ProductList/',
        component: ProductList,
      },
      {
        path: '/Product/',
        component: Product,
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
