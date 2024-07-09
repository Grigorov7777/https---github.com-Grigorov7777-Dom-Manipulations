function createTable() {
  var rows = parseInt(prompt("Enter the number of rows:"));
  var cols = parseInt(prompt("Enter the number of columns:"));
  
  var table = document.getElementById("myTable");
  
  for (var i = 0; i < rows; i++) {
    var row = table.insertRow(i);
    
    for (var j = 0; j < cols; j++) {
      var cell = row.insertCell(j);
      cell.innerHTML = "Row-" + i + " Column-" + j;
    }
  }
}
