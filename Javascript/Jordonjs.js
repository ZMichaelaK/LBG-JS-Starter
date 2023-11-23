const redP = document.getElementById("redP");
redP.style.color = "red";


const newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph"
document.getElementById("myDiv").appendChild(newParagraph)