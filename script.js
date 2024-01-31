const menuBtn = document.querySelector(".caret");
const listWraper = document.querySelector(".list-wraper");
const listContainer = document.querySelector(".list-container");
let list = document.querySelector(".list");
let menuDown = false;
const menus = {
    main: `<ul class="list">
    <li class="list-item"  onclick="changeMenu('settings')">
        <div class="title">
            <i class="fa fa-cog" aria-hidden="true"></i>
            <p>Settings</p>
        </div>
        <i class="fa fa-caret-right negative" aria-hidden="true"></i>
    </li>
    <li class="list-item" onclick="changeMenu('samples')">
        <div class="title">
            <i class="fa fa-code" aria-hidden="true"></i>
            <p>Samples</p>
        </div>
        <i class="fa fa-caret-right negative" aria-hidden="true"></i>
    </li>
    <li class="list-item">
        <div class="title">
            <i class="fa fa-moon" aria-hidden="true"></i>
            <p>Night Mode</p>
        </div>
    </li>
</ul>`,
    settings: `<ul class="list">
    <li class="list-item" onclick="changeMenuBack('main')">
        <div class="title">
            <i class="fa fa-caret-left" aria-hidden="true"></i>
            <p>Go Back</p>
        </div>
    </li>
    <li class="list-item">
        <div class="title">
            <i class="fa fa-id-card" aria-hidden="true"></i>
            <p>Profile</p>
        </div>
    </li>
    <li class="list-item">
        <div class="title">
            <i class="fa fa-address-book" aria-hidden="true"></i>
            <p>Friends</p>
        </div>
    </li>
    <li class="list-item sign-out">
        <div class="title">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            <p>Sign Out</p>
        </div>
    </li>
</ul>`,
    samples: `<ul class="list">
    <li class="list-item" onclick="changeMenuBack('main')">
        <div class="title">
            <i class="fa fa-caret-left" aria-hidden="true"></i>
            <p>Go Back</p>
        </div>
    </li>
    <li class="list-item">
        <div class="title">
            <i class="fa fa-code" aria-hidden="true"></i>
            <p>HTML</p>
        </div>
    </li>
    <li class="list-item">
        <div class="title">
            <i class="fa fa-code" aria-hidden="true"></i>
            <p>CSS</p>
        </div>
    </li>
    <li class="list-item">
        <div class="title">
            <i class="fa fa-code" aria-hidden="true"></i>
            <p>javaScript</p>
        </div>
    </li>
    <li class="list-item">
        <div class="title">
            <i class="fa fa-code" aria-hidden="true"></i>
            <p>Code Base</p>
        </div>
    </li>
</ul>`
}
// Toggle the menu on button click
menuBtn.addEventListener("click", () => {
    if (!menuDown) {
        listWraper.style.height = `${list.offsetHeight}px`;
        listWraper.style.zIndex = "0";
        menuBtn.style.transform = "rotate(180deg)";
    }else {
        listWraper.style.height = "0px";
        listWraper.style.zIndex = "-1";
        menuBtn.style.transform = "rotate(0deg)";
        resetMenu();
    }
    menuDown = !menuDown;
})
//Close the menu when clicked outside
document.querySelector("main").addEventListener("click", (e) => {
    
    if (menuDown) {
            listWraper.style.height = "0px";
            listWraper.style.zIndex = "-1";
            menuBtn.style.transform = "rotate(0deg)";
            menuDown = false;
            resetMenu();
        }
})
//Change menus
function changeMenu(menu) {
    list.classList.add("previus");
    let toRemove = list;
    setTimeout(() => {
        listContainer.innerHTML = menus[menu];
        list = document.querySelector(".list");
        list.classList.add("next");
        listWraper.style.height = `${list.offsetHeight}px`;
    }, 120);
    setTimeout(() => {
        list.classList.remove("next");
    }, 121);
}
//Change menus in the other direction
function changeMenuBack(menu) {
    list.classList.add("next");
    let toRemove = list;
    setTimeout(() => {
        listContainer.innerHTML = menus[menu];
        list = document.querySelector(".list");
        list.classList.add("previus");
        listWraper.style.height = `${list.offsetHeight}px`;
    }, 120);
    setTimeout(() => {
        list.classList.remove("previus");
    }, 121);
}
//Reset the menu to main
function resetMenu() {
    listContainer.innerHTML = menus["main"];
     list = document.querySelector(".list");
}