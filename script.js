function zeigeAdresse(crypto, adresse) {
    document.getElementById('popup-text').innerText = crypto + ' Adresse: ' + adresse;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function schließePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}
