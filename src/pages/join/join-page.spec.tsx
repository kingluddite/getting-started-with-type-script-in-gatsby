import React from 'react';
import * as Gatsby from 'gatsby';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import JoinPage from './index';

const useStaticQuery = vi.spyOn(Gatsby, `useStaticQuery`);

const mockUseStaticQuery = {
  joinPage: {
    headingOne: `Mock Heading`,
    subheading: `Mock Subheading`,
    instructions: `Mock Instructions`,
  },
};

describe(`Join Page`, () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it(`renders the JoinPage component`, () => {
    const { getByLabelText, getByText } = render(
      <JoinPage data={mockUseStaticQuery as any} />,
    );

    const firstNameInput = getByLabelText(`First Name*`);
    const lastNameInput = getByLabelText(`Last Name*`);
    const emailInput = getByLabelText(`Email*`);
    const titleInput = getByLabelText(`Title*`);
    const schoolInput = getByLabelText(`School*`);
    const commentsInput = getByLabelText(`Comments`);
    const submitButton = getByText(`Submit`);

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(schoolInput).toBeInTheDocument();
    expect(commentsInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it(`submits the form successfully`, () => {
    const { getByLabelText, getByText } = render(
      <JoinPage data={mockUseStaticQuery as any} />,
    );

    const firstNameInput = getByLabelText(`First Name*`);
    const lastNameInput = getByLabelText(`Last Name*`);
    const emailInput = getByLabelText(`Email*`);
    const titleInput = getByLabelText(`Title*`);
    const schoolInput = getByLabelText(`School*`);
    const commentsInput = getByLabelText(`Comments`);
    const submitButton = getByText(`Submit`);

    fireEvent.change(firstNameInput, { target: { value: `John` } });
    fireEvent.change(lastNameInput, { target: { value: `Doe` } });
    fireEvent.change(emailInput, { target: { value: `john.doe@example.com` } });
    fireEvent.change(titleInput, { target: { value: `Professor` } });
    fireEvent.change(schoolInput, { target: { value: `Example School` } });
    fireEvent.change(commentsInput, { target: { value: `Test message` } });

    fireEvent.click(submitButton);

    // Add assertions for successful form submission
  });
});
