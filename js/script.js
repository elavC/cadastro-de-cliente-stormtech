const inforClient = document.getElementById("clientData");
const addressClient = document.getElementById("inputAddress");

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


function nextPage() {

    const addressPage = document.querySelector(".inputAddress");
    const backPage = document.querySelector(".back");
  
    if(addressPage.classList.contains("inputAddress") && backPage.classList.contains("back")) {
        inforClient.setAttribute("class", "inforPerson");
        addressClient.removeAttribute('class', 'inputAddress');
        back.removeAttribute("class", "back");
    }


    
}