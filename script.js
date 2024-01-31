const menuBtn = document.querySelector(".caret");
const listWraper = document.querySelector(".list-wraper");
const list = document.querySelector(".list");
let menuDown = false;
let menuShown = false;
menuBtn.addEventListener("click", () => {
    if (!menuDown) {
        listWraper.style.height = `${list.offsetHeight}px`;
        listWraper.style.zIndex = "0";
        menuBtn.style.transform = "rotate(180deg)";
    }else {
        listWraper.style.height = "0px";
        listWraper.style.zIndex = "-1";
        menuBtn.style.transform = "rotate(0deg)";
    }
    menuDown = !menuDown;
})
document.querySelector("main").addEventListener("click", (e) => {
    
    if (menuDown) {
            listWraper.style.height = "0px";
            listWraper.style.zIndex = "-1";
            menuBtn.style.transform = "rotate(0deg)";
            menuDown = false;
        }
})