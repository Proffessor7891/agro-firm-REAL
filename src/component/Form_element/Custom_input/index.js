import React from 'react';
import InputMask from "react-input-mask";
import s from './style.module.scss';

const CustomInput = React.memo(function CustomInput({ field, form: { touched, errors }, ...props }) {
  let field_id = props.id;
  let current_input;
  let classes = `${s.input_field} ${touched[field.name] && errors[field.name] ? s.input__box_error : ''} `;

  if (field_id == 'phone') {
    current_input = <InputMask className={classes} type="text" {...field} {...props} />;
  } else if (field_id == 'comment') {
    current_input = <textarea className={classes} type="text" {...field} {...props} />;
  } else {
    current_input = <input className={classes} autoComplete="off" type="text" {...field} {...props} />;
  }
  return (
    <div className={`${s.input} ${props.styles != undefined ? props.styles : ''}`}>
      <div className={s.input__box}>
        {current_input}
      </div>

      {touched[field.name] && errors[field.name] && (
        <div className={s.input_error}>{errors[field.name]}</div>
      )}
    </div>
  )
});





export default CustomInput;
