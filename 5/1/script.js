let paragraphs = document.getElementsByTagName("p");
let h1 = document.getElementsByTagName("h1");
let h3 = document.getElementsByTagName("h3");

let changeText = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].textContent = "HEHE HOHO HAHA , it's all connected (Manifest)"
        console.log(arr[i].textContent)
    }
}

changeText(paragraphs);
changeText(h1);
changeText(h3);

// MALCE PO KOMPLICIRANO 🤣 



// let lastDiv = document.getElementsByClassName("anotherDiv")[0];
// let sibling = lastDiv.nextElementSibling;
// let sibling2 = lastDiv.previousElementSibling;
// let h1 = sibling2.getElementsByTagName("h1")[0];
// let p1 = sibling2.lastElementChild;
// let p2 = lastDiv.firstElementChild;
// let header3last = sibling.getElementsByTagName("h3")[0];
// let header1last = header3last.previousElementSibling;

// h1.innerText = "Hello";
// p1.innerText = "hello 2";
// p2.innerText = "HEHE";
// header3last.innerText = "Text added from JS";
// header1last.innerText = "Text added from JS also";


