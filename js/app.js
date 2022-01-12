let navList = document.getElementById("navbarlist");
let sections = Array.from(document.querySelectorAll("section"));

function createList() {
  for (sec of sections) {
    list = document.createElement("li");
    list.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu_1ink">${sec.dataset.nav}</a></li>`;
    navList.appendChild(list);
  }
}
createList();

onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};


navList.addEventListener("click", (scrol) => {
  scrol.preventDefault();
  if (scrol.target.dataset.nav) {
    document
      .getElementById(`${scrol.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${scrol.target.dataset.nav}`;
    }, 170);
  }
});
