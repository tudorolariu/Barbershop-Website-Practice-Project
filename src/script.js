// Menu

let menu = document.getElementById("menu")
let menuButton = document.getElementById("menuButton")
let menuLogo = document.getElementById("menuLogo")

menu.style.right = "-250px"

menuButton.onclick = function(){
    if(menu.style.right == "-250px"){
        menu.style.right = "0"
        menuLogo.src = "/media/close.png"
    }
    else{
        menu.style.right = "-250px"
        menuLogo.src = "/media/menu.png"
    }
}

// Appointments alert

let bannerAppointmentsButton = document.getElementById("bannerAppointmentsButton")
let menuAppointmentsButton = document.getElementById("menuAppointmentsButton")
let appointmentsAlertInitial = document.getElementsByClassName("appointmentsAlert")
let appointmentsAlertShown = document.getElementsByClassName("appointmentsAlert shown")
let appointmentsAlertHidden = document.getElementsByClassName("appointmentsAlert hidden")
let appointmentsAlertCloseButton = document.getElementById("appointmentsAlertCloseButton")

function AppointmentsAlertHide(){
    appointmentsAlertShown[0].className = "appointmentsAlert hidden"
}

function AppointmentsAlertShow(){
    appointmentsAlertInitial[0].className = "appointmentsAlert shown"
    setTimeout(()=>{
        appointmentsAlertInitial[0].className = "appointmentsAlert hidden"
    }, 10000);
}

bannerAppointmentsButton.addEventListener("click", AppointmentsAlertShow)
menuAppointmentsButton.addEventListener("click", AppointmentsAlertShow)
appointmentsAlertCloseButton.addEventListener("click", AppointmentsAlertHide)

// Smooth scroll

let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});