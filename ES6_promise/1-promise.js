export default function getFullResponseFromAPI(success) {
  // Return a Promise that resolves or rejects based on the success parameter
  return new Promise((resolve, reject) => {
    if (success) {
      // If success is true, resolve with an object
      resolve({ status: 200, body: 'Success' });
    } else {
      // If success is false, reject with an Error
      reject(new Error('The fake API is not working currently'));
    }
  });
}
