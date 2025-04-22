const titleNode = document.getElementById("title");
const h2TitleNode = document.getElementById("changeTitle");
const buttonNode = document.getElementById("button");
const mainNode = document.getElementById("main");


const borred = () => {
    titleNode.innerText ="Ура, теперь не скучно!";
    fetch("https://api.adviceslip.com/advice")
    .then ((response) =>{
        return response.json();
    })
    .then ((data) => {
        console.log(data.slip.advice)
        h2TitleNode.innerText = `${data.slip.advice}`
    })
    mainNode.classList = "main2"
}

buttonNode.addEventListener("click" ,borred);