import type { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FormInputProps {
  label: string;
  id: string;
  register: UseFormRegister<any>;
  isTextarea?: boolean;
  rows?: number;
  cols?: number;
  type?: string;
  placeholder?: string;
  required?: {
    required: string;
    pattern?: RegExp;
  };
  errors: FieldErrors<any>;
}
