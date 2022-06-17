let string2 = localStorage.getItem("textvalue")
// jquery 
$('#container').qrcode({
    "render": "div",
    "width": 300,
    "height": 300,
    "color": "#3a3",
    "text": `${string2}`
  });


const bntdownload = document.querySelector('bntdownload'),
      bntDone = document.querySelector('.bntDone');

bntdownload.addEventListener("click", () => {
      
})

bntDone.addEventListener("click", () => {
      
})

