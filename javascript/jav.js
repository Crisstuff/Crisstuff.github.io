// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var display = document.getElementById("displaySide")

//under her så prøver jeg å modifisere koden sånn at det gir resultatet jeg ønsker
var prosjektValg = document.getElementById("valg")
var p1 = document.getElementById("Id001")
var tekst = document.getElementById("underTekst")
prosjekt-defult-design-prosjekt.onclick = function(){
  
}

prosjekt-defult-it-prosjekt.onclick = function(){
  
}