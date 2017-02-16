$(document).ready(function () {

  $('input#submitButton').on('click', function(event) {
    event.preventDefault(); //Don't do your default behavior, button
    fakeSubmit();
  });

})

function fakeSubmit(){
  var successBlock = $('#success');
  var errorBlock = $('#error');

  var nameInput = $('#user_name');
  var saberInput = $('#user_saber');
  var pledgeInput = $('#user_pledge');

  var formBlock = $('#formBlock');

  var problem = "";

  if(nameInput.val() === "")
  {
    problem = nameInput.attr("name");
    errorBlock.show();
  }
  else if(saberInput.val() === "")
  {
    problem = saberInput.attr("name");
    errorBlock.show();
  }
  else if(pledgeInput.val() === "")
  {
    problem = pledgeInput.attr("name");
    errorBlock.show();
  }
  else
  {
    //hide form & error block
    errorBlock.hide();

    //show success message
    successBlock.show();
    successBlock.children().show();

    formBlock.hide();
  }

  errorBlock.text("Error: You are missing the "+problem+" field");
}
