import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/form-example">Form example</Link>
                    </li>
                    <li>
                        <Link to="/form-builder">Form builder</Link>
                    </li>
                </ul>
            </nav>
            <hr/>
            <div>
                <Outlet />
            </div>

        </>
    )
};

export default Layout;