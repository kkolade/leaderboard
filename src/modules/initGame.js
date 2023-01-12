const newGame = {
  name: 'Lovely Game',
};

const option = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newGame),
};
const myGame = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    option
  );

  if (!response.ok) {
    throw new Error(console.log(response.status));
  } else {
    const data = await response.json();
    return data;
  }
};
