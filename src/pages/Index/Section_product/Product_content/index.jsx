import React from 'react';
import s from './style.module.scss';
import { TitleText, CustomBtn, CustomModal, Detail_btn, Order_btn } from '../../../../component/index';
import Product_cart from '../Product_cart/index';



const Product_content = React.memo(function Product_content(props) {

    return (
        <>
            <div className={s.product_content}>
                <TitleText style={s.product_title} animation={true} tag='div' weight='700' size='3' color='green'>
                    WellVam (ВеллВам)
                </TitleText>
                <TitleText tag='div' weight='400' size='10' color='black'>
                    Арбускулярно-візикулярна мікориза на гуміновому носію
                </TitleText>
                <TitleText style={s.product_description} tag='div' weight='700' size='10' color='black'>
                    Склад
                </TitleText>
                <TitleText tag='div' weight='400' size='10' color='black'>
                    Спори везикулярно-арбускулярної мікоризи 150 пропагул на 1 г продукту
                </TitleText>
                <div className={s.product_cart__block}>
                    <Product_cart procent='16' text='Нітроген' />
                    <Product_cart procent='8' text='Гумінові кислоти' />
                    <Product_cart procent='18' text='Амінокилоти' />
                </div>
                <TitleText style={s.product_description} tag='div' weight='700' size='10' color='black'>
                    Виробник
                </TitleText>
                <TitleText tag='div' weight='400' size='10' color='black'>
                    Компанія "Wellcropbiotech", Індія
                </TitleText>
                <div className={s.product_btn__block}>
                    <Order_btn />
                    <Detail_btn />
                </div>

            </div>
        </>
    )
});

export default Product_content;
