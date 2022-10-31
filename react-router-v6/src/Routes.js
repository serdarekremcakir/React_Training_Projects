import HomeLayout from "./pages/Home/HomeLayout"
import Home from './pages/Home/Home'
import Contact from './pages/Contact'
import About from './pages/About/About'
import AboutLayout from './pages/About/AboutLayout'
import Mission from './pages/About/Mission'
import Vision from './pages/About/Vision'
import Profile from './pages/Profile'
import PrivateRoute from './pages/PrivateRoute'
import Auth from './pages/Auth/Auth'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import NotFound from './pages/NotFound'


const routes = [{
    path: "/",
    element: <HomeLayout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "contact",
            element: <Contact />,
        },
        {
            path: "about",
            element: <AboutLayout />,
            children: [
                {
                    index: true,
                    element: <About />
                },
                {
                    path: "mission",
                    authentication:true,
                    element: <Mission />
                },
                {
                    path: "vision/:title-:id",
                    element: <Vision />
                }
            ]
        },
        {
            path: "profile",
            authentication: true,
            element: <PrivateRoute><Profile /></PrivateRoute>
        }
    ]
},
{
    path: "auth",
    children: [{
        path: "login",
        element: <Login />
    },
    {
        path: "signup",
        element: <Register />
    }

    ]
},
{
    path: "*",
    element: <NotFound />
}

]

const authMap = (routes) =>
    routes.map(route => {
        if (route?.authentication) {
            route.element = <PrivateRoute>{route.element}</PrivateRoute>
        }
        if (route?.children) {
            route.children = authMap(route.children)
        }
        return route;
    })


export default authMap(routes)