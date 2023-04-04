let numbers = document.querySelector('h1');
let startingNumber = 0;

setInterval(changeNumber, 1000);

function changeNumber(){
    startingNumber += 1;

    numbers.style.opacity = 0;

    if(numbers.style.opacity == 0){
        numbers.style.opacity = 1;
        numbers.innerHTML = startingNumber;
    }

}