const suggestList = document.querySelectorAll(".suggest__item");

const leftSuggestList = document.querySelectorAll(
  "div.search__left__suggest > div.suggest__item"
);

const rightSuggestList = document.querySelectorAll(
  "div.search__right__suggest > div.suggest__item"
);

const leftSuggest = document.querySelector(".search__left__suggest");
const rightSuggest = document.querySelector(".search__right__suggest");

const searchInput = document.querySelectorAll(".search__input");

const leftResultService = document.querySelector(
  "div.Noti__result__left > span:nth-child(1)"
);

const rightResultService = document.querySelector(
  "div.Noti__result__right > span:nth-child(1)"
);

const leftResultDetail = document.querySelector(
  "div.Noti__result__left > span:nth-child(2)"
);

const rightResultDetail = document.querySelector(
  "div.Noti__result__right > span:nth-child(2)"
);

const rightSearch = document.querySelector(".Noti__search__right");

const searchButton = document.querySelector(".search__button");

const leftInput = document.querySelector(".input__left");
const rightInput = document.querySelector(".input__right");

const successModal = document.querySelector("#success__modal");
// search

const Inputfilter = (e) => {
  let inputValue = e.target.value;
  let suggestList =
    e.target.classList[1] == "input__left" ? leftSuggestList : rightSuggestList;

  suggestList.forEach((elem) => {
    elem.style.display =
      elem.innerHTML.toUpperCase().indexOf(inputValue) > -1 ? "flex" : "none";
  });
};

searchInput.forEach((input) => input.addEventListener("keyup", Inputfilter));

// Show and Hide

const showSuggest = (e) => {
  let suggestList =
    e.target.classList[1] == "input__left" ? leftSuggest : rightSuggest;
  if (suggestList == leftSuggest) {
    leftInput.style.backgroundColor = "white";
  } else {
    rightInput.style.backgroundColor = "white";
  }
  suggestList.style.display = "block";
};

searchInput.forEach((input) => input.addEventListener("click", showSuggest));

const hideSuggest = (e) => {
  createResult(
    (img = e.target.dataset.img),
    (text = e.target.children[1].dataset.name),
    (className = e.target.parentNode.className)
  );

  let suggestList =
    e.target.parentNode.classList[0] == "search__left__suggest"
      ? leftSuggest
      : rightSuggest;

  //change the placeholder and background Color when the item is clicked
  if (suggestList == leftSuggest) {
    leftInput.placeholder = e.target.children[1].dataset.name;
    leftInput.style.backgroundColor = "lightgray";
  } else {
    rightInput.placeholder = e.target.children[1].dataset.name;
    rightInput.style.backgroundColor = "lightgray";
  }
  //show right side of input when left's item is clicked
  rightSearch.style.display = "flex";

  suggestList.style.display = "none";
};

suggestList.forEach((item) => item.addEventListener("click", hideSuggest));

// create result

const createResult = (img, text, className) => {
  resultService =
    className == "search__left__suggest"
      ? leftResultService
      : rightResultService;

  resultDetail =
    className == "search__left__suggest" ? leftResultDetail : rightResultDetail;

  resultService.innerHTML = `<img src="${img}">`;
  resultDetail.innerHTML =
    resultDetail == leftResultDetail
      ? `<p>${text} 의</p> `
      : `<p>${text}(을/를) 받겠습니다.</p> `;
  //show button when all params is clicked
  searchButton.style.display = rightResultDetail.innerHTML ? "block" : "none";
};

searchButton.addEventListener("click", () => {
  successModal.style.display = "block";
});
