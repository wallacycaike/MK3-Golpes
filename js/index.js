const filterElement = document.querySelector("header input"),
  characters = document.querySelectorAll(".characters > li");

filterElement.addEventListener("input", filterChars);

function filterChars() {
  if (filterElement.value !== "") {
    for (let character of characters) {
      let charName = character.querySelector("h2");
      charName = charName.textContent.toLowerCase();
      let filterText = filterElement.value.toLowerCase();
      if (!charName.includes(filterText)) {
        character.style.display = "none";
      } else {
        character.style.display = "block";
      }
    }
  } else {
    for (let character of characters) {
      character.style.display = "block";
    }
  }
}
