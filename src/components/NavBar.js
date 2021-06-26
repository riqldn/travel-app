import { Link } from 'react-router-dom';
import {useState} from 'react';


const NavBar = ({color}) => {

const [clicked, setClicked] = useState(false);
const togglemenu =  () => {
    setClicked(!clicked);

}
const closemenu = () => {
    setClicked(false)
}
    return (<nav className="navbar" id={color}>
        <div className="nav-container">
            <Link className="logo" to="/">Travigo</Link>
            <div className="menutoggle" onClick={togglemenu}>
                <span className={clicked ? 'bar active' : 'bar'}></span>
                <span className={clicked ? 'bar active' : 'bar'}></span>
                <span className={clicked ? 'bar active' : 'bar'}></span>
            </div>
            <ul className={clicked ? 'menu active' : 'menu'}>
                <li className="menu-item">
                    <Link className="menu-link" to="/" onClick={closemenu}>Home</Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" onClick={closemenu}>About</Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" onClick={closemenu}>Contact Us</Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" to="/signup" onClick={closemenu}>Sign Up</Link>
                </li>
            </ul>
        </div>

    </nav>)
}

export default NavBar;