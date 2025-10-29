const contactForm = document.querySelector('.form-submit')
const submitBtn = document.querySelector('.button-submit')

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#mail')
const menssageInput = document.querySelector('#message-client')


const publicKey = "53oVptJA_Q4TqKsfk"
const serviceID = "service_9h4sxqk"
const templateID = "template_r39zirj"

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