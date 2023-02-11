var input = prompt("Write the amount of money that you have now in $!");
var money = parseInt(input);

if (money >= 1000) {
    console.log("You can buy a cheap car! Check pazar 3!");
    alert ("You can buy a cheap car! Check pazar 3!")
} else if (money >= 700 && money <= 999) {
    console.log("You can buy the new Xiaomi 12 Pro!");
    alert ("You can buy the new Xiaomi 12 Pro!")
} else if (money >= 400 && money <= 699) {
    console.log("You can pay the rent and the bills!");
    alert ("You can pay the rent and the bills!")
} else if (money >= 100 && money <= 399) {
    console.log("Buy something you need!");
    alert ("Buy something you need!")
} else {
    money = "You don't have enaugh money!!! Go to WORK!!!"
    alert ("You don't have enaugh money!!! Go to WORK!!!")
}