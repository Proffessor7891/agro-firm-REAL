import React from 'react'
import { TitleText } from '../../../component'
import arrow from '../../../assets/index/path-arrow.svg';
import s from './style.module.scss';


const Custom_select = React.memo(function Custom_select(props) {
    let [active, setActive] = React.useState(false);

    function toggleClass() {
        setActive(!active);
    }

    return (
        <div className={`${s.select_profile} ${active ? s.active : ''} ${props.style ? props.style : ''}`}>
            <div className={s.select_header} onClick={toggleClass}>
                <TitleText style={`${s.select_name}`} tag='div' weight='700' size='9' color='orange'>
                    {props.name}
                </TitleText>
                <img src={arrow} className={s.select_arrow} alt="arrow" />
            </div>
            <div className={s.select_content}>

                {props.children}

            </div>
        </div>
    )
});

export default Custom_select
