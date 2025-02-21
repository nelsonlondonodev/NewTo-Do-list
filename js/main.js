const dataInput = document.querySelector("#inputNewTask");
dataInput.addEventListener("input", () => {
  return dataInput.value;
});

function buttonNewtask(_id) {
  let click = true;

  if (click) {
    const ulList = document.getElementById("ul-list");
    const newList = document.createElement("li");
    newList.id = "li-id-" + Math.random().toString(36).substring(2, 9);

    newList.classList.add(
      "shadow",
      "p-3",
      "mt-1",
      "ms",
      "mb-3",
      "bg-body",
      "rounded"
    );

    newList.onclick =
      "li-onclick-" + Math.random().toString(36).substring(2, 9);

    console.log(newList.id);
    console.log(newList.onclick);

    ulList.appendChild(newList);
    newList.innerText = dataInput.value;
    dataInput.value = "";

    const divH3 = document.querySelector(".divh3");
    divH3.classList.replace("visible", "invisible");
  }
}
