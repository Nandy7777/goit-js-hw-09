import Notiflix from 'notiflix';

const delayF = document.querySelector(`[name="delay"]`);
const stepF = document.querySelector(`[name="step"]`);
const amountF = document.querySelector(`[name="amount"]`);
const formBtn = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

formBtn.addEventListener(`click`, onFormBtnSubmit);

function onFormBtnSubmit(evt) {
  evt.preventDefault();

  for (let i = 0; i < amountF.value; i += 1) {
    createPromise(i + 1, Number(delayF.value) + 1 * Number(stepF.value))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  };
};