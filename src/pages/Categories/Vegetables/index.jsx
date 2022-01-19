import React from 'react';
import s from '../style.module.scss';
import vegetables_bg from '../../../assets/categories/vegetables_bg.png';

import vegetables_table_1 from '../../../assets/categories/vegetables_table_1.svg';
import vegetables_table_2 from '../../../assets/categories/vegetables_table_2.svg';
import { Start_section, TitleText, Custom_slider, Custom_option, Order_btn, Question_section } from '../../../component/index';
import Section_info from '../Section_info';

const Vegetables = React.memo(function Vegetables(props) {

    let slider_img = [{
        alt: 'slider img',
        src: require(`../../../assets/categories/vegetables_2.png`).default
    },
    {
        alt: 'slider img',
        src: require(`../../../assets/categories/vegetables_2.png`).default
    }];



    return (
        <>
            <Start_section title='Овочі' bg={vegetables_bg} />
            <div className={`${s.section} container`}>
                <div className={s.section_content__block}>
                    <div className={s.section_content}>
                        <TitleText style={`${s.section_content_title}`} tag='div' weight='700' size='5' color='black'>
                            Результати
                        </TitleText>
                        <TitleText style={`${s.section_content_subtitle}`} tag='div' weight='700' size='6' color='black'>
                            Перець. с. В. Копані, Олешки, Херсонська
                            1. Контроль кореневих хвороб
                        </TitleText>
                        <div className={s.section_content_img}>
                            <img src={vegetables_table_1} alt="vegetables_table" />
                        </div>
                        <TitleText style={`${s.section_content_subtitle}`} tag='div' weight='700' size='6' color='black'>
                            Перець. с. В. Копані, Олешки, Херсонська
                            2. Контроль хвороб тканин рослин
                        </TitleText>
                        <div className={s.section_content_img}>
                            <img src={vegetables_table_2} alt="vegetables_table" />
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

export default Vegetables;
