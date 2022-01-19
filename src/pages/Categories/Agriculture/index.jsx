import React from 'react';
import s from '../style.module.scss';
import agriculture_bg from '../../../assets/categories/vegetables_bg.png';
import plus from '../../../assets/categories/plus.svg';
import { Start_section, TitleText, Custom_slider, Custom_option, Order_btn, Question_section } from '../../../component/index';
import Section_info from '../Section_info';


const Agriculture = React.memo(function Agriculture(props) {

    return (
        <>
            <Start_section title='Біопрепарат «ВеллВАМ» в органічному землеробстві.' bg={agriculture_bg} />
            <div className={`${s.section} container`}>
                <div className={s.section_content__block}>
                    <div className={s.section_content}>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='9' color='black'>
                            Використання біопрепарату «ВеллВАМ» є 100% природним та стійким не лише для довкілля, але й для прибутковості фермерів. Практична цінність біологічного препарату «ВеллВАМ» полягає у безпеці для людини, теплокровних тварин і він не забруднює навколишнє природне середовище. Застосування препарату в органічному землеробстві надає певні переваги:
                        </TitleText>
                        <div className={s.section_content_profile}>
                            <img className={s.section_content_profile_bg} src={agriculture_bg} alt="agriculture_bg" />
                            <TitleText style={`${s.section_content_profile_title}`} tag='div' weight='700' size='5' color='white'>
                                Для рослин
                            </TitleText>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Підвищується опір листковим хворобам
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Пом’якшується вплив абіотичних стресів
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Покращується постачання поживних речовин
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Підвищується опір до кореневих патогенів
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Збільшується засвоєння фосфору
                                </TitleText>
                            </Custom_option>
                        </div>
                        <div className={s.section_content_profile}>
                            <img className={s.section_content_profile_bg} src={agriculture_bg} alt="agriculture_bg" />
                            <TitleText style={`${s.section_content_profile_title}`} tag='div' weight='700' size='5' color='white'>
                                Для грунтів
                            </TitleText>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Поновлення ґрунтової біоти
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Поліпшення інфільтрації води та збільшення ємності її у ґрунті
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Посилення опору щодо ущільнення ґрунту та утворенню корки
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Покращення проникнення повітря
                                </TitleText>
                            </Custom_option>
                        </div>
                        <div className={s.section_content_profile}>
                            <img className={s.section_content_profile_bg} src={agriculture_bg} alt="agriculture_bg" />
                            <TitleText style={`${s.section_content_profile_title}`} tag='div' weight='700' size='5' color='white'>
                                Для фермера
                            </TitleText>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Підвищення урожайності від 15 до 45 %, та аж на 300 % (цитрусові, виноград, ананас)
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Зниження навантаження мінеральними добривами
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Збільшення відсотку виживання рослин від сходів до збирання
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Вирощування якісної органічної продукції безпечної для людини
                                </TitleText>
                            </Custom_option>
                            <Custom_option style={s.section_content_option} svg={plus}>
                                <TitleText tag='span' weight='400' size='9' color='white'>
                                    Додаткові прибутки від реалізації органічної продукції
                                </TitleText>
                            </Custom_option>
                        </div>
                    </div>
                </div>
                <Section_info />
            </div>

            <Question_section />
        </>
    )
});

export default Agriculture;
