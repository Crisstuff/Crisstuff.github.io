

//scroll funsjon 
function scrollToNextSection() {
    let currentSection = document.querySelector('.section:not([style*="display: none;"])');
    let nextSection = currentSection.nextElementSibling;
  
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showPopup() {
    var popUp = document.getElementById('popUp');
    popUp.showModal();
}
// function som lukker popup 
function closePopup() {
    var popUp = document.getElementById('popUp');
    popUp.close();
}