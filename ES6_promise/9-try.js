export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Try executing the math function
    const result = mathFunction();
    queue.push(result); // Add the result to the queue
  } catch (error) {
    // If an error occurs, add the error message to the queue
    queue.push(error.toString());
  } finally {
    // Always add this message
    queue.push('Guardrail was processed');
  }

  return queue;
}
