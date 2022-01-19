import React from 'react';
import s from './style.module.scss';
import { TitleText } from '../index';
import { Link } from 'react-router-dom';


const Post_card = React.memo(function Post_card(props) {
    return (
        <>
            <div className={`${s.post_profile} ${props.style != undefined ? props.style : ''}`}>
                <div className={s.post_img}>
                    <img src={props.img} alt={props.alt} />
                </div>
                <div className={s.post_content}>
                    <TitleText style={s.post_title} tag='div' weight='700' size='5' color={props.theme}>
                        {props.title}
                    </TitleText>
                    <TitleText style={s.post_text} tag='div' weight='400' size='10' color={props.theme}>
                        {props.text}
                    </TitleText>

                    <Link to={props.link} className={s.post_link} >
                        <TitleText tag='span' weight='700' size='10' color={props.theme}>
                            {props.detail_btn}
                        </TitleText>
                    </Link>
                </div>
            </div>
        </>
    );
});

export default Post_card;
