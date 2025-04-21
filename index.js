const titleNode = document.getElementById("title");
const h2TitleNode = document.getElementById("changeTitle");
const buttonNode = document.getElementById("button");


const borred = () => {
    titleNode.innerText ="Ура, теперь не скучно!";
    fetch("https://www.boredapi.com/documentation")
    .then ((response) =>{
        return response.json();
    })
    .then
}

buttonNode.addEventListener("click" ,borred());