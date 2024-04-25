//scroll function
function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


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

//løsning for id 2 ganger er å bytte til class og da må du modifisere linje 5 og 6

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

