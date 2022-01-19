import React from 'react';
import s from './style.module.scss';
import TitleText from '../../TitleText/index';
import { Link } from 'react-router-dom';



const Additional_nav_profile = React.memo(function Additional_nav_profile(props) {
    return (
        <>
            <Link to={props.path} className={s.additional_nav_profile} >
                <div className={s.additional_nav_img}>
                    <props.svg />
                </div>
                <TitleText tag='span' weight='500' size='10' color='white'>
                    {props.text}
                </TitleText>
            </Link>
        </>
    )
});

export default Additional_nav_profile;
