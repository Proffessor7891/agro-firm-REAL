import React from 'react';
import s from './style.module.scss';
import { TitleText, CustomBtn, CustomModal, Order_btn } from '../index';
import path_arrow from '../../../src/assets/index/path-arrow.svg';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../constans/routes';


const Detail_btn = React.memo(function Detail_btn(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CustomBtn tag='div' color='white' href={handleOpen}>
                <TitleText tag='span' weight='700' size='10' color='orange'>
                    ДЕТАЛЬНІШЕ
                </TitleText>
            </CustomBtn>

            <CustomModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
                <TitleText style={s.detail_title} tag='div' weight='700' size='6' color='black'>
                    Біопрепарат WellVam ®  (ВеллВАМ®), Індія
                </TitleText>
                <Order_btn />
                <div className={s.detail_item}>
                    <TitleText tag='span' weight='700' size='10' color='black'>
                        Пакування:
                    </TitleText>
                    <TitleText tag='span' weight='400' size='10' color='black'>
                        2кг
                    </TitleText>
                </div>
                <div className={s.detail_item}>
                    <TitleText tag='span' weight='700' size='10' color='black'>
                        Норма:
                    </TitleText>
                    <TitleText tag='span' weight='400' size='10' color='black'>
                        4,0 – 4,95 кг на 1 га. Кількість добрива визначається біологічними особливостями с/г культур та умов вирощування.
                    </TitleText>
                </div>
                <Link to={publicRoutes.MYCORRHIZA} className={s.detail_link} >
                    <TitleText tag='span' weight='500' size='10' color='orange'>
                        Детальна інформація
                    </TitleText>
                    <img src={path_arrow} alt="path arrow" />
                </Link>
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
            </CustomModal>
        </>
    );
});

export default Detail_btn;
