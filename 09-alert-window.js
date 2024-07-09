function getOptions() {
  var select = document.getElementById("mySelect");
  var options = select.options;
  var count = options.length;
  var items = "";
  
  for (var i = 0; i < count; i++) {
    items += options[i].text + "\n";
  }
  
  alert("Total items: " + count + "\n\nItems:\n" + items);
}
