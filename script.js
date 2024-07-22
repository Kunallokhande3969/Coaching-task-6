function addItem() {
    var itemInput = document.querySelector("#itemInput");
    var itemList = document.querySelector("#itemList");
    if (itemInput.value === " ") {
      alert("Please enter an item");
    }
    var li = document.createElement("li");
    li.innerHTML = itemInput.value;
    itemList.appendChild(li);
    itemInput.value = "";
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
  
    deleteButton.onclick = function () {
      itemList.removeChild(li);
    };
  
    li.appendChild(deleteButton);
  
    itemInput.value = " ";
  }
  