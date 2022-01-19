import React from 'react';
import s from '../style.module.scss';
import corn_bg from '../../../assets/categories/corn_bg.png';
import corn_table from '../../../assets/categories/corn_table.svg';
import { Start_section, TitleText, Custom_slider, Custom_option, Order_btn, Question_section } from '../../../component/index';
import Section_info from '../Section_info';


const Corn = React.memo(function Corn(props) {

    let slider_img = [{
        alt: 'slider img',
        src: require(`../../../assets/categories/corn_1.png`).default
    },
    {
        alt: 'slider img',
        src: require(`../../../assets/categories/corn_2.png`).default
    }];



    return (
        <>
            <Start_section title='Кукурудза' bg={corn_bg} />
            <div className={`${s.section} container`}>
                <div className={s.section_content__block}>
                    <div className={s.section_content}>
                        <TitleText style={`${s.section_content_title}`} tag='div' weight='700' size='5' color='black'>
                            Результати
                        </TitleText>
                        <TitleText style={`${s.section_content_subtitle}`} tag='div' weight='700' size='6' color='black'>
                            Кукурудза ТОВ “Дружба Нова” с. Світличне, Чернігівська обл.
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='10' color='black'>
                            прибавка 5,44 -6,02 ц/га
                        </TitleText>
                        <div className={s.section_content_img}>
                            <img src={corn_table} alt="corn_table" />
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

export default Corn;
