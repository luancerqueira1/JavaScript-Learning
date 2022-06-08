const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector('#post');
const postContainer = document.querySelector('#post-container');
const comentsContainer = document.querySelector('#coments-container');

const comentForm = document.querySelector('#comment-form');
const emailIput = document.querySelector('#email');
const bodyIput = document.querySelector('#body');

//get id from url
const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get('id')
  

//get all posts
async function getAllPosts() {
  const response = await fetch(url);
  const responseData = await response.json();
  console.log(response);
  console.log(responseData);

  loadingElement.classList.add("hide");

  responseData.map((post) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "ler";
    link.setAttribute("href", `/post.html?id=${post.id}`);

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);

    postsContainer.appendChild(div);


  });
}
//get individual posts
async function getPost(id) {
  const [responsePost, responseComents] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);
  const dataPost = await responsePost.json();

  const dataComents = await responseComents.json();

  loadingElement.classList.add('hide');
  postPage.classList.remove('hide')

  const title = document.createElement('h1');
  const body = document.createElement('p');

  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

  postContainer.appendChild(title);
  postContainer.appendChild(body);

  dataComents.map((comment) => {
    createComment(comment);
  })
}

function createComment(comment) {
  const div = document.createElement('div');
  const email = document.createElement('h3');
  const comentBody = document.createElement('p');

  email.innerText = comment.email;
  comentBody.innerText = comment.body;

  div.appendChild(email);
  div.appendChild(comentBody);

  comentsContainer.appendChild(div)

}

//post a comment 
async function postComment(comment) {
  const response = await fetch(`${url}/${postId}/comments`, {
    method: 'POST',
    body: comment,
    headers: {
      "Content-type": "application/json",
    },
  })

  const data = await response.json();

  createComment(data);
}

if (!postId) {
  getAllPosts();
}
else {
  getPost(postId);

  //add event to comment form
  comentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let comment = {
      email: emailIput.value,
      body: bodyIput.value,
    }

    comment = JSON.stringify(comment);

    postComment(comment)
  })
}
  

