import './css/reset.css';
import Leaderboard from './modules/leaderboard.js';
import View from './modules/view.js';
import './scss/main.scss';

const name = document.querySelector('#name');
const score = document.querySelector('#score');
const submitBtn = document.querySelector('.submit');
const refreshBtn = document.querySelector('.refresh');

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/npI1n6Hh3zxhpmmzNdO1';
const api = new Leaderboard(url);

// On Page Load
const requestUrl = `${url}/scores/`;
api.getScore(requestUrl);

setTimeout(() => {
  document.addEventListener('DOMContentLoaded', () => {
    api.getScore(requestUrl);
  });
}, 1000);

const view = new View();

// Submit Button Event
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  api.addScore(requestUrl, name.value.trim(), score.value);
  submitBtn.setCustomValidity('"Leaderboard score created correctly.');
  submitBtn.reportValidity();
  name.value = '';
  score.value = '';

  setTimeout(() => {
    api.getScore(requestUrl);
    const arr = JSON.parse(localStorage.getItem('data'));
    view.scoreList(arr);
  }, 1000);
});
