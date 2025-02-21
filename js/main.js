const dataInput = document.querySelector("#inputNewTask");
dataInput.addEventListener("input", () => {
  return dataInput.value;
});

function buttonNewtask(_id) {
  let click = true;
  let counter = 0;

  if (click) {
    const ulList = document.getElementById("ul-list");
    const newList = document.createElement("li");
    newList.id = `li-id-${counter}`;
    counter++;

    newList.classList.add(
      "shadow",
      "p-3",
      "mt-1",
      "ms",
      "mb-3",
      "bg-body",
      "rounded"
    );

    console.log(newList.id);

    ulList.appendChild(newList);
    newList.innerText = dataInput.value;
    dataInput.value = "";

    const divH3 = document.querySelector(".divh3");
    divH3.classList.replace("visible", "invisible");
  }
}
