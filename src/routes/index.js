import index from '../pages/Index';
import shop from '../pages/Shop';
import about from '../pages/About';
import product_details from '../pages/Product_Detail';
import blog from '../pages/Blog';
import blog_detail from '../pages/Blog_Details';
import login from '../pages/Login';
import cart from '../pages/Cart';
import confirmation from '../pages/Confirmation';
import checkout from '../pages/CheckOut';
import contact from '../pages/Contact';
import routes from '../config/route';
export const publicRoutes=[
    { path: routes.index, component: index },
    { path: routes.shop, component: shop },
    { path: routes.about, component: about },
    { path: routes.product_details, component: product_details },
    { path: routes.blog, component: blog },
    { path: routes.blog_details, component: blog_detail },
    { path: routes.login, component: login },
    { path: routes.cart, component: cart },
    { path: routes.confirmation, component: confirmation },
    { path: routes.checkout, component: checkout },
    { path: routes.contact, component: contact },
];