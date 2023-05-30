import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormInput from './index';

describe(`FormInput`, () => {
  it(`renders correctly`, () => {
    const props = {
      label: `Name`,
      id: `name`,
      register: vi.fn(() => 0),
      isTextarea: false,
      type: `text`,
      placeholder: `Enter your name`,
      required: true,
      errors: undefined,
    };

    render(<FormInput {...props} />);

    expect(screen.getByLabelText(`Name`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(`Enter your name`)).toBeInTheDocument();
  });
});
