// function addToCart() {
//     let cartBody = document.querySelector('modal-body-cart');
//     cartBody.innerHTML = '';

//     let infoOfProductInCartBody = `<table class="table">

//     <thead>
//         <tr>
//             <th scope="col">#</th>
//             <th scope="col"></th>
//             <th>Виробник/Модель</th>
//             <th scope="col">Тип (Wi Мережева карта GbE)</th>
//             <th scope="col">Максимальна швидкість з'єднання, Мбіт/с</th>
//             <th scope="col">Розміри, мм</th>
//         </tr>
//     </thead>

//     <tbody>
//         <tr>
//             <th scope="row"><input type="checkbox">1</th>
//             <td><img src="images/router2.jpg" alt=""></td>
//             <td>${product.name}</td>
//             <td> ${product.typeConnect}</td>
//             <td>${product.maxSpeed}</td>
//             <td>${product.productSize}</td>
//         </tr>

//     </tbody>
// </table>`


//     // cartBody.innerHTML += infoOfProductInCartBody;
// }

function addToCart(productId) {
    const product = getProductById(productId);
    if (product) {
        const cartBody = document.querySelector('.modal-body-cart');

        // Створення рядка таблиці для товару
        const cartTableRow = document.createElement('tr');
        cartTableRow.innerHTML = `
            <th scope="row"><input type="checkbox"></th>
            <td><img src="images/router2.jpg" alt=""></td>
            <td>${product.name}</td>
            <td>${product.typeConnect}</td>
            <td>${product.maxSpeed}</td>
            <td>${product.productSize}</td>
        `;

        // Додавання рядка до таблиці корзини
        const cartTableBody = cartBody.querySelector('tbody');
        cartTableBody.appendChild(cartTableRow);
    }
}