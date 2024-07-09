document.addEventListener("DOMContentLoaded", function() {
  const paragraphs = document.querySelectorAll("p");
  
  paragraphs.forEach(function(paragraph) {
      paragraph.style.backgroundColor = "lightblue";
  });
});
