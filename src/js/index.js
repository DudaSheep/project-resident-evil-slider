const cards = document.querySelectorAll(".card");
const btnFoward = document.getElementById("btn-foward");
const btnBack = document.getElementById("btn-back");
let currentCard = 0;

function hideSelectedCard() {
    const cardSelected = document.querySelector(".selected");
    cardSelected.classList.remove("selected");
}
    
function showCard(indexCard) {
    cards[indexCard].classList.add("selected");
}
    
btnFoward.addEventListener("click", function () {
    if (currentCard === cards.length - 1) return;
    hideSelectedCard();
    currentCard++;
    showCard(currentCard);
});
    
btnBack.addEventListener("click", function () {
    if (currentCard === 0) return;
    hideSelectedCard();
    currentCard--;
    showCard(currentCard);
});
    