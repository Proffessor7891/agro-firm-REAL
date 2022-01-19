import React from 'react';
import s from './style.module.scss';
import { publicRoutes } from '../../../constans/routes';
import { TitleText } from '../../index';
import { Link } from 'react-router-dom';



const Header_nav = React.memo(function Header_nav(props) {
    return (
        <div className={`${s.header_nav__block} ${props.active_menu ? s.active : ''}`}>
            <nav className={`${s.header_nav}`}>
                <Link to={publicRoutes.ABOUT} className={s.header_nav_link} >
                    <TitleText tag='span' weight='700' size='9' color='white'>
                        Про нас
                    </TitleText>
                </Link>
                <Link to={publicRoutes.MYCORRHIZA} className={s.header_nav_link} >
                    <TitleText tag='span' weight='700' size='9' color='white'>
                        Мікориза ВеллВам
                    </TitleText>
                </Link>

                <Link to={publicRoutes.GALLERY} className={s.header_nav_link} >
                    <TitleText tag='span' weight='700' size='9' color='white'>
                        Галерея
                    </TitleText>
                </Link>

                <a className={s.header_nav_link} href="https://tviilis.org/" target="_blank">
                    <TitleText tag='span' weight='700' size='9' color='white'>
                        Проєкт ГО ТВІЙ ЛІС
                    </TitleText>
                </a>
            </nav>
        </div>
    )
});

export default Header_nav;
