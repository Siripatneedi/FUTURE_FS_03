const searchInput = document.getElementById("menuSearch");

const cards = document.querySelectorAll(".menu-card");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

cards.forEach(card=>{

const title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}