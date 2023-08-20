//* template_6cmukse
//* account L2cSzhXh6vu_oc1Sf
//* service service_apq59sv
let contrastToggle = false;
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += (" dark-theme")
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_apq59sv',
            'template_6cmukse',
            event.target,
            'L2cSzhXh6vu_oc1Sf'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
        } ).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly at 256-454-0539"
            );
        })
    }
  
let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}