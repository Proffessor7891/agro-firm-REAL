import React from 'react';
import s from './style.module.scss';
import { TitleText, Question_section } from '../../component/index';
import Section_main from './Section_main';
import Section_preferens from './Section_preferens';
import Section_product from './Section_product';
import Section_blog from './Section_blog';

const Index = React.memo(function Index(props) {
    return (
        <>
            <Section_main />
            <Section_preferens />
            <Section_product />
            <Section_blog />
            <Question_section />
        </>
    )
});

export default Index;