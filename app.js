const item = document.querySelectorAll(".item");
const left_main = document.querySelector(".left");
const suggestContainer = document.querySelector(".main_search");
const searchInput = document.querySelector(".search_input");

//search button

left_main.addEventListener("click", () => {
  left_main.style.backgroundColor = "gray";
  suggestContainer.style.display = "block";
  searchInput.style.backgroundColor = "gray";
});
//search function

const filter = () => {
  const value = document.querySelector(".search_input").value.toUpperCase();

  item.forEach((element) => {
    if (element.innerHTML.toUpperCase().indexOf(value) > -1) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
};

//change main_drop when suggest item is clicked

const dropChange = (event) => {
  let vab = event.target.dataset.img;
  if (vab) {
    left_main.innerHTML = `<img src='${vab}'>`;
  }
};

item.forEach((element) => {
  element.addEventListener("click", dropChange);
});
