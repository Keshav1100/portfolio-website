function toggleMenu(e){
    // console.log(e,"click")
    if(document.querySelector(".hamburger-nav-menu-links").style.display === "none"){
        document.querySelector(".hamburger-nav-menu-links").style.display = "block"

    }
    else{
        document.querySelector(".hamburger-nav-menu-links").style.display = "none"

    }
    
}

document.querySelector("#hamburger-nav .menu").addEventListener("click",toggleMenu)

console.log("started")