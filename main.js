const navToggle = document.querySelector(".nav-toggle")
const navLink = document.querySelectorAll(".nav__link")
const contactBtn = document.getElementById("contact-btn")
const message = document.getElementById("message")

navToggle.addEventListener("click", function(){
    document.body.classList.toggle('nav-open');
})

navLink.forEach(link => {
    link.addEventListener("click", function(){
        document.body.classList.remove('nav-open');
    })
})

contactBtn.addEventListener("click",function(){
    document.getElementById("form").style.display = "block"
    contactBtn.style.display = "none"
    message.textContent = "Get in touch"
})
