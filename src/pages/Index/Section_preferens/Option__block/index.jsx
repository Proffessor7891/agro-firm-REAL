import React from 'react';
import s from './style.module.scss';
import accept from '../../../../assets/index/accept.svg';
import { TitleText, Custom_option } from '../../../../component/index';



const Option__block = React.memo(function Option__block(props) {
    let all_options = [{
        id: 0,
        text: 'містить гумінові кислоти та амінокислоти',
        svg: accept,
    },
    {
        id: 1,
        text: 'Покращує поглинання поживних речовин',
        svg: accept,
    },
    {
        id: 2,
        text: 'Посилює опір до інфекцій ґрунтових патогенних мікроорганізмів',
        svg: accept,
    },
    {
        id: 3,
        text: 'Збільшує відсоток приживлюваності рослин',
        svg: accept,
    },
    {
        id: 4,
        text: 'Підвищує врожайність та якість готової продукції',
        svg: accept,
    },
    {
        id: 5,
        text: 'Знижує стрес від посухи, та інших абіотичних та екологічних стресів.',
        svg: accept,
    },
    {
        id: 6,
        text: 'Підвищує здатність рослин до накопичення запасів вологи',
        svg: accept,
    },
    {
        id: 7,
        text: 'Збільшує кількість корисних мікроорганізмів у ризосфері',
        svg: accept,
    },
    {
        id: 8,
        text: 'Поліпшує структуру та якість ґрунту',
        svg: accept,
    },
    {
        id: 9,
        text: 'Вирощена продукція безпечна та органічна чиста',
        svg: accept,
    },]

    return (
        <>
            <div className={s.preferens_option__block}>
                {all_options &&
                    all_options.map((item) => {
                        return (
                            <Custom_option style={s.preferens_option} key={item.id} svg={item.svg}>
                                <TitleText tag='span' weight='400' size='10' color='white'>
                                    {item.text}
                                </TitleText>
                            </Custom_option>
                        )
                    })
                }

            </div>

        </>
    )
});

export default Option__block;
