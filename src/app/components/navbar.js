"use client";
import React, {useState} from "react";
import styles from './navbar.module.css';

function navbar(){
    const [selectedItem, setSelectedItem] = useState('Inicio');

    const handletItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <nav className={styles.navbar}>
            <div 
                className={styles.navbarItem + `${selectedItem === 'Inicio' ? styles.selected :''}`}
                onClick={()=>handletItemClick('Inicio')}
            >
                <a href="#header">Inicio</a>
            </div>
            <div 
                className={styles.navbarItem + `${selectedItem === 'Skills' ? styles.selected :''}`}
                onClick={()=>handletItemClick('Skills')}
            >
                <a href="#info">Skills</a>
            </div>
        </nav>
    );
}

export default navbar;