import React from 'react';
import s from './style.module.scss';
import first_bg from '../../../assets/index/index_bg_1.png';
import { Additional_navigate, TitleText } from '../../../component/index';



const Section_main = React.memo(function Section_main(props) {
    return (
        <>
            <section className={s.section_main}>
                <div className={s.index_bg}>
                    <img src={first_bg} alt="background" />
                </div>
                <Additional_navigate />
                <div className={`${s.main_content__block} container`}>
                    <div className={s.main_content}>
                        <TitleText animation={true} tag='span' weight='700' size='3' color='white'>
                            AGROGROWDEVELOP
                        </TitleText>
                        <TitleText animation={true} tag='span' weight='400' size='4' color='orange'>
                            зв'язок з природою
                        </TitleText>
                    </div>
                    <div className={s.main_content}>
                        <TitleText tag='span' weight='400' size='7' color='white'>
                            Біологічні препарати для вирощування сільгосппродукції
                        </TitleText>
                    </div>
                </div>
            </section>
        </>
    )
});

export default Section_main;
