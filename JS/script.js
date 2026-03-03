function myFunction() {
  var x = document.getElementById("ul");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const carCards = document.querySelectorAll(".car-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    const type = button.getAttribute("data-type");

    carCards.forEach(card => {
      if (type === "all" || card.getAttribute("data-type") === type) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});

// Contact form message
const form = document.getElementById("contactForm");
if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("formMessage").textContent =
      "Thank you! We will contact you shortly.";
    form.reset();
  });
}