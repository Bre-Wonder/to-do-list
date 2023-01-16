function newItem{

  let li = $('<li></li>');
  let inputValue = $('input').value();
  //let text = jquery : $("#divButtons").append(?????); maybe this is my solution
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something');
  } else {
    let list = $('#list');
    list.append(li); // how come you can't just use list.append(li) since you already?
  }

  li.on('dbclick', crossOut() => li.addClass('strike');)

  let crossOutButton = $('<button></button>');
  crossOutButton.addClass('crossOutButton');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  $('crossOutButton').on('click', deleteListItem);

  function deleteListItem(){
    li.addClass('delete');
  }

  $('#list').sortable();



  //function crossOut() {
    //li.addClass('strike');
 // }
    

  //li.addClass('delete');


}


