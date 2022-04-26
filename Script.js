
var messageToEncrypt = new Array();
var textEncrypt;
var textAreaResult = document.getElementById('boxTextResult');
var messageToDecrypt = new Array();
var textDecrypt;

function btnMessageToEncrypt() {
    messageToEncrypt = document.getElementById('boxTextEncrypt').value;
    messageToEncrypt[messageToEncrypt.length] = messageToEncrypt;
    encrypt();
    showMessage(textEncrypt);
    clearText("boxTextEncrypt")
}

function btnMessageToDecrypt() {
    messageToDecrypt = document.getElementById('boxTextDecrypt').value;
    messageToDecrypt[messageToDecrypt.length] = messageToDecrypt;
    decrypt();
    showMessage(textDecrypt);
    clearText("boxTextDecrypt")
}

function encrypt() {

    const encryption = { a: 'ai', i: 'imes', e: 'enter', o: 'ober', u: 'ufat' };
    textEncrypt = messageToEncrypt.toLowerCase().split('').map(ch => encryption[ch] || ch).join('');
    return textDecrypt;
}

function decrypt() {
    const snippets = ['ai', 'imes', 'enter', 'ober', 'ufat'];
    const characters = ['a', 'i', 'e', 'o', 'u'];
    textDecrypt = "";
    var decryption = messageToDecrypt.toLowerCase();

    for (var j = 0; j < snippets.length; j++) {
        decryption = decryption.split(snippets[j]).join(characters[j]);
    }

    textDecrypt = decryption;
}

function showMessage(showText) {
    textAreaResult.value = showText;
}

function clearText(oldText) {
    document.getElementById(oldText).value = "";
}

function copyMessage() {
    navigator.clipboard.writeText(textAreaResult.value);
    showMessage("Copied to clipboard")
}

