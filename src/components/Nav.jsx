import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link
                className="link"
                to='/'>
                <h2>LOGO</h2>
            </Link>

            <Link
                className="link"
                to='/'>
                <h2>Home</h2>
            </Link>

            <Link
                className="link"
                to='/about'>
                <h2>About</h2>
            </Link>

            <h2>NavOption</h2>
            <h2>NavOption</h2>
        </div>
    )
}

export default Nav;