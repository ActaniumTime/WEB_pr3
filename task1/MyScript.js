document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('b1').addEventListener('click', fun1);
})

function fun1(){
    var num1 = parseInt(document.getElementById('InputNum').value);
    if(num1>0 && num1<5)
    {
        alert('Верно');
    }
    else{
        alert('Не верно');
    }
}