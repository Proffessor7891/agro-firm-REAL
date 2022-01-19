import React from 'react';
import s from './style.module.scss';
import blog_bg from '../../assets/blog/blog_bg.png';
import { Start_section, TitleText } from '../../component';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../constans/routes';



const Post = React.memo(function Post(props) {
    let popular = [
        {
            img: require(`../../assets/blog/blog_bg.png`).default,
            alt: 'image post',
            title: 'Правильний догляд за урожаєм використовуючи ВеллВам1',
            link: 'test1'
        },
        {
            img: require(`../../assets/blog/blog_bg.png`).default,
            alt: 'image post',
            title: 'Правильний догляд за урожаєм використовуючи ВеллВам2',
            link: 'test1'
        },
        {
            img: require(`../../assets/blog/blog_bg.png`).default,
            alt: 'image post',
            title: 'Правильний догляд за урожаєм використовуючи ВеллВам3',
            link: 'test1'
        },
    ];

    let post = {
        img: require(`../../assets/blog/blog_bg.png`).default,
        alt: 'image post',
        detail_btn: 'Детальніше',
        title: 'Правильний догляд за урожаєм використовуючи ВеллВам1',
        text: `Із відновленням весняної вегетації пшениці озимої з’являється проблема зимуючих злакових та дводольних бур’янів: метлюг звичайний, лисохвіст мишохвостиковий, талабан польовий, грицики звичайні, кучерявець Софії, підмаренник чіпкий, мак дикий, волошка синя та інші. З гербіцидною обробкою для їх контролю не слід зволікати, адже важливо знищити конкурентів за вологу, поживні речовини, світлову енергію на якомога менших фазах розвитку.
        Для ранньовесняних обробок ідеально підходить гербіцид Еверест, ВГ – працює при температурі від +5…+7°С. Цей гербіцид є одним із найефективніших продуктів у своєму сегменті, контролює бур’яни по вегетації та має ґрунтову дію на наступні хвилі бур’янів.
        Еверест, ВГ (діюча речовина – флукарбазон натрію, 700 г/кг) абсорбується листям та кореневою системою рослин бур’янів, і за рахунок акропетального та базипетального руху переміщується по всій рослині. Еверест безпечний для рослин пшениці: за рахунок ферментів, які містяться у рослинах цієї культури, флукарбазон натрію дуже швидко метаболізується.
        СПЕКТР ДІЇ ГЕРБІЦИДУ ЕВЕРЕСТ
        Еверест контролює основні шкодочинні злакові бур’яни, а також окремі види дводольних бур’янів:
        Спектр дії гербіциду ЕверестЯКУ НОРМУ ВИТРАТИ ЗАСТОСОВУВАТИ?
        Оптимальна норма витрати гербіциду Еверест на пшениці озимій ‒ 35-70 г/га. Для забезпечення кращого покриття робочим розчином листкової поверхні бур’янів обов’язково потрібно додавати у робочий розчин ад’ювант Сільвет Голд у пропорції 1:1 (з 2021 року Еверест, ВГ доступний у продажі лише з ад’ювантом Сільвет Голд).
        Для контролю однорічних видів бромусу рекомендуємо застосовувати підвищену норму витрати гербіциду ‒ 70 г/га.
        Еверест  можна застосовувати у фазу пшениці від 1-3 листків та до кінця кущення (BBCH 11-29).`,
        link: 'test1'
    };

    return (
        <>
            <Start_section title='Блог' bg={blog_bg} />
            <section className={`${s.section} container`}>
                <img src={post.img} className={s.section_img} alt={post.alt} />
                <TitleText style={s.section_title} tag='div' weight='700' size='4' color='black'>
                    {post.title}
                </TitleText>
                <TitleText style={s.section_text} tag='div' weight='400' size='9' color='black'>
                    {post.text}
                </TitleText>
            </section>

            <section className={`${s.popular_post_section} container`}>
                <TitleText style={s.popular_post_title} tag='div' weight='700' size='5' color='black'>
                    Рекомендовані статті:
                </TitleText>
                <div className={s.popular_post__block}>
                    {popular &&
                        popular.map((item, index) => {
                            return (
                                <Link to={publicRoutes.POST} className={s.popular_post} key={index} >
                                    <img className={s.popular_post_bg} src={item.img} alt={item.alt} />
                                    <TitleText style={s.popular_post_text} tag='span' weight='700' size='9' color='white'>
                                        {item.title}
                                    </TitleText>
                                </Link>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
});

export default Post;
