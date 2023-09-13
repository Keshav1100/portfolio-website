function toggleMenu(e) {
  if (
    document.querySelector(".hamburger-nav-menu-links").style.display === 'flex'
  ) {
    document.querySelector(".hamburger-nav-menu-links").style.display = "none";
  } else {
    document.querySelector(".hamburger-nav-menu-links").style.display = "flex";
  }
}

document
  .querySelector("#hamburger-nav .menu")
  .addEventListener("click", toggleMenu);

console.log("started");
