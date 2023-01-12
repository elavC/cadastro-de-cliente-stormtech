const inforClient = document.getElementById("clientData");
const addressClient = document.getElementById("inputAddress");
const inputProduc = document.getElementById("inputProduct");

const person = document.getElementById("name").value;
const cpf = document.getElementById("cpf").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;

const cep = document.getElementById("cep");
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

const dataPerson = {
    name: person,
    cpf: cpf,
    phone: phone,
    email: email,
};

const address = {
    cep: cep,
    street: street,
    numberHouse:numberHouse,
    complemment: complemment,
    district: district,
    city: city,
    state: state,
};


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
