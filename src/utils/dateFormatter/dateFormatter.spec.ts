import { describe, it, expect } from 'vitest';
import { dateFormatter } from './dateFormatter';

describe(`dateFormatter`, () => {
  it(`should format date correctly`, () => {
    // Create a test date
    const testDate = new Date(`2022-01-15`);

    // Call the dateFormatter function
    const result = dateFormatter(testDate);

    // Expected output
    const expectedOutput = `January 15, 2022`;

    // Assert that the result matches the expected output
    expect(result).toBe(expectedOutput);
  });
});
