import React from 'react';
import s from './style.module.scss';
import TitleText from '../TitleText/index';
import { Link } from 'react-router-dom';
import { additional_item } from '../../api/text/additional_item';
import Additional_nav_profile from './Additional_nav_profile';


import SwiperCore, { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';



SwiperCore.use([A11y, Autoplay]);

const Additional_navigate = React.memo(function Additional_navigate(props) {
    let additional_json = additional_item();

    React.useEffect(() => {
        let width = window.outerWidth;
    }, []);


    return (
        <>
            <div className={s.additional_nav__block}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={7}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        1360: {
                            slidesPerView: 7,
                        },
                        1100: {
                            slidesPerView: 5,
                        },

                        600: {
                            slidesPerView: 4,
                        },
                        430: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {additional_json &&
                        additional_json.map((item, index) => {
                            return (
                                <SwiperSlide key={`${index}_${item.name}`}><Additional_nav_profile path={item.path} svg={item.svg} text={item.name} /></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
});

export default Additional_navigate;
