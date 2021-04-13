var loader = document.querySelector('.loader')
var portfolio = document.querySelector('.portfolio')
portfolio.style.display = "none"


window.addEventListener("click", function() {
    loader.style.animation = "hideOpacity 1s ease-in-out"
    setInterval(function() {
        loader.style.display = "none"
        portfolio.style.display = "flex"
    },1000)
})
window.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      loader.style.display = "none"
      portfolio.style.display = "flex"
    }
});


var sidebar = document.querySelector('.sidebar')
var opensidebar = document.querySelector('.opensidebar')

opensidebar.addEventListener("click", function() {
    sidebar.classList.toggle('active_sidebar')
    if (sidebar.classList.contains('active_sidebar')) {
        opensidebar.style.transform = "rotate(0deg)"
    } else {
        opensidebar.style.transform = "rotate(45deg)"
    }
})



var sidebar_option = document.querySelectorAll('.sidebar_option')

sidebar_option.forEach(option => {
    option.addEventListener('click', function() {
        sidebar.classList.remove('active_sidebar')
    })
});

var service_service = document.querySelectorAll('.service_service')
var service_title = document.querySelectorAll('.service_title')
var service_description = document.querySelectorAll('.service_description')
// active_title
// active_description
service_service.forEach((service, index) => {
    service.addEventListener("mouseenter", function() {
        console.log(service_title[index], service_description[index])
        service_title[index].style.bottom = "150px"
        service_description[index].style.visibility = "visible"
        service_description[index].style.top = "110px"
        service_description[index].style.transition = "1s"
    })
    service.addEventListener("mouseleave", function() {
        service_title[index].style.bottom = "80px"
        service_description[index].style.visibility = "hidden"
        service_description[index].style.top = "150px"
        service_description[index].style.transition = "0s"
    })
});


// var work_work = document.querySelectorAll('.work_work')
// var work_description = document.querySelectorAll('.work_description')

// work_work.forEach((img, index) => {
//     img.addEventListener('mouseenter', function(){
//         work_description[index].style.visibility = "visible"
//     })
//     img.addEventListener('mouseleave', function(){
//         work_description[index].style.visibility = "hidden"
//     })
// });
