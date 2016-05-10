var inputField = document.getElementsByTagName("input")[0]

function createTask(){
  var itemList = document.querySelector(".itemList")
  var itemDiv = document.createElement("div");
  var icon = document.createElement("i");
  itemDiv.classList.add("items")
  var trash = document.createElement("span")
  icon.classList.add("fa","fa-trash-o")
  icon.setAttribute("aria-hidden", "true")
  trash.appendChild(icon)
  trash.classList.add("trash")
  itemDiv.appendChild(trash)
  var p = document.createElement("p");
  var itemMsg = document.createTextNode(document.getElementsByTagName("input")[0].value);
  p.appendChild(itemMsg);
  itemDiv.appendChild(p)
  itemList.appendChild(itemDiv);
  //add delete event to list trash icon
  icon.addEventListener("click", deleteItem,false)

  //create check function on click by toggling classes
  p.addEventListener("click", taskCompleted, false);
  //clear input field when event is done
  inputField.value = " "
}

function deleteItem(){
  this.parentNode.parentNode.remove();
}

function taskCompleted(){
  this.style.textDecoration = "line-through";
}

inputField.onkeypress = function(event){
  if(event.keyCode == 13){
    if(inputField.value == ""){
      }else {
        createTask();
      }
      return false
    }
  }
