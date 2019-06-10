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
