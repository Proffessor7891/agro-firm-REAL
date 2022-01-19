import React from 'react';
import s from './style.module.scss';
import section_bg from '../../assets/index/question_bg.png';
import { TitleText, CustomBtn } from '../index';
import Consultation_btn from '../Consultation_btn';



const Question_section = React.memo(function Question_section(props) {

    return (
        <>
            <section className={`${s.section} container`}>
                <div className={s.section_bg}>
                    <img src={section_bg} alt="section background" />
                </div>
                <div className={s.section_content}>
                    <TitleText style={s.section_title} animation={true} tag='div' weight='700' size='3' color='white'>
                        Залишились запитаня?
                    </TitleText>
                    <TitleText style={s.section_text} tag='div' weight='700' size='5' color='white'>
                        Для детальної інформації звя’жіться з нашими консультантами
                    </TitleText>
                </div>
                <div className={s.section_btn__block}>
                    <Consultation_btn />
                    <CustomBtn style={s.section_btn_phone} tag='a' color='white' href='tel:380972416037'>
                        <TitleText tag='span' weight='700' size='10' color='white'>
                            Зателефонувати
                        </TitleText>
                    </CustomBtn>
                </div>
            </section>
        </>
    )
});

export default Question_section;
