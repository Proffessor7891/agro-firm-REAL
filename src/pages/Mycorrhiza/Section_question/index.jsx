import React from 'react'
import { TitleText, Custom_option } from '../../../component';
import s from './style.module.scss';
import Custom_select from '../Custom_select';
import { qustion_items } from '../../../api/text/mycorrhiza';


function Section_question() {
    console.log('qustion_items: ', qustion_items);
    return (
        <section className={`${s.section} container`}>
            <TitleText style={`${s.section_title}`} tag='div' weight='700' size='5' color='white'>
                Везикулярно-арбускулярна мікориза
            </TitleText>
            <div className={s.select__block}>
                {qustion_items.first &&
                    qustion_items.first.map((item, index) => {
                        return (
                            <Custom_select style={s.select_profile} name={item.name} key={index}>
                                <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                                    {item.text}
                                </TitleText>
                            </Custom_select>
                        )
                    })
                }
            </div>
            <TitleText style={`${s.section_title}`} tag='div' weight='700' size='5' color='white'>
                Гумінові кислоти
            </TitleText>
            <div className={s.select__block}>
                {qustion_items.second &&
                    qustion_items.second.map((item, index) => {
                        return (
                            <Custom_select style={s.select_profile} name={item.name} key={index}>
                                <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                                    {item.text}
                                </TitleText>
                            </Custom_select>
                        )
                    })
                }
                <Custom_select style={s.select_profile} name='Як впливають гумінові кислоти на ґрунт?'>
                    <TitleText style={`${s.select_name}`} tag='div' weight='700' size='9' color='white'>
                        Гумінові кислоти фізично змінюють структуру ґрунту, що приводить до:
                    </TitleText>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Покращення структури ґрунту, що запобігає великим втратам води та поживних речовин на легких піщаних ґрунтах, одночасно перетворюючи їх у плодоносні ґрунти. У важких і компактних ґрунтах поліпшується аерація ґрунту та затримка води;
                        </TitleText>
                    </Custom_option>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Запобігання розтріскуванню ґрунту, поверхневому стоку води та ерозії ґрунту;
                        </TitleText>
                    </Custom_option>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Збільшування водоємності ґрунту і таким чином допомагає протистояти посуші;
                        </TitleText>
                    </Custom_option>
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Темніший колір ґрунту, тим самим сприяє засвоєнню сонячної енергії.
                        </TitleText>
                    </Custom_option>
                    <br />
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='700' size='9' color='white'>
                        Гумінові кислоти хімічно змінюють фіксуючі властивості ґрунту з такими перевагами, як:
                    </TitleText>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Нейтралізує як кислі, так і лужні ґрунти; регулює рН-значення ґрунтів;
                        </TitleText>
                    </Custom_option>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Покращує та оптимізує засвоєння рослинами поживних речовин та води;
                        </TitleText>
                    </Custom_option>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Підвищує буферні властивості ґрунту;
                        </TitleText>
                    </Custom_option>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Діє як природний хелатор іонів металів у лужних умовах та сприяє їх засвоєнню коріннями;
                        </TitleText>
                    </Custom_option>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Стає багатим як на органічні, так і на мінеральні речовини, необхідні для росту рослин;
                        </TitleText>
                    </Custom_option>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Затримує водорозчинні неорганічні добрива в кореневих зонах і зменшує вимивання;
                        </TitleText>
                    </Custom_option>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Володіє надзвичайно високими катіонообмінними можливостями;
                        </TitleText>
                    </Custom_option>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Сприяє перетворенню елементів живлення (N, P, K + Fe, Zn та інших мікроелементів) у форми, доступні рослинам;
                        </TitleText>
                    </Custom_option>
                    <br />
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Вивільняє вуглекислий газ із ґрунтового карбонату кальцію та дозволяє використовувати його у фотосинтезі;
                        </TitleText>
                    </Custom_option>
                    <Custom_option style={s.select_option} svg={'green'}>
                        <TitleText tag='span' weight='400' size='10' color='white'>
                            Знижує доступність токсичних речовин у ґрунтах.
                        </TitleText>
                    </Custom_option>

                </Custom_select>
            </div>
            <TitleText style={`${s.section_title}`} tag='div' weight='700' size='5' color='white'>
                Амінокислоти
            </TitleText>
            <div className={s.select__block}>
                {qustion_items.third &&
                    qustion_items.third.map((item, index) => {
                        return (
                            <Custom_select style={s.select_profile} name={item.name} key={index}>
                                <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                                    {item.text}
                                </TitleText>
                            </Custom_select>
                        )
                    })
                }
                <Custom_select style={s.select_profile} name={'Які відомі основні амінокислоти і які напрямки їх дії?'}>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Аспарагінова кислота — стимулює проростання насіння; це вихідний матеріал для треоніну, метіоніну, ізолейцину, лізину та нуклеотидів; джерело органічного азоту; бере участь у формуванні заряду білкової молекули.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Треонін — стимулює проростання насіння; визначає гідрофільність білків; за високих температур регулює механізм захисту рослин під час стресу та роботу відкривання-закривання продихів.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Метіонін — стимулює проростання насіння; посилює ріст коренів, регулює відкривання-закривання продихів; посилює процеси запилення та зав’язування плодів; оптимізує водообмін; регулює утворення етилену; є попередником гормонів росту.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Лейцин, ізолейцин — посилює стійкість рослин до жари, посухи та засолення (сольового стресу); підвищує життєздатність пилку; впливає на гідрофобність білків.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Глутамінова кислота — стимулює проростання насіння; сприяє росту рослин; бере участь у синтезі хлорофілу; покращує запилення; є компонентом білка.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Гліцин — сприяє росту тканин, синтезу хлорофілу, вітамінів, цитохромів (транспортери електронів у процесах внутріклітинного дихання, фотосинтезу, фосфорегулювання тощо), покращує смак плодів.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Аланін — посилює холодостійкість рослинного організму; стимулює синтез хлорофілу; підвищує стійкість рослин до посухи, суховіїв; регулює відкривання-закривання продихів; оптимізує водообмін.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Валін — попередник ауксину; підвищує стійкість рослин до посухи, суховіїв та життєздатність пилку; посилює формування насіння і смакові властивості плодів.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Тирозин — складова білків; покращує проростання пилку; посилює стійкість рослин до жари, засолення (сольового стресу).
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Фенілаланін — впливає на гідрофобність білків та товщину стінок клітин; активізує проростання насін­ня та процеси запилення.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Гістидин — входить до складу білків; бере участь у формуванні заряду білкової молекули; регулює відкривання-закривання продихів у процесі водообміну; впливає на дозрівання плодів.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Лізин — стимулює проростання насіння; бере участь у синтезі хлорофілу; посилює процеси запилення і зав’язування плодів; підвищує стійкість рослин до посухи та суховіїв; бере участь у формуванні заряду білкової молекули.
                    </TitleText>
                    <br />
                    <TitleText style={`${s.select_name}`} tag='div' weight='400' size='9' color='white'>
                        Аргінін — входить до складу білків; бере участь у формуванні заряду білкової молекули; посилює холодостійкість і розвиток кореневої системи; стимулює синтез хлорофілу, алкалоїдів та гормонів, пов’язаних із цвітінням і плодоношенням; підвищує стійкість рослин до засолення.
                    </TitleText>
                </Custom_select>
            </div>
        </section>
    )
}

export default Section_question;
