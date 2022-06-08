const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

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

    title.innerText = post.userId;
    body.innerText = post.body;
    link.innerText = "ler";
    link.setAttribute("href", `/post.html?id=${post.id}`);

    div.appendChild(title);
    div

    
	  

  });
}
getAllPosts();
