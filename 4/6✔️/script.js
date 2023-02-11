listOfFirstName = ["Nikola", "Martin", "Stefan", "Bile"];
listOfLastName = ["Ilievki", "Stamenkovski", "Stefanovski", "Bilevska"];
function first() {
  let full = [];
  for (let i = 0; i < listOfFirstName.length; i++) {
    full.push(i + 1 +"." + listOfFirstName[i] + " " + listOfLastName[i]);
  }
  console.log(full);
}
first();
