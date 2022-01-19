import React from 'react';
import s from './style.module.scss';



const Custom_option = React.memo(function Custom_option(props) {
    let dot;

    if (props.svg == 'green') {
        dot = <span className={s.dot_green}></span>
    } else if (props.svg == 'orange') {
        dot = <span className={s.dot_orange}></span>
    } else if (props.svg == 'number') {
        dot = <span className={s.dot_number}>{props.number}</span>
    } else {
        dot = <img src={props.svg} alt="svg" />;
    }


    return (
        <div className={`${s.custom_option} ${props.style != undefined ? props.style : ''} ${props.svg == 'number' ? s.number_option : ''}`}>
            <div className={`${s.custom_option_dot} ${props.direction == 'center' ? s.center : ''}`}>
                {dot}
            </div>
            <div className={s.custom_option_text}>
                {props.children}
            </div>
        </div>
    )
});

export default Custom_option;
