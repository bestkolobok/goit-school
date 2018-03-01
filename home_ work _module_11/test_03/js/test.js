/*
  Написать функцию get, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить форму состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
  Name Score
  имя  кол-во очков 
  имя  кол-во очков 
*/

const getBtn = document.querySelector("#js-get");
const result = document.querySelector(".result");

getBtn.addEventListener("click", get);

/*
  @param {FormEvent} evt
*/
function get(event) {
    event.preventDefault();
    let name = '<p>Name</p>';
    let score = '<p>Score</p>';
    fetch("http://fecore.net.ua/rest/", { method: 'GET' })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            data.forEach(data => {
                let userName = data.name;
                let userScore = data.score;
                if (userName === "") { userName = "No name" };
                if (userScore === "") { userScore = "No score" };
                name += `<p>${userName}</p>`;
                score += `<p>${userScore}</p>`;
            });
            result.innerHTML = `<div style="float: left; width: 20%;">${name}</div><div style="float: left; width: 20%;">${score}</div>`;
        })
        .catch(error => {
            result.innerHTML = "WRONG USERS DATA!!!";
            console.error("Error: ", error);
        });
}