const getScores = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/npI1n6Hh3zxhpmmzNdO1/scores/'
  );

  if (!response.ok) {
    throw new Error(console.log(response.status));
  } else {
    const data = await response.json();
    return data;
  }
};
