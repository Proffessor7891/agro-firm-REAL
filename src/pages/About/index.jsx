import React from 'react';
import s from './style.module.scss';
import about_bg from '../../assets/about/about.png';
import { Start_section, TitleText, Custom_slider, Custom_option, Career_form } from '../../component';

let preferens_1 = require(`../../assets/about/pref_1.png`).default;
let preferens_2 = require(`../../assets/about/pref_2.png`).default;
let plus = require(`../../assets/about/plus.svg`).default;


const About = React.memo(function About(props) {
    let slider_img = {
        first: [{
            alt: 'slider img',
            src: require(`../../assets/about/slide_1.png`).default
        },
        {
            alt: 'slider img',
            src: require(`../../assets/about/slide_2.png`).default
        },
        ],
        second: [{
            alt: 'slider img',
            src: require(`../../assets/about/slide_3.png`).default
        },
        {
            alt: 'slider img',
            src: require(`../../assets/about/slide_4.png`).default
        },
        ],
    }
    return (
        <div className={s.main_about_section}>
            <Start_section title='Про нас' bg={about_bg} />
            <section className={`${s.section}`}>
                <div className={s.section__block}>
                    <TitleText style={`${s.section_text} ${s.section_text_1}`} tag='div' weight='400' size='9' color='black'>
                        За кожним проектом чи ідеєю стоять люди чи людина. Ідея нашого проекту зародилась у нашій сім’ї. Це, мабуть, досить оригінально в наш час відверто повідомити вам про мотивацію, про події та знайомства, які спонукали нас та стали рушійною силою у просуванні біопрепаратів виробництва індійської компанії «WELLCROPBIOTECH» в Україні. Нумо!
                    </TitleText>
                    <div className={s.section_paragraph}>
                        <TitleText style={`${s.section_text}`} tag='div' weight='700' size='5' color='black'>
                            Про зв’язок з природою
                        </TitleText>
                        <TitleText style={`${s.section_text} ${s.section_date}`} tag='div' weight='700' size='10' color='black'>
                            2014 р. США, штат Колорадо.
                        </TitleText>
                        <TitleText style={`${s.section_text}`} tag='div' weight='400' size='9' color='black'>
                            Персиковий сад на березі р. Колорадо. Сад зрошується водою з цієї ж річки. Вода жорстка залишає крейдяний і трохи мінеральний присмак і, як з’ясувалось, не тільки смак. Листя молодих саджанців персика, які були висаджені пару років тому почали жовтіти, ріст явно загальмувався. Мінеральне живлення не давало ефекту, а навпаки. Проаналізували усі фактори – виявилось, що причина у воді, точніше у її мінералізації. Перше що зробили, це на насосній станції встановили обладнання для внесення сумішей, які б пом’якшували воду. Але це вже для майбутнього зрошування. А сад тим часом гине! Як і для нашого фермера, гине джерело існування усієї родини! Тим чудом, що спасло цей сад стає мікоризний препарат. Вже через декілька днів після внесення мікоризи у крапельний полив, прожилки на листві зазеленіли і сад почав відновлюватись на очах. Все це спостерігала Бучко Юлія, яка вигравши грант і за програмою Cohran Folloship від Посольства США проходила тренінг за темою «Conservation and Irrigation Technology» у штаті Колорадо.
                        </TitleText>
                        <Custom_slider slider='first' slides={slider_img.first} />
                    </div>
                    <div className={s.section_paragraph}>
                        <TitleText style={`${s.section_text}`} tag='div' weight='700' size='5' color='black'>
                            Про зв’язок з людьми
                        </TitleText>
                        <TitleText style={`${s.section_text} ${s.section_date}`} tag='div' weight='700' size='10' color='black'>
                            2016 р. Китай, Харбін.
                        </TitleText>
                        <TitleText style={`${s.section_text}`} tag='div' weight='400' size='9' color='black'>
                            Ця історія не про емігрантів з Росії, не про КВЗД, хоча зв’язок існує, і навіть не про льодові скульптури Харбіну. Наступний член нашої родини - Бучко Тетяна, зазіхнувши на святе – на бюджетні кошти Піднебесної виграла грант від Китайської народної республіки на здобуття ступеня магістра у Харбінському університеті. Друзі в університеті походили з різних куточків світу, але особливо цікаво було спілкуватись з вихідцями з азійських країн.
                            <br />
                            <br />
                            Культура Східної Азії зазвичай вражає європейців, в тому числі і культура харчування. Студенти з Індії вживали лише їжу рослинного походження, заварювали чаї на молоці і це все було незвично приємне, різноманітне, а головне смачне. Індуси вживали лише органічні продукти, що відповідало не тільки їх релігійним переконанням, а й тому, що це був їх звичайний стиль життя.
                            <br />
                            <br />
                            Так знайомство з культурою Індії надихнуло звернути увагу на біопрепарати, які вони застосовують для органічного вирощування. Треба розуміти, що Індія стоїть на першому місці в світі по кількості операторів ринку органічної продукції. Спрацювало правило декількох рукостискань і ось вже є нові знайомі, які працюють на сучасному заводі біопрепаратів з лінійкою продукції, яка забезпечує повний захист рослин і про цьому абсолютно безпечна.
                        </TitleText>
                        <Custom_slider slider='second' slides={slider_img.second} />
                    </div>
                    <div className={s.section_paragraph}>
                        <TitleText style={`${s.section_text}`} tag='div' weight='700' size='5' color='black'>
                            Про нас з вами
                        </TitleText>
                        <TitleText style={`${s.section_text}`} tag='div' weight='400' size='9' color='black'>
                            У вересні 2019 року нарешті змогли отримати Свідоцтво про державну реєстрацію першого препарату «ВеллВАМ». А ви звернули увагу, що назва вже гарантує вам добро?
                            Ми не встигали поставити препарат на посівну озимих культур, тому всі плани продажу та тестувань перенесено на весну 2020 року. А тут вже розповідь про нас з вами.
                        </TitleText>
                    </div>
                </div>
            </section>

            <section className={`${s.preferens}`}>
                <div className={s.preferens_profile}>
                    <TitleText animation={true} style={`${s.preferens_shadow}`} tag='div' weight='700' size='shadow' color='white'>
                        Місія
                    </TitleText>
                    <div className={s.preferens_img}>
                        <img src={preferens_1} alt="preferens_1" />
                    </div>
                    <div className={s.preferens_content}>

                        <TitleText style={`${s.preferens_title}`} tag='div' weight='700' size='3' color='white'>
                            Місія
                        </TitleText>
                        <Custom_option style={s.preferens_option} svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='white'>
                                У прагненні до інновацій у Eco-Friendly сільському господарстві, що базується на традиційних та сучасних технологіях.
                            </TitleText>
                        </Custom_option>
                        <Custom_option style={s.preferens_option} svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='white'>
                                У відновленні ґрунтів, шляхом заміни небезпечних хімічних речовин корисними мікроорганізмами
                            </TitleText>
                        </Custom_option>
                        <Custom_option style={s.preferens_option} svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='white'>
                                У задоволенні своїх клієнтів, повагу до наших клієнтів, прислухаємось до їх запитів та розуміємо їх очікування.
                            </TitleText>
                        </Custom_option>
                    </div>
                </div>
                <div className={s.preferens_profile}>
                    <TitleText animation={true} style={`${s.preferens_shadow}`} tag='div' weight='700' size='shadow' color='white'>
                        Бачення
                    </TitleText>
                    <div className={s.preferens_img}>
                        <img src={preferens_2} alt="preferens_2" />
                    </div>
                    <div className={s.preferens_content}>
                        <TitleText style={`${s.preferens_title}`} tag='div' weight='700' size='3' color='white'>
                            Бачення
                        </TitleText>
                        <Custom_option style={s.preferens_option} svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='white'>
                                Ми пропонуємо новий шлях -  шлях заміни небезпечних хімічних речовин у сільському господарстві на інноваційні екологічні біоорганічні рішення.
                            </TitleText>
                        </Custom_option>
                        <Custom_option style={s.preferens_option} svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='white'>
                                Ми готові зміцнити агровиробництво через зв'язок з природою  і прагнемо стати щасливою та здоровою частиною сільського господарства України.
                            </TitleText>
                        </Custom_option>
                    </div>
                </div>
            </section>

            <Career_form />
        </div>
    )
});

export default About;
