/*Написать приложение для работы с REST сервисом, все функции делают запрос и возвращают Promise 
с которым потом можно работать. Реализовать следующий функционал:

    функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
    функция getUserById(id) - должна вернуть пользователя с переданным id.
    функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
    функция removeUser(id) - должна удалять из БД юзера по указанному id.
    функция updateUser(id, user) - должна обновлять данные пользователя по id. user это объект с новыми 
    полями name и age.

Документацию по бэкенду и пример использования прочитайте здесь .

Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
А так же панелью для вывода результатов операций с бэкендом.*/

const getBtn = document.querySelector(".container");
const result = document.querySelector(".result");

getBtn.addEventListener("click", onclick);

function onclick(e) {
    event.preventDefault();
    // result.innerHTML = "";
    if (event.target.id === 'js-get_all') getAllUsers();
    if (event.target.id === 'js-get') {
        const id = event.target.parentNode.firstElementChild.firstElementChild.value;
        event.target.parentNode.firstElementChild.firstElementChild.value = "";
        getUserById(id);
    }
    if (event.target.id === 'js-add') {
        const name = event.target.parentNode.firstElementChild.children[0].value;
        const age = event.target.parentNode.firstElementChild.children[1].value;
        event.target.parentNode.firstElementChild.children[0].value = "";
        event.target.parentNode.firstElementChild.children[1].value = "";
        addUser(name, age);
    };
    if (event.target.id === 'js-remove') {
        const id = event.target.parentNode.firstElementChild.firstElementChild.value;
        event.target.parentNode.firstElementChild.firstElementChild.value = "";
        removeUser(id);
    }
    if (event.target.id === 'js-update') {
        const id = event.target.parentNode.firstElementChild.children[0].value;
        const user = {
            name: event.target.parentNode.firstElementChild.children[1].value,
            age: event.target.parentNode.firstElementChild.children[2].value
        }
        event.target.parentNode.firstElementChild.children[0].value = "";
        event.target.parentNode.firstElementChild.children[1].value = "";
        event.target.parentNode.firstElementChild.children[2].value = "";
        updateUser(id, user);
    }
}


function getAllUsers() {
    let id = '<p>Id</p>';
    let name = '<p>Name</p>';
    let age = '<p>Age</p>';
    fetch('https://test-users-api.herokuapp.com/users/', { method: 'GET' })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            data.data.forEach(data => {
                let userId = data.id;
                let userName = data.name;
                let userAge = data.age;
                if (userName === "") { userName = "No name" };
                if (userAge === "") { userScore = "No age" };
                id += `<p>${userId}</p>`;
                name += `<p>${userName}</p>`;
                age += `<p>${userAge}</p>`;
            });
            result.innerHTML = `
            <div>${id}</div>
            <div>${name}</div>
            <div>${age}</div>
            `;
        })
        .catch(error => {
            result.innerHTML = "WRONG USERS DATA!!!";
            console.error("Error: ", error);
        });
}

function getUserById(id) {
    let name = '<p>Name</p>';
    let age = '<p>Age</p>';
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, { method: 'GET' })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            let userName = data.data.name;
            let userAge = data.data.age;
            if (userName === "") { userName = "No name" };
            if (userAge === "") { userScore = "No age" };
            name += `<p>${userName}</p>`;
            age += `<p>${userAge}</p>`;
            result.innerHTML = `
            <div>${name}</div>
            <div>${age}</div>
            `;
        })
        .catch(error => {
            result.innerHTML = "WRONG USERS DATA!!!";
            console.error("Error: ", error);
        });
}

function addUser(name, age) {
    fetch('https://test-users-api.herokuapp.com/users', {
            method: 'POST',
            body: JSON.stringify({ name: name, age: age }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(data => {
            if (data.ok) {
                result.innerHTML = `<div>Adding a new user was successful!!!</div>`
            };
        })
        .catch(error => {
            result.innerHTML = "WRONG USERS DATA!!!";
            console.error("Error: ", error);
        });
}


function removeUser(id) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            let userName = data.data.name;
            if (userName === "") { userName = "No name" };
            result.innerHTML = `<div>User "${userName}" is remove!!!</div>`;
        })
        .catch(error => {
            result.innerHTML = "WRONG ID DATA!!!";
            console.error("Error: ", error);
        });
}

function updateUser(id, user) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(data => {
            console.log(data)
            if (data.ok) {
                result.innerHTML = `<div>Updating current user was successful!!!</div>`
            };
        })
        .catch(error => {
            result.innerHTML = "WRONG USERS DATA!!!";
            console.error("Error: ", error);
        });

}