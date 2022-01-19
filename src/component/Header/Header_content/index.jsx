import React from 'react';
import s from './style.module.scss';
import { Header_logo } from '../../../assets/svg/Logo';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../../constans/routes';
import Header_nav from '../Header_nav';
import Burger_menu from '../Burger_menu';

const Header_content = React.memo(function Header_content(props) {
    const [isActive, setActive] = React.useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className={`${s.header_content} ${props.scroll ? s.scroll : ''} container`}>
            <Link to={publicRoutes.INDEX} className={s.header_logo} >
                <Header_logo />
            </Link>
            <Header_nav active_menu={isActive} />
            <Burger_menu active_menu={isActive} func={handleToggle} />
        </div>
    )
});

export default Header_content;
