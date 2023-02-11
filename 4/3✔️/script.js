let arr = ["Hello", "there", "students", "of", "SEDC", "!"];
 
function something(Text) {
  let sum = "";
  for (arrItems of Text){
    sum += arrItems + " ";
  }
  return sum;
}
console.log(something(arr));
