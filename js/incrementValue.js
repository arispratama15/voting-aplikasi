function incrementValue1() {
    var value = parseInt(document.getElementById('score1').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('score1').innerHTML = value;
}
function incrementValue2() {
    var value = parseInt(document.getElementById('score2').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('score2').innerHTML = value;
}
function incrementValue3() {
    var value = parseInt(document.getElementById('score3').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('score3').innerHTML = value;
}
function incrementValue4() {
    var value = parseInt(document.getElementById('score4').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('score4').innerHTML = value;
}