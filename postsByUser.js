async function postsByUser(userId) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  const posts = data.filter((elem) => elem.userId === userId);
  console.log(posts);
}

postsByUser(4);
