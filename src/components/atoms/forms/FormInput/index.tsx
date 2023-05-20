// Built for: https://react-hook-form.com/get-started
// npm
import React, { FC } from 'react';

// styles
import {
  StyledCheckbox,
  StyledErrorMessage,
  StyledInput,
  StyledInputGroup,
  StyledLabel,
  StyledTextarea,
} from './styles';

// types
import { FormInputProps } from './types';

const FormInput: FC<FormInputProps> = ({
  label,
  id,
  register,
  isTextarea,
  rows,
  cols,
  type,
  placeholder,
  required,
  errors,
}) => {
  if (type === `checkbox`) {
    return (
      <StyledCheckbox>
        <input id={id} type={type} {...register(id)} />
        <label htmlFor={id}>{label}</label>
      </StyledCheckbox>
    );
  }

  return (
    <StyledInputGroup>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {isTextarea ? (
        <StyledTextarea
          id={id}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          aria-invalid={errors && errors[id] ? `true` : `false`}
          {...register(id, { required })}
        />
      ) : (
        <StyledInput
          id={id}
          type={type}
          placeholder={placeholder}
          aria-invalid={errors && errors[id] ? `true` : `false`}
          {...register(id, { required })}
        />
      )}

      {errors && errors[id]?.type === `required` && (
        <StyledErrorMessage role="alert">
          {errors[id]?.message}
        </StyledErrorMessage>
      )}
    </StyledInputGroup>
  );
};

export default FormInput;
