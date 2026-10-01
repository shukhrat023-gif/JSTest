let input = prompt("Введите число");
let number = Number(input);
if (isNaN(number)|| input === null|| input.trim() === "") {
    alert("Ошибка: Вы ввели не число!")
} else {
let result = number ** 2;
alert("Число в квадрате:" + result)
}
