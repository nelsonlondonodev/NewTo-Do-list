//== Code for get value of input
const dataInput = document.querySelector("#inputNewTask");
dataInput.addEventListener("input", () => {
  return dataInput.value;
});

//== Function for to create list
function buttonNewtask(_id) {
  //== Var for init the count
  let click = true;

  if (click) {
    const ulList = document.getElementById("ul-list");
    const newList = document.createElement("li");
    newList.classList.add(
      "shadow",
      "text-center",
      "p-3",
      "mt-1",
      "mb-3",
      "bg-body",
      "rounded"
    );

    const onclickLi = "clickLi" + Math.random().toString(36).substring(2, 9);

    //== This code is for to create dinamics id
    newList.id = "li-id-" + Math.random().toString(36).substring(2, 9);

    //== Image ok
    const toCreateImgOk = document.createElement("img");
    toCreateImgOk.src = "/images/icons8-de-acuerdo-94.png";
    toCreateImgOk.width = 35;
    toCreateImgOk.height = 35;
    toCreateImgOk.alt = "Image ok";
    toCreateImgOk.style.zIndex = 10;
    toCreateImgOk.classList.add("invisible");
    ulList.appendChild(toCreateImgOk);

    console.log("Conecto con imagen 1...");

    //== Image delet
    const toCreateImgDelet = document.createElement("img");
    toCreateImgDelet.src = "/images/icons8-basura-94.png";
    toCreateImgDelet.width = 35;
    toCreateImgDelet.height = 35;
    toCreateImgDelet.alt = "Image ok";
    toCreateImgDelet.style.zIndex = 10;
    toCreateImgDelet.classList.add("invisible");
    ulList.appendChild(toCreateImgDelet);

    console.log("Conecto con imagen 2...");

    ulList.appendChild(newList);
    newList.innerText = dataInput.value;
    dataInput.value = "";

    //== Code for hidden div with H3
    const divH3 = document.querySelector(".divh3");
    divH3.classList.replace("visible", "invisible");

    //== This onclick of new li
    newList.onclick = window[onclickLi] = function () {
      let click = true;

      if (click) {
        toCreateImgOk.classList.replace("invisible", "visible");
        newList.appendChild(toCreateImgOk);

        toCreateImgDelet.classList.replace("invisible", "visible");
        newList.appendChild(toCreateImgDelet);
        console.log("Entro el click");
        return;
      }
    };
  }
}
