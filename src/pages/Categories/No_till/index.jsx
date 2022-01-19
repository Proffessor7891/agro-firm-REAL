import React from 'react';
import s from '../style.module.scss';
import no_till_bg from '../../../assets/categories/vegetables_bg.png';
import plus from '../../../assets/categories/plus.svg';
import { Start_section, TitleText, Custom_slider, Custom_option, Order_btn, Question_section } from '../../../component/index';
import Section_info from '../Section_info';


const No_till = React.memo(function No_till(props) {

    let slider_img = [{
        alt: 'slider img',
        src: require(`../../../assets/categories/no_till_1.png`).default
    },
    {
        alt: 'slider img',
        src: require(`../../../assets/categories/no_till_2.png`).default
    },
    {
        alt: 'slider img',
        src: require(`../../../assets/categories/no_till_3.png`).default
    }];



    return (
        <>
            <Start_section title='Біопрепарат «ВеллВАМ» у технології NO-TILL.' bg={no_till_bg} />
            <div className={`${s.section} container`}>
                <div className={s.section_content__block}>
                    <div className={s.section_content}>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='9' color='black'>
                            Серед основних заходів, спрямованих на зниження негативного впливу посухи що посилюється через глобальне потепління, є впровадження і поширення грунтозберігаючих технологій. Сьогодні в багатьох країнах світу популяризують і впроваджують у виробництво нові, хоч вони не такі вже й нові, технології землеробства: No-Till, Strip-Till, Mini-Till.
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='9' color='black'>
                            Ці системи землеробства в першу чергу пов'язані із забезпеченням екологічних функцій ґрунтів. На які функції ґрунтів впливає застосування мікоризного препарату?
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='700' size='9' color='black'>
                            Переваги біопрепарату «ВеллВАМ» у грунтозберігаючих технологіях:
                        </TitleText>
                        <Custom_option style={s.section_content_option} direction='center' svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='black'>
                                накопичення вологи
                            </TitleText>
                        </Custom_option>
                        <Custom_option style={s.section_content_option} direction='center' svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='black'>
                                регулюванням процесів влагообміну
                            </TitleText>
                        </Custom_option>
                        <Custom_option style={s.section_content_option} direction='center' svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='black'>
                                регулювання газообміну та теплообміну
                            </TitleText>
                        </Custom_option>
                        <Custom_option style={s.section_content_option} direction='center' svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='black'>
                                відновлення ґрунтової мікрофлори
                            </TitleText>
                        </Custom_option>
                        <Custom_option style={s.section_content_option} direction='center' svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='black'>
                                технологічність застосування
                            </TitleText>
                        </Custom_option>
                        <Custom_option style={s.section_content_option} direction='center' svg={plus}>
                            <TitleText tag='span' weight='400' size='9' color='black'>
                                економічна доцільність
                            </TitleText>
                        </Custom_option>
                        <br />
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='9' color='black'>
                            У міру прогресування вегетаційного періоду ви можете не помічати багато того, що відбувається з рослинами під ґрунтом. Більшість з нас звертають увагу на нові пагони, стебла, листя, а з часом на квіти та врожай. Ми можемо вважати коріння необхідними, але не такими вже й цікавими частинами у процесі вирощування.
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='9' color='black'>
                            Але ми маємо зосередитись на тому, що відбувається в ґрунті з корінням рослин. Зона ґрунту, що оточує коріння рослини, називається ризосферою. І це жваве місце для важливих, але прихованих процесів у рослинництві
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='9' color='black'>
                            У ризосфері рослини утворюють різноманітні хімічні сполуки, які називаються ексудатами. Вплив ексудатів на рослини та навколишнє ґрунтове співтовариство – дуже важливий. Їх унікальна робота проводить дрібномасштабні дійства поблизу поверхні коренів. Властивості ґрунту у зоні впливу ексудатів можуть сильно відрізнятися від решти ґрунту.
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='9' color='black'>
                            Коріння постійно виділяють хімічні речовини в ґрунт як спосіб вивільнення поживних речовин, які прикріплюються до частинок ґрунту через мережу мікоризних грибів. Під час травлення у людини шлунок виділяє шлункові соки, що сприяють розщепленню їжі; ексудати - це рослинний еквівалент шлункових соків.
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='9' color='black'>
                            Хімічний склад ексудатів як "справжній коктейль" або "шведський стіл" для будь-чого в ризосфері. Окрім того, що вони допомагають рослинам отримувати поживні речовини, ексудати є джерелом їжі для мікроорганізмів, частиною яких і є везикулярно - арбускулярна мікориза, як важлива частина ґрунтової мікро біоти
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='9' color='black'>
                            Мікоризні гриби також відіграють важливу роль в утриманні ґрунту. Ексудати та мікоризні гриби, через свою розгалужену мережу, утримують разом більші грудочки ґрунту, тут ексудати працюють на мікрорівні як клей, вони утримують частинки ґрунту у важливих механічних мережах.
                        </TitleText>
                        <TitleText style={`${s.section_content_description}`} tag='div' weight='400' size='9' color='black'>
                            Впродовж вегетаційного періоду - і в подальшому - між рослинами та навколишнім ґрунтом формуються делікатні взаємодії. Всі ці взаємодії впливають на кількість води, яка захоплюється ґрунтом і поглинається рослинами. Симбіоз коренів та мікоризних грибів також впливає на те, наскільки рослини можуть витягувати життєвоважливі поживні речовини з ґрунту, і навіть впливає на структуру ґрунту і ступень поглинання вологи у ризосфері.
                        </TitleText>
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

export default No_till;
