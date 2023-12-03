import { useEffect } from "react";
import {getImageUrl} from "../../utils.jsx";

import styles from "./Navbar.module.css";
import { useState } from "react";

export const Navbar = ()=>{
    const [menuopen,setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Nuttasit</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuopen ? getImageUrl("nav/closeIcon.png") :getImageUrl("nav/menuIcon.png")} alt="menu-button" onClick={()=> setMenuOpen(!menuopen)} />
                <ul className={`${styles.menuItems} ${menuopen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
                    <li>
                     <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                     <a href="#project">Project</a>
                    </li>
                    <li>
                     <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};