"use strict";
// 1. select elements:
const text = document.querySelector("#text");
const deleteBtn = document.querySelector(".delete");
const container = document.querySelector(".container");

const saveBtn = document.querySelector(".save");
const date = new Date();

// 7. creating array for storing note
const noteArr = [];

// 2. saveBtn events:

saveBtn.onclick = (e) => {
  let html = `
<div class="card mt-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}</h5>
    <p class="card-text">${text.value}</p>
    
  </div>
</div>
    `;
  // 3. inserting elements:
  container.insertAdjacentHTML("beforeend", html);

  // 4. send to local storage
  noteArr.push(text.value);
  console.log(noteArr);
  localStorage.setItem(noteArr.length - 1, noteArr);

  // 5. changing text value:
  text.value = "";
};

// 6. delete note:

deleteBtn.onclick = () => {
  if (container.lastElementChild.classList.contains("card")) {
    container.removeChild(container.lastElementChild);
  }
};
// Hello, My name is Ayush Dutta and I am a Full Stack Engineer at TechMech.com!
localStorage.clear();
