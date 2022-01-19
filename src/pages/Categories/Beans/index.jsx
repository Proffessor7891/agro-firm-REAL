import React from 'react';
import s from '../style.module.scss';
import beans_bg from '../../../assets/categories/beans_bg.png';

import beans_table_1 from '../../../assets/categories/beans_table_1.png';
import beans_table_2 from '../../../assets/categories/beans_table_2.png';
import { Start_section, TitleText, Custom_slider, Custom_option, Order_btn, Question_section } from '../../../component/index';
import Section_info from '../Section_info/index';

const Beans = React.memo(function Beans(props) {

    let slider_img_1 = [{
        alt: 'slider img',
        src: require(`../../../assets/categories/beans_1.png`).default
    },
    {
        alt: 'slider img',
        src: require(`../../../assets/categories/beans_2.png`).default
    },
    {
        alt: 'slider img',
        src: require(`../../../assets/categories/beans_3.png`).default
    },];

    let slider_img_2 = [{
        alt: 'slider img',
        src: require(`../../../assets/categories/beans_4.png`).default
    },
    {
        alt: 'slider img',
        src: require(`../../../assets/categories/beans_5.png`).default
    },
    {
        alt: 'slider img',
        src: require(`../../../assets/categories/beans_6.png`).default
    }];



    return (
        <>
            <Start_section title='Овочі' bg={beans_bg} />
            <div className={`${s.section} container`}>
                <div className={s.section_content__block}>
                    <div className={s.section_content}>
                        <TitleText style={`${s.section_content_title}`} tag='div' weight='700' size='5' color='black'>
                            Результати
                        </TitleText>
                        <TitleText style={`${s.section_content_subtitle}`} tag='div' weight='700' size='6' color='black'>
                            Соняшник. ТОВ Тавріда Плюс, с. Урожайне, Херсонська
                        </TitleText>
                        <div className={s.section_content_img}>
                            <img src={beans_table_1} alt="beans_table" />
                        </div>
                        <div className={s.section_content_img}>
                            <img src={beans_table_2} alt="beans_table" />
                        </div>
                    </div>
                </div>
                <Section_info />
            </div>
            <div className={`${s.section_slider} container`}>
                <TitleText style={`${s.section_slider_title}`} tag='div' weight='700' size='5' color='black'>
                    Галерея Соняшників
                </TitleText>
                <Custom_slider slider='first' slides={slider_img_1} />
                <TitleText style={`${s.section_slider_title}`} tag='div' weight='700' size='5' color='black'>
                    Галерея Бобових
                </TitleText>
                <Custom_slider slider='second' slides={slider_img_2} />
            </div>
            <Question_section />
        </>
    )
});

export default Beans;
