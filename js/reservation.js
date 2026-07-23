const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

reservationForm.addEventListener("submit", function(e){

e.preventDefault();

const name = reservationForm.querySelector("input[type='text']").value;

if(name===""){

alert("Please enter your name.");

return;

}

alert("Reservation confirmed for " + name + ".");

reservationForm.reset();

});

}