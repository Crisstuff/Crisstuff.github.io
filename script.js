

//scroll funsjon 
function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
//bilde pop up under 
function bilde1Popup() {
    var popUp = document.getElementById('bilde1PopUp');
    popUp.show();
}

function closePopup() {
    var popUp = document.getElementById('bilde1PopUp');
    popUp.close();
}




//pixel pop up under
function seagullPopup() {
    var popUp = document.getElementById('seagullPopUp');
    popUp.showModal();
}
function closePopup() {
    var popUp = document.getElementById('seagullPopUp');
    popUp.close();
}