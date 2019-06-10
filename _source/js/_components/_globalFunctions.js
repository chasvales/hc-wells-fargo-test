function validationCheck(ele, rules, value) {
  var element = document.getElementById(ele);
  var valid = true;
  var rule = rules.split("|");
  var rulename = rule[0];
  var rulevalue = rule[1];

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
  window.scrollTo({ top: 0, behavior: "smooth" });
}
