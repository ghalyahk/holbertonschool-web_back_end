import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) =>
      results.map((r) => {
        if (r.status === 'fulfilled') {
          return { status: r.status, value: r.value };
        }
        return { status: 'rejected', value: r.reason }; // map reason -> value
      })
    );
}
