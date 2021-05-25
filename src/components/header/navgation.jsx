import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './navgation.module.css'

const Navgation = memo(({userId, authService}) => {
    const onLogout = useCallback(() => {
        authService.logout()
        alert('로그아웃 되었습니다.')
    },[authService])

    return (
    <>
        <nav>
            
            <ul className={styles.menu}>
                {
                userId &&
                    <li>
                        <button onClick={onLogout}><i class="fas fa-lock-open"></i> 로그아웃</button>
                    </li>
                }
                {
                !userId &&
                    <li>
                        <Link to={{pathname: '/login'}}><i class="fas fa-lock"></i> 로그인 </Link>
                    </li>
                }
                    <li>
                        <Link to={{pathname: '/mypage'}}> 마이페이지 </Link>
                    </li>
                    <li>
                        <Link to={{pathname: '/list'}}> 달력으로 선택</Link>
                    </li>
            </ul>
        </nav>
    </>
    )
})
export default Navgation;

