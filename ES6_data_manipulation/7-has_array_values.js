export default function hasValuesFromArray(set, array) {
  // Check if every element in array exists in the set
  return array.every((item) => set.has(item));
}
