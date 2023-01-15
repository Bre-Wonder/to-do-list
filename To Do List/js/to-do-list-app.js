function newItem(){

  let li = $('<li></li>');
  let inputValue = $('input').value();
  let text = 
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something');
  } else {
    let list = $('#list');
    list.append(li);
  }

}