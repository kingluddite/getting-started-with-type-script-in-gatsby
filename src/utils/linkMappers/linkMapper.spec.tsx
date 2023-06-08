import React from 'react';
import { render } from '@testing-library/react';
import linkMapper from './linkMapper';
import { describe, it, expect } from 'vitest';

describe(`linkMapper`, () => {
  const mockData = [
    {
      type: `gatsby`,
      url: `/page1`,
      text: `Page 1`,
    },
    {
      type: `gatsby`,
      url: `/page2`,
      text: `Page 2`,
    },
    {
      type: `external`,
      url: `https://example.com`,
      text: `External Link`,
    },
  ];

  it(`should render Link components for internal links`, () => {
    // @ts-ignore
    const { getByText } = render(<>{linkMapper(mockData)}</>);

    const link1 = getByText(`Page 1`);
    expect(link1.tagName).toBe(`A`);
    expect(link1).toHaveAttribute(`href`, `/page1`);

    const link2 = getByText(`Page 2`);
    expect(link2.tagName).toBe(`A`);
    expect(link2).toHaveAttribute(`href`, `/page2`);
  });

  it(`should render anchor tags for external links`, () => {
    // @ts-ignore
    const { getByText } = render(<>{linkMapper(mockData)}</>);

    const externalLink = getByText(`External Link`);
    expect(externalLink.tagName).toBe(`A`);
    expect(externalLink).toHaveAttribute(`href`, `https://example.com`);
    expect(externalLink).toHaveAttribute(`target`, `_blank`);
    expect(externalLink).toHaveAttribute(`rel`, `noopener noreferrer`);
  });
});
