import React from 'react';
import s from './style.module.scss';
import { TitleText, CustomBtn, CustomModal } from '../index';
import { Formik, Field, Form } from 'formik';
import { CustomInput } from '../Form_element/index';
import * as yup from 'yup';
import career_bg from '../../assets/about/about.png';

const initialValues = {
    name: '',
    phone: '',
    email: '',
};

const validationSchema = yup.object({
    name: yup.string().required("Поле обов'язкове для заповнення"),
    phone: yup.string().required("Поле обов'язкове для заповнення"),
    email: yup.string().email("Введіть справжній email").required("Поле обов'язкове для заповнення"),
});



const Career_form = React.memo(function Career_form(props) {

    return (
        <>
            <section className={`${s.section} container`}>
                <div className={s.section_bg}>
                    <img src={career_bg} alt="background" />
                </div>
                <Formik
                    initialValues={initialValues}
                    validateOnBlur
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('values: ', values);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <Form className={s.form}>
                            <TitleText animation={true} style={s.form_title} tag='div' weight='700' size='3' color='white'>
                                Кар’єра
                            </TitleText>
                            <TitleText style={s.form_text} tag='div' weight='700' size='5' color='white'>
                                Напишіть нам листа, зателефонуйте, а нумо на каву разом!
                            </TitleText>
                            <TitleText style={s.form_text} tag='div' weight='400' size='9' color='white'>
                                Створюємо команду однодумців, які відкриті для інновацій, нестандартних рішень і готові свої мрії впроваджувати в життя. Разом рухатись набагато легше і головне – цікавіше.
                            </TitleText>
                            <div className={s.form__block}>
                                <Field
                                    placeholder="Ім'я"
                                    name="name"
                                    id="name"
                                    type="text"
                                    styles={s.form_item}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    component={CustomInput}
                                />
                                <Field
                                    placeholder="Номер телефону"
                                    name="phone"
                                    id="phone"
                                    mask="+380(99)999-99-99"
                                    type="tel"
                                    styles={s.form_item}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                    component={CustomInput}
                                />
                                <Field
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    type="text"
                                    styles={s.form_item}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    component={CustomInput}
                                />
                                <CustomBtn style={s.form_item} tag='button' type={'submit'} color='green' href={handleSubmit}>
                                    <TitleText tag='span' weight='700' size='10' color='white'>
                                        Відправити
                                </TitleText>
                                </CustomBtn>
                            </div>
                        </Form>
                    )}

                </Formik>
            </section>
        </>
    );
});

export default Career_form;
