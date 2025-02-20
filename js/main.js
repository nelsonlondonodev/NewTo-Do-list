const dataInput = document.querySelector("#inputNewTask");
const getValue = dataInput.value.trim();

console.log(getValue);

function buttonNetask() {
  const ulList = document.getElementById("ul-list");
  const newList = document.createElement("li");
  ulList.appendChild(newList);

  console.log("Conecto con la función de crear li...");
}
