//== Code for get value of input
const dataInput = document.querySelector("#inputNewTask");
dataInput.addEventListener("input", () => {
  return dataInput.value;
});

//== Function for to create list
function buttonNewtask(_id, classList) {
  //== Var for init the count
  let click = true;

  if (click) {
    const ulList = document.getElementById("ul-list");
    const newList = document.createElement("li");

    const onclickLi = "clickLi" + Math.random().toString(36).substring(2, 9);

    newList.id = "li-id-" + Math.random().toString(36).substring(2, 9);

    //== Image ok
    const toCreateImg = document.createElement("img");
    toCreateImg.src = "/images/icons8-de-acuerdo-94.png";
    toCreateImg.width = 50;
    toCreateImg.height = 50;
    toCreateImg.alt = "Image ok";
    ulList.appendChild(toCreateImg);

    newList.classList.add(
      "shadow",
      "p-3",
      "mt-1",
      "ms",
      "mb-3",
      "bg-body",
      "rounded"
    );

    newList.onclick = window[onclickLi] = function () {
      console.log("Entro el click");
    };

    ulList.appendChild(newList);
    newList.innerText = dataInput.value;
    dataInput.value = "";

    const divH3 = document.querySelector(".divh3");
    divH3.classList.replace("visible", "invisible");
  }
}
