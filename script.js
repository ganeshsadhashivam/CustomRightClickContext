const contextMenu = document.querySelector(".wrapper");
shareMenu = document.querySelector(".share-menu");

document.addEventListener("contextmenu", (e) => {
  //preventing default context menu of the browser
  e.preventDefault();

  let x = e.offsetX,
    y = e.offsetY,
    windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    contextMenuHeight = contextMenu.offsetHeight,
    contextMenuWidth = contextMenu.offsetWidth;

  //  x is greater than window width - contextMenu width - shareMenu width
  // then show the share menu to the left else show it to the right

  if (x > windowWidth - contextMenuWidth - shareMenu.offsetWidth) {
    shareMenu.style.left = "-200px";
  } else {
    shareMenu.style.left = "";
    shareMenu.style.right = "-200px";
  }
  // if x is greater than window width- contextMenu width then set the x value
  // to window width - contextMenu width else set to the offsetX. similarrly to  y

  x = x > windowWidth - contextMenuWidth ? windowWidth - contextMenuWidth : x;
  y =
    y > windowHeight - contextMenuHeight ? windowHeight - contextMenuHeight : y;

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});

//hide the context menu on document click
document.addEventListener("click", () => {
  contextMenu.style.visibility = "hidden";
});
