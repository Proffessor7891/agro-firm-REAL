import React from 'react';
import s from './style.module.scss';
import section_bg from '../../assets/index/question_bg.png';
import { TitleText } from '../index';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../constans/routes';
import { Footer_logo } from '../../assets/svg/Logo';
import { additional_item } from '../../api/text/additional_item';
import StarWay from './StarWay';


const Footer = React.memo(function Footer(props) {
    let additional_json = additional_item();

    return (
        <>
            <section className={`${s.section} container`}>
                <div className={s.section__block}>
                    <div className={s.section_img}>
                        <Link to={publicRoutes.INDEX} className={s.section_logo} >
                            <Footer_logo />
                        </Link>
                        <TitleText style={s.section_img_text} tag='div' weight='400' size='10' color='white'>
                            © 2021. Агрогров. Всі права захищено
                        </TitleText>
                    </div>

                    <div className={s.section_content}>
                        <TitleText style={s.section_title} tag='div' weight='700' size='9' color='white'>
                            Інфо
                        </TitleText>
                        <Link to={publicRoutes.ABOUT} className={s.section_nav_link} >
                            <TitleText tag='span' weight='400' size='10' color='white'>
                                Про нас
                            </TitleText>
                        </Link>
                        <Link to={publicRoutes.MYCORRHIZA} className={s.section_nav_link} >
                            <TitleText tag='span' weight='400' size='10' color='white'>
                                Мікориза ВеллВам
                            </TitleText>
                        </Link>

                        <Link to={publicRoutes.GALLERY} className={s.section_nav_link} >
                            <TitleText tag='span' weight='400' size='10' color='white'>
                                Галерея
                            </TitleText>
                        </Link>
                        <Link to={publicRoutes.BLOG} className={s.section_nav_link} >
                            <TitleText tag='span' weight='400' size='10' color='white'>
                                Статті
                            </TitleText>
                        </Link>
                        <a className={s.section_nav_link} href="https://tviilis.org/" target="_blank">
                            <TitleText tag='span' weight='400' size='10' color='white'>
                                Проєкт ГО ТВІЙ ЛІС
                            </TitleText>
                        </a>
                    </div>
                    <div className={`${s.section_content}`}>
                        <TitleText style={s.section_title} tag='div' weight='700' size='9' color='white'>
                            Культури і технології
                        </TitleText>
                        {additional_json &&
                            additional_json.map((item, index) => {
                                return (
                                    <Link to={item.path} className={s.section_nav_link} key={`${item.id}_${index}`} >
                                        <TitleText tag='span' weight='400' size='10' color='white'>
                                            {item.name}
                                        </TitleText>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
                <StarWay />
            </section>
        </>
    )
});

export default Footer;
