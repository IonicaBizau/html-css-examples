function addItem(listId, itemContent){
    document.getElementById(listId).innerHTML += "<li>" + 
        itemContent + 
        "<button class='removeButton'" +
        " onclick=\"removeItem('list', this.parentElement)\">" + 
        "Remove</button></li>";
}

function removeItem(listId, itemElement){
    var list = document.getElementById(listId);
    list.removeChild(itemElement);
}
