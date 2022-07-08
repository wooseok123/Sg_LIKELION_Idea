// const Select = document.getElementsByClassName("select_Noti");
const left = document.getElementsByClassName("left_Noti")[0];
const right = document.getElementsByClassName("right_Noti")[0];
const All = document.getElementsByClassName("All_Noti")[0];
const Save = document.getElementsByClassName("Save_Noti")[0];
const nonclick = document.querySelectorAll(".non-click");

const chooseNoti = (e) => {
    if (e.target.style.backgroundColor != "orange"){
        if (e.target.classList == "left_Noti"){
            left.style.backgroundColor = "orange";
            left.style.color = "black";
            right.style.backgroundColor = "white";
            right.style.color = "grey";
            All.style.display = "flex";
            Save.style.display = "none";
        } else {
            left.style.backgroundColor = "white";
            left.style.color = "grey";
            right.style.backgroundColor = "orange";
            right.style.color = "black";
            All.style.display = "none";
            Save.style.display = "flex";
        }
    }
};

left.addEventListener("click", chooseNoti);
right.addEventListener("click", chooseNoti);

const handleClick = (event) => {
    if (event.target.classList.contains("non-click")){
        event.target.classList.remove("non-click");
        event.target.classList.add("clicked");
    } else {
        event.target.classList.remove("clicked");
        event.target.classList.add("non-click");
    }
};

nonclick.forEach((e) => {
    e.addEventListener("click", handleClick);
});