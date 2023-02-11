let moneyInAccount = 100000;

function ATMMoney() {
    let money = prompt("Enter the amount of money you want to withdraw.");
    let convetedMoney = parseInt(money);
    if (convetedMoney <= moneyInAccount) {
        console.log(`You have withdrawn ${convetedMoney} and you have ${moneyInAccount - money} money left in your bank account!`);
    } else if (convetedMoney > moneyInAccount) {
        console.log(`You don\'t have enough money on your bank account!`);
    } else {
        console.log(`Enter a valid number!`)
    }
}

ATMMoney();