export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // Log message for every resolution
      console.log('Got a response from the API');
      // Return the required object on resolve
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      // Return an empty Error object on rejection
      return new Error();
    });
}
