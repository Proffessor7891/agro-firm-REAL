import React from 'react';
import s from '../style.module.scss';
import crops_bg from '../../../assets/categories/crops_bg.png';
import crops_table_1 from '../../../assets/categories/crops_table_1.svg';
import crops_table_2 from '../../../assets/categories/crops_table_2.svg';
import { Start_section, TitleText, Custom_slider, Custom_option, Order_btn, Question_section } from '../../../component/index';
import Section_info from '../Section_info';


const Crops = React.memo(function Crops(props) {

    let slider_img = [{
        alt: 'slider img',
        src: require(`../../../assets/categories/crops_1.png`).default
    },
    {
        alt: 'slider img',
        src: require(`../../../assets/categories/crops_2.png`).default
    }];



    return (
        <>
            <Start_section title='Пшениця/зернові' bg={crops_bg} />
            <div className={`${s.section} container`}>
                <div className={s.section_content__block}>
                    <div className={s.section_content}>
                        <TitleText style={`${s.section_content_title}`} tag='div' weight='700' size='5' color='black'>
                            Результати
                        </TitleText>
                        <TitleText style={`${s.section_content_subtitle}`} tag='div' weight='700' size='6' color='black'>
                            Ярий ячмінь «Аверс», богара УКРНІЗЗ,
                            с. Наддніпрянське
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='10' color='black'>
                            прибавка 13,0-18,5%
                        </TitleText>
                        <div className={s.section_content_img}>
                            <img src={crops_table_1} alt="crops_table" />
                        </div>
                        <TitleText style={`${s.section_content_subtitle}`} tag='div' weight='700' size='6' color='black'>
                            Озима пшениця, богара ТОВ «Робуста Агро»,
                            с. Брилівка, Олешки, Херсон
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='10' color='black'>
                            прибавка 31%
                        </TitleText>
                        <div className={s.section_content_img}>
                            <img src={crops_table_2} alt="crops_table" />
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

export default Crops;
