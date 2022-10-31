async function firstSixIncompleteTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  const incompleteTodos = data.filter((elem) => elem.completed === false).slice(0, 6);
  console.log(incompleteTodos);
}

firstSixIncompleteTodos();
