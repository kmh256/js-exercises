/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let paragraphArray = Array.from(document.querySelectorAll("p"));
console.log(paragraphArray);

console.log(document.querySelector("div"));

console.log(document.getElementById("#jumbotron-text"));

console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", thankyouAlert);

function thankyouAlert() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColourBtn = document.querySelector("#bgrChangeBtn");
let pageBody = document.querySelector("body");
changeColourBtn.addEventListener("click", changeColour)

function changeColour() {
    pageBody.style.backgroundColor = "red";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addTextButton = document.querySelector("#addTextBtn");
addTextButton.addEventListener("click", addText);

function addText() {
    let paragraph = document.createElement("p");
    paragraph.innerText = "Read more below.";
    let newText = document.querySelector(".buttons");
    newText.appendChild(paragraph);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
// let largerLinksBtn = document.querySelector("#largerLinksBtn");
// let links = documents.querySelectorAll("a");

// largerLinksBtn.addEventListener("click", makeLinksLarger);
// function makeLinksLarger(e) {
//     e.preventDefault();
//     links.forEach((link) => {
//         let oldFontSize = Number(link.style.fontSize[0]);
//         let newFontSize = oldFontSize + 1;
//         link.style.fontSize = `${newFontSize}em`;
// });
// }