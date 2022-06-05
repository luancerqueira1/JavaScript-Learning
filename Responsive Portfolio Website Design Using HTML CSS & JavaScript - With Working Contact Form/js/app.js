const menu = document.querySelector(".menu-icon");

menu.onclick = () => {
	menu.classList.toggle('move')
}
//revies swiper
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
	},
  
});

// email js

function validate() {
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let sendBtn = document.querySelector('.send-btn');
  
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    }
    else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  })
}

validate();

function sendmail(name,email,msg) {
  emailjs.send("service_w2tj03t", "template_3jyk46p", {
    to_name: name,
    from_name: email,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh No...!",
    text: "field cannot be empty!",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email sent Successfully!",
    text: "we try to reply in 24 hours !",
    icon: "success!",
  });
}
