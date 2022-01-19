import * as yup from 'yup';

export const emailValidation = () =>
    yup.string()
        .required("Поле обов'язкове для заповнення")
        .email('Введіть E-mail адресу');

export const nameValidation = (fieldName) =>
    yup.string().matches(
        /^([А-ЯҐЄЁІЇа-яґєёії]|[A-Za-z]|[']|["]|[ ]|[-]){2,}$/,
        `${fieldName} має бути не менше двох символів і містити тільки букви`,
    );
