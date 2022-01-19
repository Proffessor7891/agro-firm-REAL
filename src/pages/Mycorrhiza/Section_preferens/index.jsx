import React from 'react'
import { TitleText, Custom_option } from '../../../component';
import { preferens_items, usage_items, unusage_items } from '../../../api/text/mycorrhiza';
import download_img from '../../../assets/index/path-arrow.svg';
import plus from '../../../assets/mycorrhiza/plus.svg';
import minus from '../../../assets/mycorrhiza/minus.svg';
import s from './style.module.scss';

function Section_preferens() {
    return (
        <section className={`${s.section} container`}>
            <TitleText style={`${s.section_title}`} tag='div' weight='700' size='5' color='black'>
                Переваги “Веллвам”
            </TitleText>
            <div className={s.section__block}>
                {preferens_items &&
                    preferens_items.map((item, index) => {
                        return (
                            <div className={s.section_profile} key={`${index}_${item.alt}`}>
                                <img src={item.src} alt={item.alt} />
                                <TitleText style={`${s.section_profile_title}`} tag='div' weight='700' size='9' color='black'>
                                    {item.title}
                                </TitleText>
                                <TitleText style={`${s.section_profile_text}`} tag='div' weight='400' size='10' color='black'>
                                    {item.text}
                                </TitleText>
                            </div>
                        )
                    })
                }

            </div>

            <div className={s.info__block}>
                <a href='#' download className={`${s.download_item} ${s.hvr_wobble_skew}`}>
                    <TitleText style={`${s.download_item_text}`} tag='div' weight='700' size='5' color='black'>
                        Свідоцтво про державну реєстрацію
                    </TitleText>
                    <img src={download_img} alt="download" />
                </a>
                <div className={s.info_content}>
                    <TitleText style={`${s.info_content_text}`} tag='div' weight='700' size='5' color='black'>
                        Вплив хімічних фунгіцидів на «ВеллВАМ»
                    </TitleText>
                    <div className={s.info_content_profile}>
                        <TitleText style={`${s.info_content_profile_title}`} tag='div' weight='700' size='9' color='green'>
                            Протруйники
                        </TitleText>
                        <TitleText style={`${s.info_content_profile_text}`} tag='div' weight='400' size='9' color='black'>
                            Фунгіциди для обробки насіння, як правило, безпечні внаслідок низьких використовуваних норм
                        </TitleText>
                    </div>
                    <div className={s.info_content_profile}>
                        <TitleText style={`${s.info_content_profile_title}`} tag='div' weight='700' size='9' color='green'>
                            Листові
                        </TitleText>
                        <TitleText style={`${s.info_content_profile_text}`} tag='div' weight='400' size='9' color='black'>
                            Листові несистемні фунгіциди використовуйте в любий час
                        </TitleText>
                    </div>
                    <div className={s.info_content_profile}>
                        <TitleText style={`${s.info_content_profile_title}`} tag='div' weight='700' size='9' color='green'>
                            Грунтові
                        </TitleText>
                        <TitleText style={`${s.info_content_profile_text}`} tag='div' weight='400' size='9' color='black'>
                            Уникайте ґрунтових фунгіцидів за два тижні до інокуляції (довше, якщо системна) і через чотири тижні після внесення
                        </TitleText>
                    </div>
                </div>
            </div>

            <div className={s.usage__wrap}>
                <TitleText style={`${s.usage_title}`} tag='div' weight='700' size='5' color='black'>
                    Фунгіциди, дозволені та заборонені для спільного використання
                </TitleText>
                <div className={s.usage__block}>
                    <div className={`${s.usage_profile} ${s.usage_profile_1}`}>
                        <TitleText style={`${s.usage_profile_title}`} tag='div' weight='700' size='9' color='green'>
                            Дозволені
                        </TitleText>
                        <div className={s.usage_item__block}>
                            {usage_items &&
                                usage_items.map((item, index) => {
                                    return (
                                        <Custom_option style={s.usage_item} svg={plus} key={`${item}_${index}`}>
                                            <TitleText tag='span' weight='400' size='9' color='black'>
                                                {item}
                                            </TitleText>
                                        </Custom_option>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className={`${s.usage_profile} ${s.usage_profile_2}`}>
                        <TitleText style={`${s.usage_profile_title}`} tag='div' weight='700' size='9' color='red'>
                            Заборонені
                    </TitleText>
                        <div className={s.usage_item__block}>
                            {unusage_items &&
                                unusage_items.map((item, index) => {
                                    return (
                                        <Custom_option style={s.usage_item} svg={minus} key={`${item}_${index}`}>
                                            <TitleText tag='span' weight='400' size='9' color='black'>
                                                {item}
                                            </TitleText>
                                        </Custom_option>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section_preferens;
