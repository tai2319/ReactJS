

let btnSM = document.querySelector("#submit");


btnSM.addEventListener('click',function(){
    let nameVl = document.getElementById("name").value;
    if (isValidAccount(nameVl)) {
        console.log("Tài khoản hợp lệ!");
      } else {
        console.log("Tài khoản không hợp lệ!");
      }
})
function isValidAccount(nameVl) {
    // Kiểm tra không chứa ký tự đặc biệt
    if (/^[_a-z0-9]{6,}$/.test(nameVl)) {
      return true;
    }
}