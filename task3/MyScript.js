document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('b1').addEventListener('click', funTask);
});

function funTask() {
    var str1 = document.getElementById('str1ID').value;
    var str2 = document.getElementById('str2ID').value;
    var firstWord = str1.trim().split(' ')[0];
    var words = str1.split(' ').concat(str2.split(' '));
    var maxWord = '';
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxWord.length) {
            maxWord = words[i];
        }
    }
    var blockOutput = document.getElementById('outputString');
    blockOutput.innerHTML = "Первое слово из первой строки: " + firstWord + "<br>Самое длинное слово: " + maxWord;
}
