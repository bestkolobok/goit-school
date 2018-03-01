/*
API // CRUD
http://fecore.net.ua/rest/?action=4 
http://fecore.net.ua/rest/?action=3&id=1 - удаление
http://fecore.net.ua/rest/?action=2&id=1&name=Hey1&score=13 -изменение
http://fecore.net.ua/rest/?action=1&name=Mark&score=100  - добавление
http://fecore.net.ua/rest/

  Написать функцию post, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает post запрос с именем введенным в input.
  
  Результатом fetch будет ответ от сервера со статусом
  операции записи, вывести ОК или ERROR в поле result.
*/
const input = document.querySelector("input");
const postBtn = document.querySelector("#js-post");
const result = document.querySelector(".result");

postBtn.addEventListener("click", post);

/*
  @param {FormEvent} evt
*/
function post(event) {
    event.preventDefault();
    const inputData = input.value;
    input.value = "";
    fetch(`http://fecore.net.ua/rest/?action=1&name=${inputData}&score=100`, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if (data[0].mysql === "ok!") {
                result.innerHTML = "OK!";
            } else {
                result.innerHTML = "Error!";
            }
        })
        .catch(error => {
            console.error("Error: ", error);
            result.innerHTML = "Error!";
        });
}