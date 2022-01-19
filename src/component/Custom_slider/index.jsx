import React from 'react';
import { Additional_navigate, TitleText } from '../index';
import arrow_left from "../../assets/about/arrow_left.svg";
import arrow_right from "../../assets/about/arrow_right.svg";
import SwiperCore, { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import './swiper.css';
import s from "./style.module.scss";


SwiperCore.use([A11y, Autoplay, Navigation]);

const Custom_slider = React.memo(function Custom_slider(props) {

    return (
        <>
            <div className={s.swiper_btn__block}>
                <div className={`${"swiper_prev_" + props.slider} ${s.swiper_btn} ${s.swiper_btn_1}`}>
                    <img src={arrow_left} alt="arrow_left" />
                </div>
                <div className={`${"swiper_next_" + props.slider} ${s.swiper_btn} ${s.swiper_btn_2}`}>
                    <img src={arrow_right} alt="arrow_right" />
                </div>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={2.3}
                navigation={{
                    prevEl: `.swiper_prev_${props.slider}`,
                    nextEl: `.swiper_next_${props.slider}`,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                breakpoints={{
                    570: {
                        slidesPerView: 2.3
                    },
                    0: {
                        slidesPerView: 1.3
                    }
                }}

            >
                {props.slides &&
                    props.slides.map((item, index) => {
                        return (
                            <SwiperSlide className={s.slider_profile} key={`${index}_${item.alt}`}>
                                <img src={item.src} alt={item.alt} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </>
    )
});

export default Custom_slider;
