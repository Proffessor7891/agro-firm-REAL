import React from 'react';
import s from './style.module.scss';



const CustomBtn = React.memo(function CustomBtn(props) {
    let test_admin = false;
    let btn;
    let color = `color_${props.color}`;
    let classes = `${s.btn_standart} ${s[color]} ${props.style != undefined ? props.style : ''} ${test_admin ? s.admin_edit : ''}`;
    let text = props.children;

    let check_href_prop = typeof props.href;

    function events(e) {
        if (test_admin) {
            e.preventDefault();
        }
        if (check_href_prop == 'function') {
            props.href();
        }
    }




    if (check_href_prop == 'string') {
        btn = (
            <props.tag
                onClick={events}
                className={classes}
                href={props.href}
            >
                {text}
            </props.tag >
        )
    } else if (check_href_prop == 'function') {
        btn = (
            <props.tag
                onClick={events}
                className={classes}
                type={props.type}
            >
                {text}
            </props.tag >
        )
    }

    return btn;
});

export default CustomBtn;
