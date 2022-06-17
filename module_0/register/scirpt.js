const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input"),
        bntDone = document.querySelector('.btnColor');
let textModal = document.querySelector('#textModal');

nextBtn.addEventListener("click", ()=> {
    let Name1 = document.querySelector('.name1').value;
    let dob = document.querySelector('.dob').value;
    let gender = document.querySelector('.gender').value;
    let address = document.querySelector('.address').value; 
    let NumberPhone = document.querySelector('.phone1').value; 
    let arr = [Name1, dob, gender, address]
    console.log(Name1)
    console.log(dob)
    console.log(gender)
    console.log(address)
    console.log(arr)
    let string1 = '';
       for (const key in arr) {
            string1 += `${arr[key]}!`    
         }
         console.log(string1)
         form.classList.add('secActive');
        textModal.innerText = `Mã xác thực được gửi đến số điện thoại ${NumberPhone}`
        localStorage.setItem("textvalue", string1)
    })
    
backBtn.addEventListener("click", () => form.classList.remove('secActive'));



bntDone.addEventListener("click", () =>{
    setTimeout(() => {
        location.replace('/indexQR.html');
    },0);
})








