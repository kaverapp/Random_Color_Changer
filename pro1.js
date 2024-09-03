
const butt=document.querySelectorAll("#l");
const lr=document.querySelector("#lr");

const bod=document.querySelector("body");

const cpl=["blue","red","orange","yellow","purple",
"pink",
"cyan",
"magenta",
"teal",
"lime",
"brown",
"gray",
"black",
"white"]


butt.forEach(ele => {
  ele.addEventListener("click",function(){
    bod.style.backgroundColor=ele.textContent

  })


});


lr.addEventListener("click",function(){
  const ran=Math.floor(Math.random()*cpl.length)
  bod.style.backgroundColor=cpl[ran]
})

