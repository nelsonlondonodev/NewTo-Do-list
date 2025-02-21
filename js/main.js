const dataInput = document.querySelector("#inputNewTask");
dataInput.addEventListener("input", () => {
  return dataInput.value;
});

function buttonNewtask() {
  let click = true;

  if (click) {
    const ulList = document.getElementById("ul-list");
    const newList = document.createElement("li");
    newList.classList.add(
      "shadow",
      "p-3",
      "mt-1",
      "ms",
      "mb-3",
      "bg-body",
      "rounded"
    );

    ulList.appendChild(newList);
    newList.innerText = dataInput.value;
    dataInput.value = "";
  } else {
    console.log("Conecto con el else...");
    const divH3 = document.querySelector(".divh3");
    divH3.classList.add("invisible");
  }
}
