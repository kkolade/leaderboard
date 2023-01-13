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