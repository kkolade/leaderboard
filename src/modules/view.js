class View {
  scoreList = (arr) => {
    const list = document.querySelector('.scores');
    list.innerHTML = '';
    const li = [];
    let i = 0;
    arr.result = arr.result.sort((a, b) => b.score - a.score);
    arr.result.forEach((element) => {
      li[i] = document.createElement('li');
      li[i].textContent = `${element.user}: ${element.score}`;
      list.append(li[i]);
      i += 1;
    });
  };
}

export default View;
