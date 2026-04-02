import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Return a promise that resolves to the combined string
  return Promise.all([userPromise, photoPromise])
    .then(([user, photo]) => `${photo} ${user.firstName} ${user.lastName}`);
}
