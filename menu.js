const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const cards = document.querySelectorAll(".food-card");

function filterFoods() {

const searchValue = searchInput.value.toLowerCase();
const category = filterCategory.value;

cards.forEach(card => {

const foodName =
card.querySelector("h3").textContent.toLowerCase();

const matchSearch =
foodName.includes(searchValue);

const matchCategory =
category === "all" ||
card.classList.contains(category);

if(matchSearch && matchCategory){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

}

searchInput.addEventListener("keyup", filterFoods);
filterCategory.addEventListener("change", filterFoods);