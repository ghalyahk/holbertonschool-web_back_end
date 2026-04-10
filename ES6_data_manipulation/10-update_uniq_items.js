export default function updateUniqueItems(map) {
  // Check if argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Loop through each entry and update quantity if it's 1
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
