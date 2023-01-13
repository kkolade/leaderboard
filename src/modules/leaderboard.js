class Leaderboard {
  constructor(url) {
    this.url = url;
  }

  createGameID = async (url) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'The new K_Boy Game' }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('gameID', JSON.stringify(data));
      });
  };

  getScore = async (url) => {
    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('data', JSON.stringify(data));
      });
  };

  addScore = async (url, name, score) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ user: name, score }),
    }).then((response) => response.json());
  };
}
