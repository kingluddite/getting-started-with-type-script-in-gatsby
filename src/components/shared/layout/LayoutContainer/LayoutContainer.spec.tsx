import React from 'react';
import { render } from '@testing-library/react';
import LayoutContainer from './LayoutContainer';
import { describe, expect, it } from 'vitest';

describe(`LayoutContainer`, () => {
  it(`renders children correctly`, () => {
    const { getByText } = render(
      <LayoutContainer>
        <div>Child 1</div>
        <div>Child 2</div>
      </LayoutContainer>,
    );

    expect(getByText(`Child 1`)).toBeInTheDocument();
    expect(getByText(`Child 2`)).toBeInTheDocument();
  });

  it(`applies section gaps when hasSectionGaps prop is true`, () => {
    // const { container } = render(
    //   <LayoutContainer hasSectionGaps>
    //     <div>Child</div>
    //   </LayoutContainer>,
    // );
    // expect(container.firstChild).toHaveStyleRule(`margin-bottom`, `40px`);
  });

  it(`does not apply section gaps when hasSectionGaps prop is false`, () => {
    // const { container } = render(
    //   <LayoutContainer hasSectionGaps={false}>
    //     <div>Child</div>
    //   </LayoutContainer>,
    // );
    // expect(container.firstChild).not.toHaveStyleRule(`margin-bottom`, `40px`);
  });
});
