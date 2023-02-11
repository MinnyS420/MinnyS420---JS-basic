let numNode = document.getElementById("num");
let array = [2, 4, 5];

function numAndSum(arr) {
    let ulNode = document.createElement("ul");
    numNode.append(ulNode);
    let pNode = document.createElement("p")
    numNode.append(pNode)
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        ulNode.append(li);
        li.textContent = arr[i];

        if (i === arr.length - 1) {
            pNode.textContent += `${arr[i]} = `
        } else {
            pNode.textContent += `${arr[i]} + `
        }
        sum += arr[i];
    }
    pNode.textContent += sum
}
numAndSum(array);