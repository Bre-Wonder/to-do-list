function newItem(){

  let li = $('<li></li>');
  let inputValue = $('input').value();
  let text = //jquery : $("#divButtons").append(?????); maybe this is my solution
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something');
  } else {
    let list = $('#list');
    $('#list').append(li); // this line is wrong, but how come? becauseI defined list already
  }

  function crossOut() {
    
  }

}



