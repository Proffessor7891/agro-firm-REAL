import React from 'react';
import s from './style.module.scss';
import preferens_bg from '../../../assets/index/preferens_bg.png';
import loop from '../../../assets/index/loop.png';
import accept from '../../../assets/index/accept.svg';
import { TitleText, Custom_option } from '../../../component/index';
import Option__block from './Option__block';



const Section_preferens = React.memo(function Section_preferens(props) {
    return (
        <>
            <section className={s.section_preferens}>
                <div className={s.preferens_bg}>
                    <img src={preferens_bg} alt="preferens background" />
                </div>
                <div className={`${s.preferens__block} container`}>
                    <div className={s.preferens_content}>
                        <div className={s.preferens_titles}>
                            <TitleText animation={true} tag='div' weight='700' size='2' color='white'>
                                Поживний
                            </TitleText>
                            <TitleText animation={true} tag='div' weight='700' size='2' color='green'>
                                Екологічний
                            </TitleText>
                            <TitleText animation={true} tag='div' weight='700' size='2' color='orange'>
                                Результативний
                            </TitleText>
                        </div>
                        <TitleText tag='div' weight='700' size='5' color='white'>
                            Мікориза - це симбіоз міцелію грибів із коренями рослин
                        </TitleText>
                        <Option__block />
                    </div>
                    <div className={s.preferens_img}>
                        <img src={loop} alt="preferens loop" />
                    </div>
                </div>
            </section>
        </>
    )
});

export default Section_preferens;
