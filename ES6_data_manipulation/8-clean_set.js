export default function cleanSet(set, startString) {
  // Check if startString is a non-empty string
  if (typeof startString !== 'string' || startString.length === 0) return '';

  // Convert set to array and filter values that start with startString
  const filtered = [...set].filter((value) => value.startsWith(startString));

  // Remove the startString from each value
  const cleaned = filtered.map((value) => value.slice(startString.length));

  // Join with dash
  return cleaned.join('-');
}
