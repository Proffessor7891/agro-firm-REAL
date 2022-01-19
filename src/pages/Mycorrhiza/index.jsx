import React from 'react';
import s from './style.module.scss';
import mycorrhiza_bg from '../../assets/mycorrhiza/mycorrhiza.png';
import { Start_section, TitleText } from '../../component';
import Section_preferens from './Section_preferens/index';
import Section_question from './Section_question';



const Mycorrhiza = React.memo(function Mycorrhiza(props) {


    return (
        <>
            <Start_section title='Веллвам' bg={mycorrhiza_bg} />
            <Section_preferens />
            <Section_question />
        </>
    )
});

export default Mycorrhiza;
