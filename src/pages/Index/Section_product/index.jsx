import React from 'react';
import s from './style.module.scss';
import product_1 from '../../../assets/index/product_1.png';
import product_2 from '../../../assets/index/product_2.png';
import product_img from '../../../assets/index/product_img.png';
import { TitleText } from '../../../component/index';
import Product_content from './Product_content';



const Section_product = React.memo(function Section_product(props) {
    return (
        <>
            <section className={s.section_product}>
                <div className={s.product_bg}>
                    <img src={product_1} className={s.product_bg_1} alt="product background" />
                    <img src={product_2} className={s.product_bg_2} alt="product background" />
                </div>
                <div className={`${s.product__block} container`}>
                    <div className={s.product_img}>
                        <img src={product_img} alt="product img" />
                    </div>
                    <Product_content />
                </div>
            </section>
        </>
    )
});

export default Section_product;
