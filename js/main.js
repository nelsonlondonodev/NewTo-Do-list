//== Code for get value of input
const dataInput = document.querySelector("#inputNewTask");
dataInput.addEventListener("input", () => {
  return dataInput.value;
});

//== Function for to create list
function buttonNewtask() {
  //== Var for init the count
  let click = true;

  if (click) {
    //== Code for hidden div with H3
    const divH3 = document.querySelector(".divh3");
    divH3.classList.replace("visible", "invisible");

    const ulList = document.getElementById("ul-list");
    const newList = document.createElement("li");
    newList.classList.add(
      "shadow",
      "text-center",
      "p-3",
      "mb-3",
      "bg-body",
      "rounded",
      "fw-bold",
      "ms-5"
    );

    //== Dinamic onclick
    const onclickLi = "clickLi" + Math.random().toString(36).substring(2, 9);

    //== This code is for to create dinamics id
    newList.id = "li-id-" + Math.random().toString(36).substring(2, 9);

    //== Image ok
    // const toCreateImgOk = document.createElement("img");
    // toCreateImgOk.src = "/images/icons8-de-acuerdo-94.png";
    // toCreateImgOk.width = 35;
    // toCreateImgOk.height = 35;
    // toCreateImgOk.alt = "Image ok";
    // toCreateImgOk.style.zIndex = 10;
    // toCreateImgOk.classList.add("invisible");
    // newList.appendChild(toCreateImgOk);

    //==
    const spanValue = document.createElement("span");
    spanValue.textContent = dataInput.value;
    newList.appendChild(spanValue);

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
    ulList.onclick = window[onclickLi] = function () {
      let click = true;

      if (click) {
        // toCreateImgOk.classList.replace("invisible", "visible");
        // newList.appendChild(toCreateImgOk);

        newList.classList.add("text-decoration-line-through");

        toCreateImgDelet.classList.replace("invisible", "visible");
        newList.appendChild(toCreateImgDelet);
        return;
      }
    };
  }
}
