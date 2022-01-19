import React from 'react';
import s from './style.module.scss';
import { Additional_navigate, TitleText } from '../index';


const Start_section = React.memo(function Start_section(props) {

    return (
        <>
            <section className={s.section}>
                <div className={s.section_bg}>
                    <img src={props.bg} alt="background" />
                </div>
                <Additional_navigate />
                <div className="container">
                    <TitleText style={s.section_title} tag='div' weight='700' size='3' color='white'>
                        {props.title}
                    </TitleText>
                </div>
            </section>
        </>
    )
});

export default Start_section;
