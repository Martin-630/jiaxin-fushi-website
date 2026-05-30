const productTrack = document.querySelector("[data-products-track]");
const prevButton = document.querySelector("[data-products-prev]");
const nextButton = document.querySelector("[data-products-next]");

if (productTrack && prevButton && nextButton) {
  const scrollProducts = (direction) => {
    const card = productTrack.querySelector(".product-card");
    const distance = card ? card.getBoundingClientRect().width + 18 : 360;

    productTrack.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  prevButton.addEventListener("click", () => scrollProducts(-1));
  nextButton.addEventListener("click", () => scrollProducts(1));
}
