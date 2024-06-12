"use strict";

const post_contant = document.querySelector(".post_contant");

fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
  .then((response) => {
    if (!response.ok) {
      throw response.status;
    }
    return response.json();
  })
  .then((posts) => {
    const fragment = new DocumentFragment();
    posts.forEach((element) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      const h1 = document.createElement("h1");
      h1.classList.add("h1");
      h1.textContent = element.title;
      const p = document.createElement("p");
      p.textContent = element.body;
      p.classList.add("none");
      const openBtn = document.createElement("button");
      openBtn.textContent = "Red Here";
      postDiv.appendChild(h1);
      postDiv.appendChild(p);
      postDiv.appendChild(openBtn);
      fragment.appendChild(postDiv);
      openBtn.addEventListener("click", function () {
        p.classList.toggle("none");
        openBtn.textContent === "Red Here"
          ? (openBtn.textContent = "Hide")
          : (openBtn.textContent = "Red Here");
      });
      //   postDiv.addEventListener("click", function () {
      //     p.classList.toggle("none");
      //   });
    });
    post_contant.appendChild(fragment);
  })
  .catch(() => {
    const h1 = document.createElement("h1");
    h1.textContent = "Server Problem";
    document.body.appendChild(h1);
  });
