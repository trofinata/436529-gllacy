 var link = document.querySelector(".button-feedback-form");

  var popup = document.querySelector(".modal-feedback-form");
  var close = popup.querySelector(".feedback-form-cross");

  var form = popup.querySelector("form");
  var nickname = popup.querySelector("[name=feedback-name]");
  var email = popup.querySelector("[name=feedback-email]");
  var proposal = popup.querySelector("[name=feedback-proposal]");
  var text = popup.querySelector("[placeholder]");

  var storage = localStorage.getItem("nickname");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
      nickname.value = storage;
      email.focus();
    } else {
      nickname.focus();
    }    
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

 form.addEventListener("submit", function (evt) {
    if (!nickname.value || !email.value || !proposal.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");                             
    } else {
      localStorage.setItem("nickname", nickname.value);      
    }    
  });

  form.addEventListener("submit", function (evt) {
    if (!nickname.value){      
      nickname.classList.add("modal-light");
    }    
    if (nickname.value){      
      nickname.classList.remove("modal-light");                                   
    }  
  });

  nickname.addEventListener("click", function (evt) {
    nickname.classList.remove("modal-light");     
    }
  );

 form.addEventListener("submit", function (evt) {
    if (!email.value){       
      email.classList.add("modal-light");                             
    } 
    if (email.value){      
      email.classList.remove("modal-light");                             
    }     
  });

 email.addEventListener("click", function (evt) {
    email.classList.remove("modal-light");     
    }
  );

  form.addEventListener("submit", function (evt) {
    if (!proposal.value){      
      proposal.classList.add("modal-light");                             
    }  
    if (proposal.value){      
      proposal.classList.remove("modal-light");                             
    }   
  });

  proposal.addEventListener("click", function (evt) {
    proposal.classList.remove("modal-light");     
    }
  );

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  }); 

