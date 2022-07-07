const item = document.querySelectorAll(".item");
const left_main = document.querySelector(".left");
const right_main = document.querySelector(".right");
const suggestContainer = document.querySelector(".main_search");
const searchInput = document.querySelector(".search_input");
const details = document.querySelectorAll(".non-click");
const searchSuggest = document.querySelector(".search_suggest");
const dItems = document.querySelectorAll(".d-item");

// add detail on left box if d-item is clicked

dItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    let d_detail = document.createElement("p");
    d_detail.innerHTML = e.target.innerText;
    left_main.appendChild(d_detail);
  });
});

// hide search list when item is clicked

searchSuggest.addEventListener("click", () => {
  suggestContainer.style.display = "none";
  searchSuggest.style.display;
});

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

//item

//change main_drop when suggest item is clicked

const dropChange = (event) => {
  let vab = event.target.dataset.img;
  let name = event.target.children[1].innerHTML;
  if (name === "서강대학교") {
    // show details if 서강대학교
    document.getElementsByClassName("sogang")[0].style.display = "flex";
  } else {
    document.getElementsByClassName("sogang")[0].style.display = "none";
  }
  if (name === "kakao") {
    document.getElementsByClassName("kakao")[0].style.display = "flex";
  } else {
    document.getElementsByClassName("kakao")[0].style.display = "none";
  }
  //searchInput과 배경색이 같은 박스로 이미지가 들어가도록
  if (vab) {
    if (searchInput.style.backgroundColor == left_main.style.backgroundColor) {
      left_main.innerHTML = `<img src='${vab}'>`;
    } else {
      right_main.innerHTML = `<img src='${vab}'>`;
    }
  }
};

item.forEach((element) => {
  element.addEventListener("click", dropChange);
});

//change detail box color when clicked
function handleClick(event) {
  details.forEach((e) => {
    e.classList.remove("clicked");
  });
  event.target.classList.add("clicked");
}

details.forEach((e) => {
  e.addEventListener("click", handleClick);
});

//right box image
right_main.addEventListener("click", () => {
  right_main.style.backgroundColor = "purple";
  suggestContainer.style.display = "block";
  searchInput.style.backgroundColor = "purple";
});
