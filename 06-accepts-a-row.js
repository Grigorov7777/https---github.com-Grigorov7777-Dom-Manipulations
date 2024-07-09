function changeContent(row, column, newContent) {
  var table = document.getElementById("myTable");
  table.rows[row - 1].cells[column - 1].innerHTML = newContent;
}
