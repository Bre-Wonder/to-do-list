function newItem() {

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  //let text = jquery : $("#divButtons").append(?????); maybe this is my solution - not needed for this
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something');
  } else {
    let list = $('#list');
    $('#list').append(li); // how come you can't just use list.append(li) since you defined it already?
  }

  
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

 
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  //crossOutButton.addClass('crossOutButton'); - this line not needed
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem); // How come this event listener is different?

  function deleteListItem(){
    li.addClass('delete')
  }

  $('#list').sortable();

}


