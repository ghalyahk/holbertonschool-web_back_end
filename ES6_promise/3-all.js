import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  // Start both promises
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  // Collectively handle them
  Promise.all([photoPromise, userPromise])
    .then((results) => {
      results.forEach((result) => {
        console.log(`${result.body.firstName} ${result.body.lastName}`);
      });
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
