//== Code for get value of input
const dataInput = document.querySelector("#inputNewTask");
dataInput.addEventListener("input", () => {
  return dataInput.value;
});

//== Function for to create list
function buttonNewtask() {
  //== Obtener el valor del input
  const inputValue = dataInput.value.trim();

  //== Var for init the count
  let click = true;

  if (inputValue === "") {
    alert("Debe introducir una tarea...");
    return;
  }
  if (click) {
    //== Code for hidden div with H3
    const divH3 = document.querySelector(".divh3");
    divH3.classList.replace("visible", "invisible");

    //== Code for to create a new li
    const ulList = document.getElementById("ul-list");

    const newList = document.createElement("li");
    newList.classList.add(
      "shadow",
      "text-center",
      "p-3",
      "mb-3",
      "bg-body",
      "rounded",
      "fw-bold"
    );

    //== Dinamic onclick
    const onclickLi = "clickLi" + Math.random().toString(36).substring(2, 9);

    //== This code is for to create dinamics id
    newList.id = "li-id-" + Math.random().toString(36).substring(2, 9);

    //== Image delet
    const toCreateImgDelet = document.createElement("img");
    toCreateImgDelet.src = "/images/icons8-basura-94.png";
    toCreateImgDelet.width = 35;
    toCreateImgDelet.height = 35;
    toCreateImgDelet.alt = "Image ok";
    toCreateImgDelet.style.zIndex = 10;
    toCreateImgDelet.classList.add("invisible");
    newList.appendChild(toCreateImgDelet);

    ulList.appendChild(newList);
    newList.textContent = dataInput.value;
    dataInput.value = "";

    //== This onclick of new li
    newList.onclick = window[onclickLi] = function () {
      let click = true;

      if (click) {
        newList.classList.add("text-decoration-line-through", "text-muted");

        toCreateImgDelet.classList.replace("invisible", "visible");
        newList.appendChild(toCreateImgDelet);
        return;
      } else {
        ulList.classList.remove("text-decoration-line-through");
        return;
      }
    };
  }
}
