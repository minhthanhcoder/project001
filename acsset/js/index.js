let product =[{
    img: './acsset/image/ao-mua-cho-be-hoa-tiet-vui-nhon__7.jpg',
    description: 'Áo Mưa Cho Bé Họa Tiết Vui Nhộn (Trên 6 tuổi)',
    price: '123.000 đ',
    id:0,
},
{
    img: './acsset/image/ao-mua-cho-be-in-tho-de-thuong__2.jpg',
    description: 'Áo Mưa Cho Bé In Thỏ Dễ Thương (Trên 6 tuổi)',
    price: '322.000 đ',
    id:1,
},
{
    img: './acsset/image/ao-thun-tay-ngan-in-gau__1.jpg',
    description: 'Bộ Short Cho Bé Trai Tay Raplang Mát Mẻ Ngày Hè (13kg-35kg)',
    price: '145.000 đ',
    id:2,
},
{
    img: './acsset/image/bo-short-cho-be-tay-raplang-mat-me.jpg',
    description: 'Bộ Short Cho Bé Trai Tay Raplang Mát Mẻ Ngày Hè (13kg-35kg)',
    price: '433.000 đ',
    id:3,
}] 
localStorage.setItem('product',JSON.stringify(product));
let flag = localStorage.getItem('flag');
let loginBtn = document.querySelector('#login')
let rigisterBtn = document.querySelector('#register')
let userName = document.querySelector('#logout')
if (flag) {
    loginBtn.style.display = 'none';
    rigisterBtn.style.display = 'none';
    flag = false;
    localStorage.setItem('flag',flag);
}
function logout() {
        document.querySelector('#login').style.display = 'block';
        document.querySelector('#register').style.display = 'block';
        document.querySelector('#logout').style.display = 'none'; 
}
console.log(flag);
// let product = JSON.parse(localStorage.getItem('product'))
if (product == null) {
    product = [];
}
function renderProduc() {
    let result = '';
    for (let i = 0; i < product.length; i++) {
        result +=
            `
    <div class="item col-sm-6 col-md-6 col-lg-3 col-xl-3">
    <img src="${product[i].img}" alt="">
    <p class="description">${product[i].description}</p>
    <p class="price">${product[i].price}</p>
    <button id="cartbtnadd" class = 'cartbtnadd' onclick="addCart(${product[i].id})" type="submit">Thêm vào giỏ hàng</button>
    <button id="likebtn" class="likebtn" onclick="like(${product[i].id})" type="submit"><i class="hearticon ti-heart"></i>Yêu thích</button>
    </div>
    `
    }
    localStorage.setItem("product", JSON.stringify(product));
    document.getElementById("bestSeller").innerHTML = result;
} renderProduc()

// Cart Section
function addCart(id) {
    let listCart = JSON.parse(localStorage.getItem('listCart'));
    if (listCart == null) {
        listCart = [];
    }
    let flag = true;
    for (let i = 0; i < listCart.length; i++) {
        if (listCart[i].id == id) {
            flag = false;
            break;
        }
    }
    if (flag == false) {
        alert('Sản phẩm đã có trong giỏ hàng');

    } else {
        listCart.push(product[id])
        let cartbtn = document.getElementsByClassName('cartbtnadd')[id];
        cartbtn.style.backgroundColor = '#ccc';
        cartbtn.style.color = 'red';
        console.log(listCart);
        localStorage.setItem('listCart', JSON.stringify(listCart));
    }

}
// like section
function like(id) {
    let likeCart = JSON.parse(localStorage.getItem('likeCart'))
    if (likeCart == null) {
        likeCart = [];
    }
    let likebtn = document.getElementsByClassName('likebtn')[id];
    likebtn.style.color = 'red';
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            likeCart.push(product[i]);
            localStorage.setItem('likeCart',JSON.stringify(likeCart))
        }
        
    }
}
// sub-nav 