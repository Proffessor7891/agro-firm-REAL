import React from 'react';
import s from '../style.module.scss';
import garden_bg from '../../../assets/categories/garden_bg.png';
import { Start_section, TitleText, Custom_slider, Custom_option, Order_btn, Question_section } from '../../../component/index';
import Section_info from '../Section_info';


const Garden = React.memo(function Garden(props) {

    let slider_img = [{
        alt: 'slider img',
        src: require(`../../../assets/categories/garden_1.png`).default
    },
    {
        alt: 'slider img',
        src: require(`../../../assets/categories/garden_2.png`).default
    }];



    return (
        <>
            <Start_section title='Сади та ягідники' bg={garden_bg} />
            <div className={`${s.section} container`}>
                <div className={s.section_content__block}>
                    <div className={s.section_content}>
                        <TitleText style={`${s.section_content_title}`} tag='div' weight='700' size='5' color='black'>
                            Результати
                        </TitleText>

                        <div className={s.section_content_img}>
                            <iframe src="https://www.youtube.com/embed/B0DrWAUsNSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <Section_info />
            </div>
            <div className={`${s.section_slider} container`}>
                <TitleText style={`${s.section_slider_title}`} tag='div' weight='700' size='5' color='black'>
                    Галерея
                </TitleText>
                <Custom_slider slider='first' slides={slider_img} />
            </div>
            <Question_section />
        </>
    )
});

export default Garden;
