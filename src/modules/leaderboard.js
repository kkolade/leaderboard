const scoreBoard = document.querySelector('.scores');
const addScoreForm = document.querySelector('.add-score-form');

const CurrentScore = class {
  constructor(userName, score) {
    userName = this.userName;
    score = this.score;
  }
};

export { scoreBoard, addScoreForm, CurrentScore };
