import { describe, it, expect } from 'vitest';
import netlifyDataEncoder from './netlifyDataEncoder';

describe(`netlifyDataEncoder`, () => {
  it(`encodes the captured form data correctly`, () => {
    const formData = {
      'form-name': `contact`,
      firstName: `John`,
      lastName: `Doe`,
      email: `john.doe@example.com`,
      message: `Hello, world!`,
    };

    const expectedOutput = `form-name=contact&firstName=John&lastName=Doe&email=john.doe%40example.com&message=Hello%2C%20world!`;

    const actualOutput = netlifyDataEncoder(formData);

    // this is a great way to test different values!
    console.log(`Expected:`, expectedOutput);
    console.log(`Actual:`, actualOutput);

    expect(actualOutput).toEqual(expectedOutput);
  });
});
