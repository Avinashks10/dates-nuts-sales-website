// HEADER EFFECT

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(header){
    header.classList.toggle("sticky", window.scrollY > 50);
  }

});



document.addEventListener("DOMContentLoaded", () => {

  // PLUS BUTTONS

  const plusBtns = document.querySelectorAll(".plus");

  plusBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

      const input = btn.parentElement.querySelector(".quantity-input");

      let value = parseInt(input.value);

      input.value = value + 1;

    });

  });



  // MINUS BUTTONS

  const minusBtns = document.querySelectorAll(".minus");

  minusBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

      const input = btn.parentElement.querySelector(".quantity-input");

      let value = parseInt(input.value);

      if(value > 1){

        input.value = value - 1;

      }

    });

  });



  // WHATSAPP ORDER BUTTONS

  const orderBtns = document.querySelectorAll(".order-btn");

  orderBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

      // GET PRODUCT CARD

      const productCard = btn.closest(".product-card");

      // GET QUANTITY

      const quantity = productCard.querySelector(".quantity-input").value;

      // GET PRODUCT NAME

      const product = btn.getAttribute("data-product");

      // CREATE MESSAGE

      const message = `Hello I want to order ${quantity}kg ${product}`;

      // WHATSAPP LINK

      const whatsappURL = `https://wa.me/918111911675?text=${encodeURIComponent(message)}`;

      // OPEN WHATSAPP

      window.open(whatsappURL, "_blank");

    });

  });

});

// SEARCH PRODUCTS

const searchInput = document.getElementById("searchInput");

if(searchInput){

  searchInput.addEventListener("keyup", () => {

    const searchValue =
    searchInput.value.toLowerCase();

    const productCards =
    document.querySelectorAll(".product-card");

    productCards.forEach((card) => {

      const productName =
      card.querySelector("h3")
      .innerText
      .toLowerCase();

      if(productName.includes(searchValue)){

        card.style.display = "block";

      }else{

        card.style.display = "none";

      }

    });

  });

}



// FILTER PRODUCTS

const filterBtns =
document.querySelectorAll(".filter-btn");

if(filterBtns){

  filterBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

      // ACTIVE BUTTON

      document
      .querySelector(".active-filter")
      .classList.remove("active-filter");

      btn.classList.add("active-filter");

      // FILTER PRODUCTS

      const filter =
      btn.getAttribute("data-filter");

      const productCards =
      document.querySelectorAll(".product-card");

      productCards.forEach((card) => {

        if(
          filter === "all" ||
          card.getAttribute("data-category") === filter
        ){

          card.style.display = "block";

        }else{

          card.style.display = "none";

        }

      });

    });

  });

}

// HAMBURGER MENU

const menuToggle =
document.getElementById("menuToggle");

const navbar =
document.getElementById("navbar");

if(menuToggle){

  menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active-menu");

  });

}