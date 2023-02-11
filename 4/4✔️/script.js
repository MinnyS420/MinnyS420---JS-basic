let sum = "";

for (i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        let even = (i + "\n");
        sum += even;
    } else {
        let odd = (i + " ");
        sum +=odd;
    }
}

console.log(sum);