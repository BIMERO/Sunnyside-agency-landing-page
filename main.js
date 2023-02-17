const menus = document.querySelector(".menu");

function toggleNavbar(navBarState = false) {
  if (navBarState) {
    menus.style.display = "block";
  } else {
    menus.style.display = "none";
  }
}

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menus.classList.toggle("active");
  })
);

//# toggle implementation

// declare callback
document.querySelector(".hamburger").addEventListener("click", (evt) => {
  const menus = document.querySelector(".menu");
  const isOpen = menus.style.display === "block";
  if (isOpen) {
    menus.style.display = "none";
  } else {
    menus.style.display = "block";
  }
});
// check if call has occured

// perform  actiion based on feeback

// close feeback
