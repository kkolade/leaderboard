import './css/reset.css';
import Leaderboard from './modules/leaderboard.js';
import View from './modules/view.js';
import './scss/main.scss';

const name = document.querySelector('#name');
const score = document.querySelector('#score');
const submitBtn = document.querySelector('#submit');
const refreshBtn = document.querySelector('#refresh');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/npI1n6Hh3zxhpmmzNdO1';
const api = new Leaderboard(url);

// On Page Load
const scoreURL = `${url}/scores/`;
api.getScore(scoreURL);

setTimeout(() => {
  document.addEventListener('DOMContentLoaded', () => {
    api.getScore(scoreURL);
  });
}, 1000);

const view = new View();

// Submit Button Event
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  api.addScore(scoreURL, name.value, score.value);
  submitBtn.setCustomValidity('Score added successfully');
  submitBtn.reportValidity();
  name.value = '';
  score.value = '';

  setTimeout(() => {
    api.getScore(scoreURL);
    const arr = JSON.parse(localStorage.getItem('data'));
    view.scoreList(arr);
  }, 1500);
});

// Refresh Button Event
refreshBtn.addEventListener('click', () => {
  api.getScore(scoreURL);
  if (localStorage.getItem('data')) {
    const arr = JSON.parse(localStorage.getItem('data'));
    view.scoreList(arr);
  }
});

// On Page Load
window.onload = () => {
  if (localStorage.getItem('data')) {
    const arr = JSON.parse(localStorage.getItem('data'));
    view.scoreList(arr);
  }
};
