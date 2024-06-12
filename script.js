"use strict";

const post_contant = document.querySelector(".post_contant");
const overal = document.querySelector(".overal");
const post_side = document.querySelector(".post_side");
const close = document.getElementById("close");
const h2 = document.getElementById("h2");
const h1Header = document.getElementById("h1");

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
        openBtn.textContent === "Hide"
          ? (openBtn.textContent = "Read Here")
          : (openBtn.textContent = "Hide");
      });

      postDiv.addEventListener("click", function (e) {
        let content = e.target.innerHTML;
        if (content === "Hide" || content === "Read Here") return;
        h1Header.textContent = element.title;
        h2.textContent = element.body;
        post_side.appendChild(h1Header);
        post_side.appendChild(h2);
        overal.classList.remove("none");
      });
    });
    post_contant.appendChild(fragment);
  })
  .catch(() => {
    const h1 = document.createElement("h1");
    h1.textContent = "Server Problem";
    document.body.appendChild(h1);
  });

close.addEventListener("click", () => {
  overal.classList.add("none");
  h2.innerHTML = "";
  h1Header.innerHTML = "";
});
overal.addEventListener("click", () => {
  overal.classList.add("none");
  h1Header.innerHTML = "";
  h2.innerHTML = "";
});
