import { describe, it, expect } from 'vitest';
import truncateText from './truncateText';

describe(`truncateText`, () => {
  it(`should truncate text correctly when string length is greater than character limit`, () => {
    const inputString = `This is a long string that needs to be truncated`;
    const characterLimit = 10;
    const expectedOutput = `This is a...`;

    const result = truncateText(characterLimit, inputString);

    expect(result).toBe(expectedOutput);
  });

  it(`should not truncate text when string length is less than or equal to character limit`, () => {
    const inputString = `Short text`;
    const characterLimit = 20;

    const result = truncateText(characterLimit, inputString);

    expect(result).toBe(inputString);
  });

  it(`should return undefined when input string is undefined`, () => {
    const inputString = undefined;
    const characterLimit = 10;

    const result = truncateText(characterLimit, inputString);

    expect(result).toBeUndefined();
  });
});
