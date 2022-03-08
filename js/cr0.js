var alphabet = "1qaz2w sx3ed!c4r#fv5_t&gb6yh?n7ujm8ik,9ol.0pñ-";
var fullAlphabet = alphabet + alphabet + alphabet;

function encryptMessage() {
    var cipherText = $('#cypher').val();
    var cipherOffset = $('#offset').val();
    cipherOffset = (cipherOffset % alphabet.length);
    var cipherFinish = '';

    for (i = 0; i < cipherText.length; i++) {
        var letter = cipherText[i];
        var upper = (letter == letter.toLowerCase());
        letter = letter.toLowerCase();

        var index = alphabet.indexOf(letter);
        if (index == -1) {
            cipherFinish += letter;
        } else {
            index = ((index + cipherOffset) + alphabet.length);
            var nextLetter = fullAlphabet[index];
            if (upper) nextLetter = nextLetter.toLowerCase();
            cipherFinish += nextLetter;
        }
    }

    $('#finish').val(cipherFinish);
}

// The document must be fully loaded before it's manipulated
$(document).ready(function() {
    $('#cypher').keypress(function() { 
        setTimeout(function() { encryptMessage(); }, 20); // When the 'unencrypted message' textarea registers keyboard input -> run encryptMessage()
    });
    $('#cypher').blur(function() {
        encryptMessage(); // When the 'unencrypted message' textarea loses focus -> run encryptMessage()
    });
    $('#offset').change(function() { // When the value 'unencrypted message' textarea changes value -> run encryptMessage()
        setTimeout(encryptMessage(), 20);
    });

});

function copyText() {
    var copyText = document.getElementById("finish");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
  