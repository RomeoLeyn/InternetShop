const loginForm = document.getElementById('log-in-form');
// const addButton = document.getElementById('add-button');
// const buttons = document.querySelectorAll('list-login-button');
// const exitButton = document.getElementById('button-exit');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    const adm = new Admin(username, password);

    if (adm.checkLoginAdm()) {
        if (adm.checkPasswordAdm()) {
            window.location.href = "main.html";
            localStorage.setItem('currentUser', JSON.stringify({ isAdmin: true }));
        }
    }
});


// document.addEventListener('DOMContentLoaded', function () {
//     const currentUser = localStorage.getItem('currentUser');

//     if (currentUser) {
//         const parsedCurrentUser = JSON.parse(currentUser);

//         if (parsedCurrentUser.isAdmin) {
//             // Користувач є адміністратором, показуємо потрібні кнопки
//             const addButton = document.querySelector('#add-button');
//             const exitButton = document.querySelector('#button-exit');

//             addButton.style.display = 'block';
//             exitButton.style.display = 'block';
//         } else {
//             // Користувач не є адміністратором, приховуємо кнопки
//             const addButton = document.querySelector('#add-button');
//             const exitButton = document.querySelector('#button-exit');

//             addButton.style.display = 'none';
//             exitButton.style.display = 'none';
//         }
//     } else {
//         // Користувач не залогінований, приховуємо кнопки
//         const addButton = document.querySelector('#add-button');
//         const exitButton = document.querySelector('#button-exit');

//         addButton.style.display = 'none';
//         exitButton.style.display = 'none';
//     }
// });


// Очищує localeStorage від логіну адміністратора та юзера 
function clearLocaleStorageForLogIn() {
    localStorage.clear();
}