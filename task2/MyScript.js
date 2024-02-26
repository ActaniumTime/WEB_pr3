document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('b1').addEventListener('click', fun1);
})

function fun1(){
    var num1 = document.getElementById('InputNum').value;
    var block = document.getElementById('outputBlock');
    if(num1.length > 10){
        var temp = num1.substring(0, 6);
        block.innerHTML = temp;
    }
    else{
        var temp = num1.padEnd(12, 'o');
        block.innerHTML = temp;
    }
}
