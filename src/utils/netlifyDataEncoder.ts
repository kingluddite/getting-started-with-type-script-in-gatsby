// encodes the captured form data in the format that Netlify's backend requires
// example: form-name=contact&firstName=a&lastName=b&jobTitle=a&companyName=a&phone=3&email=me%40you.com&message=tes
export default function netlifyDataEncoder(
  formData: Record<string, any>,
): string {
  return Object.keys(formData)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`,
    )
    .join(`&`);
}
