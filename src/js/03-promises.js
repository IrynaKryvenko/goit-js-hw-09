import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form.form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });

};

function onSubmit(event) {
  event.preventDefault();
  const delay = Number(delayEl.value) - Number(stepEl.value);
  const step = Number(stepEl.value);
  const amount = Number(amountEl.value);
  let position = 0;
  form.reset();
  for (let i = 0; i < amount; i += 1) {
    position = i + 1;
    const currentDelay = delay + step * i;
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

form.addEventListener('submit', onSubmit);
