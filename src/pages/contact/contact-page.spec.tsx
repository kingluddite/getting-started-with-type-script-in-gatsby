import React from 'react';
import * as Gatsby from 'gatsby';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import ContactPage from './index';

const useStaticQuery = vi.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  contactPage: {
    headingOne: `Mock Heading`,
    subheading: `Mock Subheading`,
    instructions: `Mock Instructions`,
  },
};

describe(`Contact Page`, () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it(`renders the ContactPage component`, () => {
    const { getByLabelText, getByText } = render(
      <ContactPage data={mockUseStaticQuery as any} />,
    );

    const firstNameInput = getByLabelText(`First Name*`);
    const lastNameInput = getByLabelText(`Last Name*`);
    const emailInput = getByLabelText(`Email*`);
    const messageInput = getByLabelText(`Message*`);
    const submitButton = getByText(`Submit`);

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it(`submits the form successfully`, () => {
    const { getByLabelText, getByText } = render(
      <ContactPage data={mockUseStaticQuery as any} />,
    );

    const firstNameInput = getByLabelText(`First Name*`);
    const lastNameInput = getByLabelText(`Last Name*`);
    const emailInput = getByLabelText(`Email*`);
    const messageInput = getByLabelText(`Message*`);
    const submitButton = getByText(`Submit`);

    fireEvent.change(firstNameInput, { target: { value: `John` } });
    fireEvent.change(lastNameInput, { target: { value: `Doe` } });
    fireEvent.change(emailInput, { target: { value: `john.doe@example.com` } });
    fireEvent.change(messageInput, {
      target: { value: `Hello, this is a test message.` },
    });

    fireEvent.click(submitButton);

    // Add assertions for successful form submission
  });
});
