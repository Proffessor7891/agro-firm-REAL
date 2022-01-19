import React from 'react';
import s from './style.module.scss';
import blog_bg from '../../assets/blog/blog_bg.png';
import { Start_section, Post_card } from '../../component';
import { publicRoutes } from '../../constans/routes';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import './pagination.scss';

const Blog = React.memo(function Blog(props) {
    const [pageNum, setPageNum] = React.useState(1);
    function handlePageClick(num) {
        setPageNum(num);
    }

    let posts = [
        {
            img: require(`../../assets/blog/blog_bg.png`).default,
            alt: 'image post',
            detail_btn: 'Детальніше',
            title: 'Правильний догляд за урожаєм використовуючи ВеллВам1',
            text: 'Спори везикулярно-арбускулярної мікоризи 150 пропагул на 1 г продукту',
            link: 'test1'
        },
        {
            img: require(`../../assets/blog/blog_bg.png`).default,
            alt: 'image post',
            detail_btn: 'Детальніше',
            title: 'Правильний догляд за урожаєм використовуючи ВеллВам2',
            text: 'Спори везикулярно-арбускулярної мікоризи 150 пропагул на 1 г продукту',
            link: 'test2'
        },
        {
            img: require(`../../assets/blog/blog_bg.png`).default,
            alt: 'image post',
            detail_btn: 'Детальніше',
            title: 'Правильний догляд за урожаєм використовуючи ВеллВам3',
            text: 'Спори везикулярно-арбускулярної мікоризи 150 пропагул на 1 г продукту',
            link: 'test3'
        },
        {
            img: require(`../../assets/blog/blog_bg.png`).default,
            alt: 'image post',
            detail_btn: 'Детальніше',
            title: 'Правильний догляд за урожаєм використовуючи ВеллВам4',
            text: 'Спори везикулярно-арбускулярної мікоризи 150 пропагул на 1 г продукту',
            link: 'test4'
        },
    ]

    return (
        <>
            <Start_section title='Блог' bg={blog_bg} />
            <section className={`${s.section} container`}>

                {posts &&
                    posts.map((item, index) => {
                        return (
                            <Post_card
                                key={index}
                                theme='black'
                                style={s.post_item}
                                img={item.img}
                                alt={item.alt}
                                detail_btn={item.detail_btn}
                                title={item.title}
                                text={item.text}
                                link={`${publicRoutes.POST}`}
                            />
                        )
                    })
                }

                <div className={s.pagination__block}>
                    <Pagination
                        className={s.pagination__block}
                        currentPage={pageNum}
                        totalPages={10}
                        changeCurrentPage={handlePageClick}
                        theme="square-fill"
                    />
                </div>
            </section>
        </>
    )
});

export default Blog;
