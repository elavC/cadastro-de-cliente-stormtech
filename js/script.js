const inforClient = document.getElementById("clientData");
const addressClient = document.getElementById("inputAddress");
const inputProduc = document.getElementById("inputProduct");

const person = document.getElementById("name").value;
const cpf = document.getElementById("cpf").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;

const cep = document.getElementById("cep").addEventListener("focusout", pesquisarCep)
const street = document.getElementById("street");
const numberHouse = document.getElementById("number");
const complemment = document.getElementById("complemment");
const district = document.getElementById("district");
const city = document.getElementById("city");
const state = document.getElementById("state");

const product = document.getElementById("product");

const correct = document.getElementById("correct");
const send = document.getElementById("send");
const back = document.getElementById("back");
const next = document.getElementById("next");

function clearForm() {
    document.getElementById("street").value = "";
    document.getElementById("district").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
}

async function pesquisarCep() {
    clearForm()

    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const data = await fetch(url);
    const end = await data.json();

    const completeAddress = (end) => {
        document.getElementById("street").value = end.logradouro;
        document.getElementById("district").value = end.bairro;
        document.getElementById("city").value = end.localidade;
        document.getElementById("state").value = end.uf;
    }

    if(end.hasOwnProperty("erro")) {
        console.log(end);
        alert("Erro: Cep não encontrado, tente novamente!");
    } else {
        completeAddress(end)
    }
}
const nextPageButton = document.getElementById("next");
nextPageButton.addEventListener("click", nextPage);


function nextPage() {
    if(addressClient.classList.contains("inputAddress") && back.classList.contains("back")) {
        inforClient.setAttribute("class", "inforPerson");
        addressClient.removeAttribute('class', 'inputAddress');
        back.removeAttribute("class", "back");

    } else if(inforClient.classList.contains("inforPerson") && inputProduc.classList.contains("inputProduct")) {
        addressClient.setAttribute("class", "inputAddress");
        inputProduc.removeAttribute("class", "inputProduct");
        next.setAttribute("class", "noNext");
        send.removeAttribute("class", "send")
    } else if(!addressClient.classList.contains("inputAddress")) {
        addressClient.setAttribute("class", "inputAddress");
        inputProduc.removeAttribute("class", "inputProduct");
        next.setAttribute("class", "noNext");
        send.removeAttribute("class", "send")
    }

};


const backPageButton = document.getElementById("back");
backPageButton.addEventListener("click", backPage);

function backPage() {
    if(inforClient.classList.contains("inforPerson") && inputProduc.classList.contains("inputProduct")) {
        addressClient.setAttribute("class", "inputAddress");
        back.setAttribute("class", "back");
        inforClient.removeAttribute("class", "inforPerson");

    } else if(next.classList.contains("noNext") && addressClient.classList.contains("inputAddress")) {
        send.setAttribute("class", "send");
        inputProduc.setAttribute("class", "inputAddress");
        addressClient.removeAttribute("class", "inputAddress");
        next.removeAttribute("class", "noNext");

    } else if(inputProduc.classList.contains("inputAddress") && send.classList.contains("send")) {
        addressClient.setAttribute("class", "inputAddress");
        inforClient.removeAttribute("class", "inforPerson");
        back.setAttribute("class", "back");
    }
}
