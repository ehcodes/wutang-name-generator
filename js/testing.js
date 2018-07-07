// what can the user do?
// what does the user expect?
// What can the user see?
//MORNING CHALLENGE:
//create a Wu-Tang Clan name generator.
//Present the user with 5 survey questions and based on those answers randomly generate their name.
//ES6+, running on a node server
//should return a first and last name

//names that will be pulled
let first = ["John","Arch","Ciroc","Java","Zo","Kid","Zeus","Josh","Chiron","Gelo"]//put first names here
let last= ["Doe","Bit","Henny","Script","Bron","Jam","Motion","Leon","Wayne","Brony"]//put last names in here
//event listener for button
document.getElementById("submit").onclick = userSubmit
//function --users submit their selections
function userSubmit(){
  //finds random first name from array
  let genFirst = firstname.length +
  //finds random last name from array
  let genLast = lastname.length
  //console log generated name
  console.log(first[genFirst] + last[genLast])
  //puts it in the dom
  document.getElementById("name").innerText = ("Your clan name is:" + first[genFirst]+ " " + last[genLast])
}

if (genFirst ) {

}
