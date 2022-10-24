import Layout from "../pages/Layout";
import Contact from "../pages/contact"
import Blog from "../pages/blog"
import Home from "../pages/home";
import FormExample from "../pages/forms/native";
import FormBuilder from "../pages/forms/builder";

export default [
    {

        component : <Layout/>,
        attributes: {
            path: "/",
        },
        children:[
            {
                component: <Home/>,
                attributes: {
                    index : "index"
                }
            },
            {

                component: <Contact/>,
                attributes: {
                    path: "contact",
                }
            },
            {

                component: <Blog/>,
                attributes: {
                    path: "blog"
                }
            },
            {

                component: <FormExample/>,
                attributes: {
                    path: "form-example"
                }
            },
            {

                component: <FormBuilder/>,
                attributes: {
                    path: "form-builder"
                }
            }
        ]
    }
]



