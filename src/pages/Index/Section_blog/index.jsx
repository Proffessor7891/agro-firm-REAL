import React from 'react';
import s from './style.module.scss';
import blog_bg_1 from '../../../assets/index/blog_bg_1.png';
import blog_bg_2 from '../../../assets/index/blog_bg_2.png';
import test_img from '../../../assets/index/index_bg_1.png';
import { TitleText, Post_card, CustomBtn } from '../../../component/index';
import { publicRoutes } from '../../../constans/routes';
import { Link } from 'react-router-dom';



const Section_blog = React.memo(function Section_blog(props) {

    function func() {
    };

    return (
        <>
            <section className={`${s.section_blog} container`}>
                <img src={blog_bg_1} className={s.blog_bg_1} alt="background" />
                <img src={blog_bg_2} className={s.blog_bg_2} alt="background" />
                <TitleText animation={true} style={s.section_title} tag='div' weight='700' size='3' color='white'>
                    Публікації
                </TitleText>
                <div className={s.post__block}>
                    <Post_card
                        theme='white'
                        style={s.post_item}
                        img={test_img}
                        alt={'image post'}
                        detail_btn={'Детальніше'}
                        title={'Правильний догляд за урожаєм використовуючи ВеллВам'}
                        text={'Спори везикулярно-арбускулярної мікоризи 150 пропагул на 1 г продукту'}
                        link={publicRoutes.POST}
                    />
                    <Post_card
                        theme='white'
                        style={s.post_item}
                        img={test_img}
                        alt={'image post'}
                        detail_btn={'Детальніше'}
                        title={'Правильний догляд за урожаєм використовуючи ВеллВам'}
                        text={'Спори везикулярно-арбускулярної мікоризи 150 пропагул на 1 г продукту'}
                        link={publicRoutes.POST}
                    />
                </div>
                <Link to={publicRoutes.BLOG} className={s.blog_btn} >
                    <CustomBtn tag='div' color='transparent' href={func}>
                        <TitleText tag='span' weight='700' size='10' color='black'>
                            УСІ СТАТТІ
                        </TitleText>
                    </CustomBtn>
                </Link>

            </section>
        </>
    )
});

export default Section_blog;
