import React from 'react';
import s from './style.module.scss';
import gallery_bg from '../../assets/gallery/gallery_bg.png';
import { Start_section, Question_section } from '../../component';
import Gallery from "react-photo-gallery";
import { photos } from "../../api/text/gallery";


const Gallery_page = React.memo(function Gallery_page(props) {
    return (
        <>
            <Start_section title='Галерея' bg={gallery_bg} />
            <section className={`${s.section} container`}>
                <Gallery photos={photos} />
            </section>
            <Question_section />
        </>
    )
});

export default Gallery_page;
