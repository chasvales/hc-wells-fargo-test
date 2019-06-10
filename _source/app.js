function validationCheck(ele, rules, value) {
  var element = document.getElementById(ele);
  var valid = true;
  var rule = rules.split("|");
  var rulename = rule[0];
  var rulevalue = rule[1];
  console.log(ele, rules, value);

  switch (rulename) {
    case "length":
      if (value < parseInt(rulevalue)) {
        valid = false;
      }
      break;
    case "match":
      var elementToMatch = document.getElementById(rulevalue).value;
      if (value != elementToMatch || value == "") {
        valid = false;
      }
      break;
    case "validate":
      switch (rulevalue) {
        case "email":
          var re = /\S+@\S+\.\S+/;
          if (!re.test(value)) {
            valid = false;
          }
          break;
      }
      break;
  }
  if (valid) {
    element.classList.remove("error");
    element.classList.add("valid");
    return "valid";
  } else {
    element.classList.add("error");
    element.classList.remove("valid");
    return "invalid";
  }
}
function showConfirmation() {
  var landingPage = document.getElementById("landing-page");
  var confirmationPage = document.getElementById("confirmation-page");

  landingPage.classList.add("hidden");
  confirmationPage.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
var Modal = function() {
  var modal_element = document.querySelectorAll(".trigger-modal");
  modal_element.forEach(function(element) {
    element.addEventListener("click", function(event) {
      event.preventDefault();
      removeActiveModal();
      document
        .getElementById(this.dataset.modal)
        .classList.toggle("modal-showing");

      setTimeout(() => {
        modal_showing = true;
      }, 300);
    });
  });
  document.onclick = function(event) {
    if (modal_showing) {
      if (!event.target.classList.contains("modal")) {
        removeActiveModal();
      }
    }
  };
  document.onkeyup = function(e) {
    e = e || window.event;
    // use e.keyCode
    if (e.keyCode === 27) {
      removeActiveModal();
    }
  };
};
var removeActiveModal = function() {
  modal_showing = false;
  var modal = document.querySelectorAll(".modal-showing");
  modal.forEach(function(element) {
    element.classList.remove("modal-showing");
  });
};
function formSubmit() {
  var signupForm = document.getElementById("bonus-offer-code");
  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var elements = signupForm.querySelectorAll('[data-required="true"]');
    var invalidFields = false;

    elements.forEach(function(element) {
      var el = element.id;
      var rules = element.dataset.rule;
      var value = element.value;
      var validCheck = validationCheck(el, rules, value);
      if (validCheck == "invalid") {
        element.classList.add("required");
        invalidFields = true;
      }
    });
    if (!invalidFields) {
      // if all required fields pass validation, move on.
      showConfirmation();
    }
  });
}
var init = function() {
  Modal();
  formSubmit();
};
var modal_showing = false;
window.addEventListener("load", function() {
  init();
});
