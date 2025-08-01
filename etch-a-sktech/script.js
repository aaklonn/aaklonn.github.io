const adjustGridButton = document.querySelector(".adjust");

//adjust grid button hover effect
adjustGridButton.addEventListener("mouseover", () => {
  adjustGridButton.classList.add("hover");
});
adjustGridButton.addEventListener("mouseout", () => {
  adjustGridButton.classList.remove("hover");
});

const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".close-button");
const gridValueInput = document.querySelector(".grid-squares");
//play button over effect
const playButton = document.querySelector(".play");
playButton.addEventListener("mouseover", () => {
  playButton.classList.add("hover");
});
playButton.addEventListener("mouseout", () => {
  playButton.classList.remove("hover");
});

//show popup
adjustGridButton.addEventListener("click", () => {
  popup.classList.remove("disabled");
});

//close buttonhover
popupCloseButton.addEventListener("mouseover", () => {
  popupCloseButton.classList.add("hover");
});
popupCloseButton.addEventListener("mouseout", () => {
  popupCloseButton.classList.remove("hover");
});

//popup close
popupCloseButton.addEventListener("click", () => {
  popup.classList.add("disabled");
});

//clearbutton
const clearButton = document.createElement("button");
clearButton.classList = "clear";
clearButton.textContent = "CLEAR";

clearButton.addEventListener("click", () => {
  const gridSquaresList = document.querySelectorAll(".grid-square");
  const gridSquares = Array.from(gridSquaresList);
  gridSquares.forEach((item) => {
    item.style.backgroundColor = "black";
  });
});

clearButton.addEventListener("mouseover", () => {
  clearButton.classList.add("hover");
});
clearButton.addEventListener("mouseout", () => {
  clearButton.classList.remove("hover");
});

//input checker if squares are more than 100
gridValueInput.addEventListener("input", () => {
  if (gridValueInput.value !== "") {
    gridValueInput.classList = "grid-input-entered";
    if (Number(gridValueInput.value) > 100) {
      alert("PLEASE ENTER A VALUE LESS THAN 100");
      gridValueInput.style.backgroundColor = "rgba(252, 0, 0, 0.66)";
      gridValueInput.style.color = "white";
    } else {
      gridValueInput.style.backgroundColor = "rgba(0, 255, 0, 0.66)";
      gridValueInput.style.color = "white";
    }
  } else if (gridValueInput.value === "") {
    gridValueInput.classList = "grid-squares";
    gridValueInput.style.backgroundColor = "white";
    gridValueInput.style.color = "black";
  }
});

//container size definer
const gridContainer = document.querySelector(".container");
const gridSection = document.querySelector(".grid-section");
gridContainer.style.pointerEvents = "auto";
//liftcursor
const liftCursorButton = document.createElement("button");
liftCursorButton.classList = "lift";
liftCursorButton.textContent = "DRAWING ENABLED";
liftCursorButton.style.backgroundColor = "rgba(0, 255, 0, 0.66)";

//lift cursor section

liftCursorButton.addEventListener("click", () => {
  if (gridContainer.style.pointerEvents == "auto") {
    gridContainer.style.pointerEvents = "none";
    liftCursorButton.textContent = "DRAWING DISABLED";
    liftCursorButton.style.backgroundColor = "rgba(255, 0, 0, 0.66)";
  } else if (gridContainer.style.pointerEvents == "none") {
    gridContainer.style.pointerEvents = "auto";
    liftCursorButton.textContent = "DRAWING ENABLED";
    liftCursorButton.style.backgroundColor = "rgba(0, 255, 0, 0.66)";
  }
});
let createGrid = (noOfSquares, sizeOFSquares) => {
  for (let i = 1; i <= noOfSquares; i++) {
    let gridRowToAppend = document.createElement("div");
    if (i === 1) {
      gridRowToAppend.classList = "first-grid-row";
    } else {
      gridRowToAppend.classList = "grid-row";
    }

    for (let j = 1; j <= noOfSquares; j++) {
      let Square = document.createElement("div");
      Square.classList = "grid-square";
      Square.style.width = `${sizeOFSquares}px`;
      Square.style.height = `${sizeOFSquares}px`;
      gridRowToAppend.appendChild(Square);
    }
    gridContainer.appendChild(gridRowToAppend);
  }
  gridSection.insertBefore(liftCursorButton, gridContainer);
  gridSection.appendChild(clearButton);
  gridValueInput.value = "";
  noOfSquares = null;
};

