const form = document.querySelector(`form`)
const delay = document.querySelector(`input[delay]`);
const step = document.querySelector(`input[step]`);
const amount = document.querySelector(`input[amount]`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(){}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      // Reject
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}

// const createPromise = elm => {
//   return new Promise((resolve, reject, position, delay) => {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       // Fulfill
//       resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     } else {
//       // Reject
//       reject(`❌ Rejected promise ${position} in ${delay}ms`);
//     };
//   });
// };

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
