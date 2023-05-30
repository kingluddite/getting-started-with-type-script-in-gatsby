import type { FieldErrors } from 'react-hook-form';

export interface FormInputProps {
  label: string;
  id: string;
  register: (id: string) => any;
  isTextarea?: boolean;
  rows?: number;
  cols?: number;
  type?: string;
  placeholder?: string;
  required?: boolean | undefined;
  errors?: FieldErrors<any> | undefined;
}
