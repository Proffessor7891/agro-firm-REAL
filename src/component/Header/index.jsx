import React from 'react';
import s from './style.module.scss';
import { TitleText } from '../index';
import { Sociate_fb, Sociate_tube } from '../../assets/svg/Sociate';
import Header_content from './Header_content';



const Header = React.memo(function Header(props) {
    const [isScroll, setScroll] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            check_page_ofset();
        });
        check_page_ofset();
    }, [])




    function check_page_ofset() {
        let pageOffset = window.pageYOffset;
        if (pageOffset >= 280) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }


    return (
        <>
            <div className={s.header}>
                <div className={s.header_contacts}>
                    <TitleText tag='a' href='tel:380972416037' weight='400' size='10' color='white'>
                        +3 80 97 241 60 37
                    </TitleText>
                    <div className={s.header_social__block}>
                        <Sociate_fb href='#' style={s.header_svg} />
                        <Sociate_tube href='#' style={s.header_svg} />
                    </div>
                </div>
                <Header_content scroll={isScroll} />
            </div>
        </>
    )
});

export default Header;
