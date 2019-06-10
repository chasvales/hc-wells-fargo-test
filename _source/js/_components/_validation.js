function formSubmit() {
  var signupForm = document.getElementById("bonus-offer-code");
  //var signupRoute = signupForm.action;
  signupForm.addEventListener("submit", function(event) {
    if (this.dataset.formready) {
      this.dataset.formready = false;
    } else {
      event.preventDefault();
    }
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
      this.dataset.formready = true;
      signupForm.submit();
    }
  });
}
