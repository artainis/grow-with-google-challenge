// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var rows = $('#inputHeight').val();
  console.log(rows);
  var columns = $('#inputWeight').val();
  $('#pixelCanvas').empty();
  var i;
  for (i = 0; i < rows; i++) {
    $('#pixelCanvas').append('<tr class="trow"></tr>');
  }
/*  for (i = 0; i < columns; i++) {
    $('.trow').append('<td class="tdata"></td>');
  }*/
  var c = 0;
  while ( c < columns) {
    $('.trow').append('<td class="tdata"></td>');
    c++
  }
  $('.tdata').on('click', function () {
    console.log("click works");
    var bgrcolor = $('#colorPicker').val();
    $(this).css('background-color', bgrcolor);
  });
}

/*$('#sizePicker').on('submit', function () {
  console.log('worked');
  return false;
});*/

$('#sizePicker').on('submit', function () {
  makeGrid();
  return false;
});

