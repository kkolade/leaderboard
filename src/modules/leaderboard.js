const scoreBoard = document.querySelector('.scores');
const addScoreForm = document.querySelector('.add-score-form');

const CurrentScore = class {
  constructor(userName, score) {
    this.userName = userName;
    this.score = score;
  }
};

export { scoreBoard, addScoreForm, CurrentScore };
