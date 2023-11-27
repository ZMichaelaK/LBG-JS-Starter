const newParagraph = document.createElement("p");

newParagraph.textContent ="smol sentence";
newParagraph.style.color = "red"

document.body.appendChild(newParagraph);

const newHeading = document.createElement("h1");

document.body.appendChild(newHeading);

newHeading.textContent = "First Heading";
newHeading.style.backgroundColor = "black"
newHeading.style.color = "red"
newHeading.style.width = "15%";

for (let index = 0; index <= 10; index++) {
    let words = document.createElement("p");
    words.textContent = index;
    words.style.color = "red"
    document.body.appendChild(words);
    newHeading.style.color = "red"
    if (index % 2 === 0) {
        words.style.color = "red"
    } else words.style.color = "blue";
}
function section5(a, b) {
    const generator = document.createElement(a);
    generator.textContent = b
    document.body.appendChild(generator);
}
section5 ("p", "dev")
function toggleDark() {
    if (document.body.className === "light"){
        document.body.className = "dark"
    }
    else if (document.body.className === "dark") {
        document.body.className = "light"
    }}

    //const myBloop = document.getElementbyID=d();
