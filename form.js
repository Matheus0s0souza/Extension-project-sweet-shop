const contactForm = document.querySelector('.form-submit')
const submitBtn = document.querySelector('.button-submit')

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#mail')
const menssageInput = document.querySelector('#message-client')


const publicKey = ""
const serviceID = ""
const templateID = ""

emailjs.init(publicKey);

contactForm.addEventListener("submit", e =>{
    e.preventDefault();
    submitBtn.innerText = "Um momento";
    const inputFields = {
        name:nameInput.value,
        email:emailInput.value,
        menssage:menssageInput.value
    }
    emailjs.send(serviceID, templateID, inputFields).then(() =>{
        submitBtn.innerText = "Enviada!";
        nameInput.value = "";
        emailInput.value = "";
        menssageInput.value = "";
    },(error) => {
        console.log(error)
        submitBtn.innerText = "Erro"
    });
})