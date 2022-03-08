var alphabet = "1qaz2w sx3ed!c4r#fv5_t&gb6yh?n7ujm8ik,9ol.0pñ-";
var fullAlphabet = alphabet + alphabet + alphabet;

function decryptMessage() {
    var cipherText = $('#cypher').val();
    var cipherOffsetPos = $('#offset').val();
    var cipherOffset = -Math.abs(cipherOffsetPos); // This makes the key negative, solving the cypher
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

$(document).ready(function() {
    $('#cypher').keypress(function() {
        setTimeout(function() { // When the 'encrypted message' textarea registers keyboard input -> run encryptMessage()
            decryptMessage(); }, 20);
    });
    $('#cypher').blur(function() { // When the 'encrypted message' textarea loses focus -> run encryptMessage()
        decryptMessage();
    });
    $('#offset').change(function() { // When the value 'encrypted message' textarea changes value -> run encryptMessage()
        setTimeout(decryptMessage(), 20);
    });

});
