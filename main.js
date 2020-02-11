let mobBtn = document.getElementById("mobBtn");
let ruEng = document.getElementById("ruEng");

function showMenu() {
    console.log("clicked");
    let menu = document.getElementById("menu");
    if (menu.style.display === "flex" && ruEng.style.display === 'inline') {
      menu.style.display = "none";
      ruEng.style.display = "none";
      mobBtn.innerHTML = ` ☰ `;
    } else {
        mobBtn.innerHTML = `&times;`
        menu.style.minHeight = "100vh";
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.alignItems = "flex-start";
        menu.style.justifyContent = "flex-start";
        menu.style.margin = "65px 0 0 25px";
        ruEng.style.display = "inline";
        ruEng.style.position = "absolute";
        ruEng.style.right = '0';
        ruEng.style.top = '80%';
        ruEng.style.transform = "rotate(90deg)";
        ruEng.style.fontWeight = "bold";
        ruEng.style.fontSize = "34px";
    }
}
mobBtn.addEventListener("click", showMenu, false);