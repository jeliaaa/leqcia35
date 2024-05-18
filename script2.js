const fooFunction = (data) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${data} `)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};
fooFunction();

