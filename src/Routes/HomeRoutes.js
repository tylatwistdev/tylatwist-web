// import { lazy } from 'react';
import About from '../About';
import Contact from '../Contact';
import Home from '../Home';
import Layout from '../Layout';
import Services from '../Services';


// render - login
// const AuthLogin = Loadable(lazy(() => import('auth/LoginIn')));
// const AuthRegister = Loadable(lazy(() => import('auth/SignUp')));

const HomeRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/services',
            element: <Services />
        },
        {
            path: '/contact',
            element: <Contact />
        }
    ]
};

export default HomeRoutes;