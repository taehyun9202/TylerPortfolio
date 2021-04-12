// var home = document.querySelector('.home')
// var portfolio = document.querySelector('.portfolio')
// console.log(home, portfolio)
// portfolio.style.display = "none"


// home.addEventListener("click", function() {
//     home.style.animation = "hideOpacity 1s ease-in-out"
//     setInterval(function() {
//         home.style.display = "none"
//         portfolio.style.display = "flex"
//     },1000)
// })
// window.addEventListener("keyup", function(event) {
//     // Number 13 is the "Enter" key on the keyboard
//     console.log("pressed")
//     if (event.keyCode === 13) {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       home.style.display = "none"
//       portfolio.style.display = "flex"
//     }
// });


var sidebar = document.querySelector('.sidebar')
var opensidebar = document.querySelector('.opensidebar')

console.log(window.innerWidth)
opensidebar.addEventListener("click", function() {
    sidebar.classList.toggle('active_sidebar')
})

