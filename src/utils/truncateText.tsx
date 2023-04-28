export default function truncateText(
  charLimit: number,
  str: string | undefined,
): string | undefined {
  return str && str.length > charLimit
    ? `${str.substring(0, charLimit)}...`
    : str;
}
