import React from 'react';
import s from './style.module.scss';
import { TitleText, CustomBtn, CustomModal } from '../index';
import { Formik, Field, Form } from 'formik';
import { CustomInput } from '../Form_element/index';
import * as yup from 'yup';

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



const Order_btn = React.memo(function Order_btn(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CustomBtn tag='div' color='orange' href={handleOpen}>
                <TitleText tag='span' weight='700' size='10' color='white'>
                    ЗАМОВИТИ
                </TitleText>
            </CustomBtn>

            <CustomModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
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
                            <TitleText animation={true} style={s.order_title} tag='div' weight='700' size='5' color='orange'>
                                Заявка на купівлю
                            </TitleText>
                            <TitleText animation={true} style={s.order_text} tag='div' weight='500' size='7' color='green'>
                                WellVam (ВеллВам)
                            </TitleText>
                            <Field
                                placeholder="Ім'я"
                                name="name"
                                id="name"
                                type="text"
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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                component={CustomInput}
                            />
                            <CustomBtn tag='button' type={'submit'} color='orange' href={handleSubmit}>
                                <TitleText tag='span' weight='700' size='10' color='white'>
                                    Відправити
                                </TitleText>
                            </CustomBtn>
                        </Form>
                    )}

                </Formik>
            </CustomModal>
        </>
    );
});

export default Order_btn;
