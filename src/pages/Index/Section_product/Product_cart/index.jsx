import React from 'react';
import s from './style.module.scss';
import { TitleText } from '../../../../component/index';



const Product_cart = React.memo(function Product_cart(props) {

    return (
        <>
            <div className={s.product_cart}>
                <div className={s.product_procent}>
                    <TitleText tag='span' weight='700' size='5' color='green'>
                        {props.procent}
                    </TitleText>
                    <TitleText tag='span' weight='700' size='10' color='green'>
                        %
                    </TitleText>
                </div>
                <TitleText tag='div' weight='400' size='10' color='black'>
                    {props.text}
                </TitleText>
            </div>

        </>
    )
});

export default Product_cart;
