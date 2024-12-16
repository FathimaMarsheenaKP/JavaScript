function addBox() {
    const boxContainer = document.querySelector(".box-container");
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    boxContainer.appendChild(newBox);
}

function removeBox() {
    const boxContainer = document.querySelector(".box-container");
    const lastBox = boxContainer.lastElementChild;
    if (lastBox) {
        boxContainer.removeChild(lastBox);
    } else {
        alert("No boxes to remove!");
    }
}
