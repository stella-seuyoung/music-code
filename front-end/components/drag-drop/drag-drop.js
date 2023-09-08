//tile (draggable): a chord tile that user can drag & move around
//block (droppable): an empty box for placing a tile

//draggable & droppable elements variable
const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

//event listeners
//three different actions of dragging
draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
  //elem.addEventListener("drag", drag);
  //elem.addEventListener("dragged", dragEnd);
});

//four different actions of dropping
droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);
});

//Drag & Drop functions
//each action have data transfer property
function dragStart(event){
  //this transfers the tile's id
  event.dataTransfer.setData("text", event.target.id);
}

function dragEnter(event){
  if(!event.target.classList.contains("dropped")){
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event){
  if(!event.target.classList.contains("dropped")){
    event.preventDefault();
  }
}

function dragLeave(event){
  if(!event.target.classList.contains("dropped")){
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event){
  event.preventDefault();
  event.target.classList.remove("droppable-hover");
  //draggableElementData is the tile's id (line 27)
  const draggableElementData = event.dataTransfer.getData("text");

  //data-draggable-id is from the 'droppable-elements' class
  const droppableElementData = event.target.getAttribute("data-draggable-id");


  /*Modify statements inside of this conditional statment
  to change the answer checking functionality.

  What we need to add: 
  1)'OK' button to check the answer
  2) If user answer is incorrect, reset all the tiles(Or leave tiles that are mathced with correct block)
  */
  //if drggableElementData (tile id) == droppableElementData (block id)
  if(draggableElementData === droppableElementData){
    event.target.classList.add("dropped");
    const draggableElement = document.getElementById(draggableElementData);
    event.target.style.backgroundColor = draggableElement.style.color;
    draggableElement.classList.add("dragged");
    //fix the position if the tile is placed on the correct block.
    draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
  }
} 