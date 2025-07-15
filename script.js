<<<<<<< HEAD
// selectors

// sidebar & hambarger
let sideMenu = document.querySelector("#humbarger")
let sideBar = document.querySelector("#side-bar")
// sidebar links
let sideLinks = document.querySelectorAll(".side-links")
// html selector
let html = document.querySelector("html")
// sidebtns
let sideCta = document.querySelector("#side-cta-appoinment")
// logo on sidebar
let sideLogo = document.querySelector("#side-logo")
// logic
sideMenu.addEventListener("click" , () =>{

    // applying classes to humbarger and sidebar
    sideMenu.classList.toggle("activeX")
    sideBar.classList.toggle("active")

    // conditional rendering for sidebar
    if(sideBar.classList.contains("active")){

       // time out for links animation    
       setTimeout(() => {
       sideLinks.forEach(link => {
        link.classList.toggle("appear")
       })
       } ,1000)
       // settime out for cta and logo to run after links show up and get bit a different animation
        setTimeout(() => {
            sideCta.classList.toggle("bump")
            sideLogo.classList.toggle("bump")
        } , 1100)
        // closing side bar and removing animation on any link in sidebar
       sideLinks.forEach(link => {
        link.addEventListener("click" , () => {
           sideBar.classList.remove("active")
           sideMenu.classList.remove("activeX")
           sideCta.classList.remove("bump")
           sideLogo.classList.remove("bump")
           sideLinks.forEach(link => {
            link.classList.remove("appear")
           })
        })
       })
       sideCta.addEventListener("click" , () => {
        sideBar.classList.remove("active")
        sideMenu.classList.remove("activeX")
        sideCta.classList.remove("bump")
        sideLogo.classList.remove("bump")
        sideLinks.forEach(link => {
            link.classList.remove("appear")
        })
       })
       sideLogo.addEventListener("click" , () => {
        sideBar.classList.remove("active")
        sideMenu.classList.remove("activeX")
        sideCta.classList.remove("bump")
        sideLogo.classList.remove("bump")
        sideLinks.forEach(link => {
            link.classList.remove("appear")
        })
       })
    }else{
        sideBar.classList.remove("active")
        sideMenu.classList.remove("activeX")
        sideCta.classList.remove("bump")
        sideLogo.classList.remove("bump")
        sideLinks.forEach(link => {
            link.classList.remove("appear")
        })
    }
=======
// selectors

// sidebar & hambarger
let sideMenu = document.querySelector("#humbarger")
let sideBar = document.querySelector("#side-bar")
// sidebar links
let sideLinks = document.querySelectorAll(".side-links")
// html selector
let html = document.querySelector("html")
// sidebtns
let sideCta = document.querySelector("#side-cta-appoinment")
// logo on sidebar
let sideLogo = document.querySelector("#side-logo")
// logic
sideMenu.addEventListener("click" , () =>{

    // applying classes to humbarger and sidebar
    sideMenu.classList.toggle("activeX")
    sideBar.classList.toggle("active")

    // conditional rendering for sidebar
    if(sideBar.classList.contains("active")){

       // time out for links animation    
       setTimeout(() => {
       sideLinks.forEach(link => {
        link.classList.toggle("appear")
       })
       } ,1000)
       // settime out for cta and logo to run after links show up and get bit a different animation
        setTimeout(() => {
            sideCta.classList.toggle("bump")
            sideLogo.classList.toggle("bump")
        } , 1100)
        // closing side bar and removing animation on any link in sidebar
       sideLinks.forEach(link => {
        link.addEventListener("click" , () => {
           sideBar.classList.remove("active")
           sideMenu.classList.remove("activeX")
           sideCta.classList.remove("bump")
           sideLogo.classList.remove("bump")
           sideLinks.forEach(link => {
            link.classList.remove("appear")
           })
        })
       })
       sideCta.addEventListener("click" , () => {
        sideBar.classList.remove("active")
        sideMenu.classList.remove("activeX")
        sideCta.classList.remove("bump")
        sideLogo.classList.remove("bump")
        sideLinks.forEach(link => {
            link.classList.remove("appear")
        })
       })
       sideLogo.addEventListener("click" , () => {
        sideBar.classList.remove("active")
        sideMenu.classList.remove("activeX")
        sideCta.classList.remove("bump")
        sideLogo.classList.remove("bump")
        sideLinks.forEach(link => {
            link.classList.remove("appear")
        })
       })
    }else{
        sideBar.classList.remove("active")
        sideMenu.classList.remove("activeX")
        sideCta.classList.remove("bump")
        sideLogo.classList.remove("bump")
        sideLinks.forEach(link => {
            link.classList.remove("appear")
        })
    }
>>>>>>> f8aa7b3d28410cfc8d2654686ea32676dce7d230
})