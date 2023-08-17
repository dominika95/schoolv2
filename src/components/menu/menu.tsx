import { Link } from "react-router-dom";
import { PATH } from '../router';
import './menu.scss';

export function Menu() {

    return (
        <nav className="menu-container">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><Link to={PATH.app}>Our Work</Link></li>
                <li><Link to={PATH.main}>About</Link></li>
                <li><Link to={PATH.app}>Careers</Link></li>
                <li><Link to={PATH.main}>Contact</Link></li>
            </ul>
        </nav>
    )
}