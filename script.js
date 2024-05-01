
const div = document.querySelector(".my-div");
const img1 = document.querySelector("#img-choco");
const img2 = document.querySelector("#img-milk");
const heading = document.querySelector("h1");

img1.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("Text1", e.target.id);
});

div.addEventListener("dragover", function(e){
    e.preventDefault();
});
div.addEventListener("drop", function(e){
    let imgChocoId = e.dataTransfer.getData("Text1");
    div.appendChild(document.getElementById(imgChocoId));
    heading.innerText = "Congratulations you drop the right image";
    heading.style.color = "green";

    e.preventDefault();
});

img2.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("Text2", e.target.id);
});
div.addEventListener("dragover", function(e){
    e.preventDefault();
});
div.addEventListener("drop", function(e){
    let imgMilkId = e.dataTransfer.getData("Text2");
    div.appendChild(document.getElementById(imgMilkId));
    heading.innerText = "You drop the wrong image";
    heading.style.color = "red";
    div.removeChild(document.getElementById(imgMilkId));
    e.preventDefault();
})