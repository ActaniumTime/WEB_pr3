document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        var a = parseFloat(document.getElementById('inputA').value);
        var b = parseInt(document.getElementById('inputB').value);
        var result = power(a, b);
        document.getElementById('result').innerHTML = "Result: " + result;
    });
});

function power(a, b) {
    // Проверяем, что a - дробное число и b неотрицательное
    if (a % 1 !== 0 && b < 0) {
        return "Для дробного числа a степень b должна быть неотрицательной";
    }
    
    // Проверяем, что a - отрицательное число и b целое
    if (a < 0 && b % 1 !== 0) {
        return "Для отрицательного числа a степень b должна быть целым числом";
    }
    
    // Вычисляем a в степени b
    return Math.pow(a, b);
}
