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

    const onclickLi = "clickLi" + Math.random().toString(36).substring(2, 9);

    newList.id = "li-id-" + Math.random().toString(36).substring(2, 9);

    function elementsLi() {
      //== Image ok
      const toCreateImgOk = document.createElement("img");
      toCreateImgOk.src = "/images/icons8-de-acuerdo-94.png";
      toCreateImgOk.width = 50;
      toCreateImgOk.height = 50;
      toCreateImgOk.alt = "Image ok";
      toCreateImgOk.style.zIndex = 10;
      ulList.appendChild(toCreateImgOk);

      console.log("Conecto con imagen 1...");

      //== Image delet
      const toCreateImgDelet = document.createElement("img");
      toCreateImgDelet.src = "/images/icons8-basura-94.png";
      toCreateImgDelet.width = 50;
      toCreateImgDelet.height = 50;
      toCreateImgDelet.alt = "Image ok";
      toCreateImgDelet.style.zIndex = 10;
      ulList.appendChild(toCreateImgDelet);

      console.log("Conecto con imagen 2...");

      return;
    }

    elementsLi();

    newList.classList.add(
      "shadow",
      "text-center",
      "p-3",
      "mt-1",
      "mb-3",
      "bg-body",
      "rounded"
    );

    newList.onclick = window[onclickLi] = function () {
      let click = true;

      if (click) {
        elementsLi();
        console.log("Entro el click");
        return;
      }
    };

    ulList.appendChild(newList);
    newList.innerText = dataInput.value;
    dataInput.value = "";

    const divH3 = document.querySelector(".divh3");
    divH3.classList.replace("visible", "invisible");
  }
}