const playPopup = document.querySelector(".playpopup");
const currentBody = document.querySelector(".user-input");
const commands = document.querySelector(".commands");

playPopup.addEventListener("click", () => {
  let noOfSquares = Number(gridValueInput.value);
  let sizeOFSquares = 960 / noOfSquares;
  let gridContainerSize = 960 + (noOfSquares + 1) * 0.1;
  popup.classList.add("disabled");
  commands.remove();
  gridSection.style.backgroundColor = "white";
  gridSection.style.padding = "0px";
  gridSection.style.marginTop = "20px";
  gridContainer.style.width = `${gridContainerSize}px`;
  gridContainer.style.height = `${gridContainerSize}px`;
  createGrid(noOfSquares, sizeOFSquares);
  const gridSquaresList = document.querySelectorAll(".grid-square");
  const gridSquares = Array.from(gridSquaresList);

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "black",
    "white",
    "cyan",
    "magenta",
    "lime",
    "maroon",
    "navy",
    "olive",
    "teal",
    "gold",
    "coral",
  ];

  gridSquares.forEach((item) => {
    let randomColor = Math.floor(Math.random() * 20);
    let gridcolor = colors[randomColor];
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = gridcolor;
    });
    item.addEventListener("mouseout", () => {
      item.style.backgroundColor = gridcolor;
    });
  });
});

playButton.addEventListener("click", () => {
  gridValueInput.value = "64";
  let noOfSquares = Number(gridValueInput.value);
  let sizeOFSquares = 960 / noOfSquares;
  let gridContainerSize = 960 + (noOfSquares + 1) * 0.1;
  commands.remove();
  gridSection.style.backgroundColor = "white";
  gridSection.style.padding = "0px";
  gridSection.style.marginTop = "20px";
  gridContainer.style.width = `${gridContainerSize}px`;
  gridContainer.style.height = `${gridContainerSize}px`;
  createGrid(noOfSquares, sizeOFSquares);
  const gridSquaresList = document.querySelectorAll(".grid-square");
  const gridSquares = Array.from(gridSquaresList);
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "black",
    "white",
    "cyan",
    "magenta",
    "lime",
    "maroon",
    "navy",
    "olive",
    "teal",
    "gold",
    "coral",
  ];

  gridSquares.forEach((item) => {
    let randomColor = Math.floor(Math.random() * 20);
    let gridcolor = colors[randomColor];
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = gridcolor;
    });
    item.addEventListener("mouseout", () => {
      item.style.backgroundColor = gridcolor;
    });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Control") {
    if (gridContainer.style.pointerEvents == "auto") {
      gridContainer.style.pointerEvents = "none";
      liftCursorButton.textContent = "DRAWING DISABLED";
      liftCursorButton.style.backgroundColor = "rgba(255, 0, 0, 0.66)";
    } else if (gridContainer.style.pointerEvents == "none") {
      gridContainer.style.pointerEvents = "auto";
      liftCursorButton.textContent = "DRAWING ENABLED";
      liftCursorButton.style.backgroundColor = "rgba(0, 255, 0, 0.66)";
    }
  } else if (event.key === "Delete") {
    const gridSquaresList = document.querySelectorAll(".grid-square");
    const gridSquares = Array.from(gridSquaresList);
    gridSquares.forEach((item) => {
      item.style.backgroundColor = "black";
    });
  }
});
