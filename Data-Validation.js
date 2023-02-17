  const form = document.getElementById("form");
  
  form.addEventListener("submit", function(event) {
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
  
    if (!emailInput.value) {
        isValid = false;
        emailHelp.classList.remove("d-none");
      } else {
        emailHelp.classList.add("d-none");
      }

    if (!name || !email || !message) {
      alert("Please fill out all the fields.");
      event.preventDefault();
    }
  });