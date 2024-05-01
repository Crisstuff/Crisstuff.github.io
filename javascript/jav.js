//scroll funsjon 
let previousSections = [];

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        // Lagre ID-en til den forrige seksjonen
        previousSections.push(sectionId);
        // Vis mål-avsnittet
        section.style.display = 'flex';
        // Rull til mål-avsnittet
        section.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
    }
}




// Funksjon for å legge til en historie-seksjon til siden
function addStorySection(chapterFile, sectionId) {
  fetch(`sections/${chapterFile}.html`) // Hent riktig kapiteldokument
      .then(response => response.text())
      .then(html => {
          const parser = new DOMParser(); //brukes til å parse (lese å forstå) data fra en html fil
          const doc = parser.parseFromString(html, 'text/html');
          const section = doc.getElementById(sectionId);
          section.style.display = "block"; // Sørger for at seksjonen er synlig
          const storyContainer = document.getElementById('story-container'); //finner kontainern vi vil putte innholdet i
          storyContainer.innerHTML += section.outerHTML; // Legger til den valgte seksjonen til kontaineren
          setupButtons(); // Setter opp knappene for ny lastet seksjon
      }).catch(error => console.error('Error loading the section:', error));
}

// Funksjon for å sette opp event listeners for alle knapper
function setupButtons() {
  const buttons = document.querySelectorAll('.story-button'); //finner alle knappene som hører til historie-elementet
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          addStorySection(this.dataset.chapter, this.dataset.section);
      });
  });
}

// Initialiserer første del av historien
addStorySection('chapter1', 'start'); // Startseksjon fra kapittel 1






























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

