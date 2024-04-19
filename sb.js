let teacount = 0;
let coffeecount = 0;
let lemonjuicecount =0;

let tearate= 15;
let coffeerate = 20;
let lemonrate = 10;


function Add()
{
const selectedDrink = document.querySelector('input[name="drink"]:checked').value;
if(selectedDrink === 'tea')
{
teacount++;
document.getElementById("teacount").textContent = teacount;
}
else if(selectedDrink === 'coffee')
{
coffeecount++;
document.getElementById("coffeecount").textContent = coffeecount;
}
else if(selectedDrink === 'lemonjuice')
{ 
lemonjuicecount++;
document.getElementById("lemonjuicecount").textContent = lemonjuicecount;
}
}


function total()
{
let total=0;
total += parseInt(document.getElementById("teacount").textContent)*tearate;
total += parseInt(document.getElementById("coffeecount").textContent)*coffeerate;
total += parseInt(document.getElementById("lemonjuicecount").textContent)*lemonrate;
document.getElementById("bill").innerHTML=total;
}