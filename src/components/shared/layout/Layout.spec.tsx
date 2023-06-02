import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';
import { describe, expect, it } from 'vitest';

describe(`Layout`, () => {
  it(`renders the children components`, () => {
    render(
      <Layout>
        <div>Child Component 1</div>
        <div>Child Component 2</div>
      </Layout>,
    );

    const childComponent1 = screen.getByText(`Child Component 1`);
    const childComponent2 = screen.getByText(`Child Component 2`);

    expect(childComponent1).toBeInTheDocument();
    expect(childComponent2).toBeInTheDocument();
  });

  it(`renders the navigation and footer`, () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>,
    );

    const navigation = screen.getByRole(`navigation`);
    const footer = screen.getByRole(`contentinfo`);

    expect(navigation).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  // it(`sets the menuOpen state to false initially`, () => {
  //   render(
  //     <Layout>
  //       <div>Content</div>
  //     </Layout>,
  //   );

  //   expect(screen.getByRole(`navigation`)).toHaveAttribute(
  //     `data-menu-open`,
  //     `false`,
  //   );
  // });
});
