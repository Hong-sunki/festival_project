import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'
import Navgation from './navgation';

const Header = memo(({userId, authService}) => (
        <header className={styles.header}>
           <div className={styles.row}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src="./images/logo2.jpg" alt="logo" />
                    </Link>
                </div>
                
                <Navgation userId={userId} authService={authService}/>
           </div>
        </header>
    ))

export default Header;