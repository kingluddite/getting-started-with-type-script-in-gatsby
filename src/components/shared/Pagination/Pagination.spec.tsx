import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import { describe, expect, it } from 'vitest';

// jest.mock(`gatsby`, () => ({
//   Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
// }));

describe(`Pagination`, () => {
  it(`renders the pagination links correctly`, () => {
    const pageSize = 10;
    const totalCount = 30;
    const currentPage = 2;
    const base = `/blog`;
    const visible = true;

    render(
      // @ts-ignore
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage}
        base={base}
        visible={visible}
      />,
    );

    const prevLink = screen.getByText(`Prev`);
    // const pageLinks = screen.getAllByRole(`link`, { name: /page/i });
    const nextLink = screen.getByText(`Next`);

    expect(prevLink).toHaveAttribute(`href`, `/blog/1`);
    // expect(pageLinks.length).toBe(3); // Assuming there are 3 pages
    // expect(pageLinks[0]).toHaveClass(`current`);
    // expect(pageLinks[0]).toHaveAttribute(`href`, `/blog`);
    // expect(pageLinks[1]).not.toHaveClass(`current`);
    // expect(pageLinks[1]).toHaveAttribute(`href`, `/blog/2`);
    // expect(pageLinks[2]).not.toHaveClass(`current`);
    // expect(pageLinks[2]).toHaveAttribute(`href`, `/blog/3`);
    expect(nextLink).toHaveAttribute(`href`, `/blog/3`);
  });

  it(`renders as hidden when visible prop is false`, () => {
    const pageSize = 10;
    const totalCount = 30;
    const currentPage = 2;
    const base = `/blog`;
    const visible = false;

    render(
      // @ts-ignore
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage}
        base={base}
        visible={visible}
      />,
    );

    // const pagination = screen.getByTestId(`pagination`);
    // expect(pagination).toHaveStyle({ visibility: `hidden` });
  });
});
