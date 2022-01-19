import React from 'react';
import s from './style.module.scss';



const TitleText = React.memo(function TitleText(props) {
    let test_admin = false;

    let size = `size_${props.size}`;
    let weight = `weight_${props.weight}`;
    let color = `color_${props.color}`;
    let classes = `${s[size]} ${s[weight]} ${s[color]} ${props.animation != undefined ? s.animation : ''} ${props.style != undefined ? props.style : ''} ${test_admin ? s.admin_edit : ''}`;
    let text = props.children;


    function stop_events(e) {
        if (test_admin) {
            e.preventDefault();
        }
    }

    if (props.animation != undefined) {
        function Hover_word(e) {
            let target = e.target;
            target.classList.add(s.active);

            setTimeout(() => {
                target.classList.remove(s.active);
            }, 1400);
        }
        text = text.replace(/\S/g, `$& `).split(' ').slice(0, -1);
        text = text.map((item, index) => {
            if (item == '') {
                return (
                    <span
                        key={`${index}_${item}`}>
                        &#160;
                    </span>
                )
            } else {
                return (
                    <span
                        onMouseEnter={(e) => Hover_word(e)}
                        key={`${index}_${item}`}>
                        {item}
                    </span>
                )
            }

        });
    }
    return (
        <props.tag contentEditable={test_admin}
            onClick={stop_events}
            className={classes}
            href={props.href}
        >
            {text}
        </props.tag >
    )
});

export default TitleText;
