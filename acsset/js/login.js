
// login section
let listUser = JSON.parse(localStorage.getItem('listUser'));
if (listUser == null) {
    listUser = [];
    document.getElementById('loi').innerHTML = 'Bạn chưa đăng ký !'
}
function loginFunction() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let userError=''
    if (password === '') {
        userError += 'Hãy nhập password.<br/>'
        document.getElementById('loi').innerHTML = userError;
        return;
    } else if (password.length < 6 || password.length > 20) {
        userError += 'Password phải có độ dài từ 6-20 ký tự. <br/>';
        document.getElementById('loi').innerHTML = userError;
        return;
    }
    
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].email == email && listUser[i].password == password) {
            console.log(listUser);
            localStorage.setItem('flag',true);
            window.location.href = './index.html'
        }else {
            userError += 'Nhập mật khẩu hoặc tài khoản chưa chính xác.</br>'
        document.getElementById('loi').innerHTML = userError;
        return;
        }
        
    }
}