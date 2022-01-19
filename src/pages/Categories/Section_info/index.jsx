import React from 'react'
import { TitleText, Order_btn, Custom_option } from '../../../component'
import s from './style.module.scss';

function Section_info() {
    return (
        <div className={s.section_info}>
            <TitleText style={`${s.section_info_title}`} tag='div' weight='700' size='6' color='black'>
                Біопрепарат WellVam ®  (ВеллВАМ®), Індія
            </TitleText>
            <Order_btn />
            <div className={s.section_info_item}>
                <TitleText style={`${s.section_info_item_title}`} tag='span' weight='700' size='10' color='black'>
                    {`Пакування: `}
                </TitleText>
                <TitleText style={`${s.section_info_item_title}`} tag='span' weight='400' size='10' color='black'>
                    2кг
                </TitleText>
            </div>
            <div className={s.section_info_item}>
                <TitleText style={`${s.section_info_item_title}`} tag='span' weight='700' size='10' color='black'>
                    {`Норма: `}
                </TitleText>
                <TitleText style={`${s.section_info_item_title}`} tag='span' weight='400' size='10' color='black'>
                    4,0 – 4,95 кг на 1 га. Кількість добрива визначається біологічними особливостями с/г культур та умов вирощування.
                </TitleText>
            </div>
            <div className={s.section_info_item}>
                <TitleText style={`${s.section_info_item_title}`} tag='div' weight='700' size='10' color='black'>
                    {`Склад: `}
                </TitleText>
                <TitleText style={`${s.section_info_item_title}`} tag='div' weight='400' size='10' color='black'>
                    Препарат (гранульований) вироблений на основі мікоризного гриба містить наступні елементи:
                </TitleText>
                <Custom_option style={s.section_info_option} svg={'orange'}>
                    <TitleText tag='span' weight='400' size='10' color='black'>
                        живі вегетативні клітини, спори мікоризоутворюючого гриба – 150 спор/г, штамм Mycorriza; Glomus intraradices;
                </TitleText>
                </Custom_option>
                <Custom_option style={s.section_info_option} svg={'orange'}>
                    <TitleText tag='span' weight='400' size='10' color='black'>
                        субстанція: 14-16% гумінової кислоти та 6-8 % амінокислоти.
                </TitleText>
                </Custom_option>
            </div>
            <div className={s.section_info_item}>
                <TitleText style={`${s.section_info_item_title}`} tag='div' weight='700' size='10' color='black'>
                    {`Способи нанесення: `}
                </TitleText>
                <TitleText style={`${s.section_info_item_title}`} tag='div' weight='400' size='10' color='black'>
                    Рекомендовано як у сухому, так і в вигляді розчину, який готується в день використання.
                </TitleText>
                <Custom_option style={s.section_info_option} svg={'number'} number='1'>
                    <TitleText tag='span' weight='400' size='10' color='black'>
                        Внесення до ґрунту. Ретельно змішати препарат з ґрунтом або компостом.
                    </TitleText>
                </Custom_option>
                <Custom_option style={s.section_info_option} svg={'number'} number='2'>
                    <TitleText tag='span' weight='400' size='10' color='black'>
                        Внесення у сухому вигляді разом з насінням до сівалки. Ретельно перемішавши у ємності сівалки перед висівом.
                    </TitleText>
                </Custom_option>
                <Custom_option style={s.section_info_option} svg={'number'} number='3'>
                    <TitleText tag='span' weight='400' size='10' color='black'>
                        Обробка насіння перед посівом. Розчинити у достатній кількості води та обробити насіння. Оброблене насіння висіяти в день обробки.
                    </TitleText>
                </Custom_option>
                <Custom_option style={s.section_info_option} svg={'number'} number='4'>
                    <TitleText tag='span' weight='400' size='10' color='black'>
                        Внесення через полив або краплинне зрошення. Розчинити в достатній кількості води та внести до прикореневого ґрунту не раніше, чим на 10 день після отримання.
                    </TitleText>
                </Custom_option>
                <Custom_option style={s.section_info_option} svg={'number'} number='5'>
                    <TitleText tag='span' weight='400' size='10' color='black'>
                        Внесення розчину в борозну “in-furrow” в баковій суміші з мінеральними добривами.
                    </TitleText>
                </Custom_option>
                <div className={s.detail_description}>
                    <div className={s.detail_description_svg}>
                        <span>!</span>
                    </div>
                    <div className={s.detail_description_content}>
                        <TitleText tag='div' weight='700' size='10' color='black'>
                            Умови зберігання препарату
                        </TitleText>
                        <TitleText tag='div' weight='400' size='10' color='black'>
                            Зберігати та використовувати при температурі повітря не більше +35 °С, в сухому прохолодному місці. Запобігати заморожуванню продукту та прямих сонячних променів.
                        </TitleText>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section_info
