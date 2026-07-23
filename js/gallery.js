const images = document.querySelectorAll(".gallery-item img");

images.forEach(image=>{

image.addEventListener("click",function(){

const popup = document.createElement("div");

popup.style.position="fixed";
popup.style.left="0";
popup.style.top="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,0.9)";
popup.style.display="flex";
popup.style.justifyContent="center";
popup.style.alignItems="center";
popup.style.cursor="pointer";

const img=document.createElement("img");

img.src=this.src;
img.style.maxWidth="90%";
img.style.maxHeight="90%";
img.style.borderRadius="10px";

popup.appendChild(img);

document.body.appendChild(popup);

popup.onclick=function(){

popup.remove();

}

});

});