const addItem = document.getElementById("addItem");
const submitButton = document.getElementById("submit");
const removeButton = document.getElementById("remove");
const ul = document.querySelector("ul");

//Allows you to type into the input box and submit, adding the todo to the list.
submitButton.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = addItem.value;
  ul.appendChild(li);
  addItem.value = "";
});

//click and remove the first item
removeButton.addEventListener("click", () => {
  let li = document.querySelector("li");
  ul.removeChild(li);
});
