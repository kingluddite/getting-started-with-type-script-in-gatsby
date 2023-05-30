/**
 * Truncates a string if it exceeds the specified character limit.
 * @param charLimit The maximum number of characters allowed in the truncated string.
 * @param str The input string to truncate.
 * @returns The truncated string or undefined if the input string is undefined.
 */
export default function truncateText(
  charLimit: number,
  str: string | undefined,
): string | undefined {
  // Check if the input string exists and its length is greater than the character limit
  if (str && str.length > charLimit) {
    // Truncate the string and append ellipsis
    return `${str.substring(0, charLimit - 1)}...`;
  } else {
    // Return the original string if it does not exceed the character limit
    return str;
  }
}
