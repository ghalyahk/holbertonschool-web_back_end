export default function cleanSet(set, startString) {
  // Convert set to array and filter values that start with startString
  const filtered = [...set].filter((value) => value.startsWith(startString));

  // Remove the startString from each value
  const cleaned = filtered.map((value) => value.slice(startString.length));

  // Join with dash
  return cleaned.join('-');
}
