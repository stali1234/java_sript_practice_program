var sno = 4;
var num = Number(prompt("enter your guess between 1 to 9"));
if(num > sno)
{
    prompt("it is too high guess again");
}

else if (num < sno)
{
    alert("it is too guess again");
}

else {
    alert("your guess matched");
}