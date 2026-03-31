import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const photoResult = results[0]; // uploadPhoto result
      console.log(`${photoResult.body.firstName} ${photoResult.body.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
