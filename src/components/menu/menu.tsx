import { NavLink } from "react-router-dom";
import { PATH } from '../router';
import './menu.scss';

export function Menu() {
    const isActiveClass = ({ isActive } : {isActive: boolean}) => (isActive ? 'menu-active' : '')

    return (
        <nav className="menu-container">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><NavLink 
                    to={PATH.main}
                    className={isActiveClass}>Strona główna</NavLink></li>
                <li><NavLink to={PATH.niechanowo} className={isActiveClass}>Niechanowo</NavLink></li>
                <li><NavLink to={PATH.prochnowo} className={isActiveClass}>Próchnowo</NavLink></li>
                <li><NavLink to={PATH.szamocin} className={isActiveClass}>Szamocin</NavLink></li>
            </ul>
        </nav>
    )
}