const dataInput = document.querySelector("#inputNewTask");
dataInput.addEventListener("input", () => {
  console.log(dataInput.value);
});

function buttonNetask() {
  const ulList = document.getElementById("ul-list");
  const newList = document.createElement("li");
  newList.classList.add("shadow", "p-3", "mt-1", "mb-3", "bg-body", "rounded");
  ulList.appendChild(newList);

  newList.innerText = dataInput.value;

  dataInput.value = "";
}
