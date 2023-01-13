import './css/reset.css';
import './scss/main.scss';

const name = document.querySelector('#name');
const score = document.querySelector('#score');
const submitBtn = document.querySelector('.submit');
const refreshBtn = document.querySelector('.refresh');

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/npI1n6Hh3zxhpmmzNdO1';
const api = new Leaderboard(url);
