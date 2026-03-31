import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  // Return the Promise so the caller can await it
  return Promise.all([photoPromise, userPromise])
    .then((results) => {
      results.forEach((result) => {
        console.log(`${result.body.firstName} ${result.body.lastName}`);
      });
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
