// // Функція для отримання товарів з пагінацією
// async function getProducts(page = 1, limit = 6) {
//     try {
//       const response = await fetch(`http://localhost:3000/js/pagination?page=${page}&limit=${limit}`);
//       const data = await response.json();
  
//       const { products, totalPages, currentPage } = data;
  
//       // Відображення списку товарів
  
//       // Оновлення HTML-розмітки, наприклад, заміна вмісту контейнера зі списком товарів
//       const productContainer = document.querySelector('#product-container');
//       productContainer.innerHTML = '';
  
//       products.forEach((product) => {
//         // Створення HTML-коду для кожного товару
//         const productHTML = `<div>${product.name}</div>`;
//         productContainer.innerHTML += productHTML;
//       });
  
//       // Відображення посилань на сторінки
  
//       // Оновлення HTML-розмітки для посилань на сторінки, наприклад, створення кнопок або посилань
//       const paginationContainer = document.querySelector('#pagination-container');
//       paginationContainer.innerHTML = '';
  
//       for (let i = 1; i <= totalPages; i++) {
//         const isActive = i === currentPage ? 'active' : '';
//         const pageLinkHTML = `<a class="${isActive}" href="#" onclick="getProducts(${i}, ${limit})">${i}</a>`;
//         paginationContainer.innerHTML += pageLinkHTML;
//       }
//     } catch (error) {
//       console.error('Error retrieving products:', error);
//     }
//   }
  
//   // Виклик функції для отримання товарів на початку завантаження сторінки
//   getProducts();
  