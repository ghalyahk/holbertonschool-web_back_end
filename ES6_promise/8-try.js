export default function divideFunction(numerator, denominator) {
  // Check if the denominator is 0
  if (denominator === 0) {
    // Throw an error if division by 0 is attempted
    throw new Error('cannot divide by 0');
  }
  // Otherwise, return the result of the division
  return numerator / denominator;
}
