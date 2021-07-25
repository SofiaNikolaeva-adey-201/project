// Объявление переменной
// 1) var в коде до ее объявления видна
// 2) let в коде до ее объявления не видна
// 3) const поменять ее значение нельзя 

// Типы данных
// 1) Числовые
var number = 5;
console.log(4/0); // Получится бесконечность Infinity
console.log('string'*9); //Nan
// 2) Строка (разницы в ковычках нет)
var string = "Hello";
// 3) Символ
var sym = Symbol(); // представляет собой уникальный идентификатор
// 4) Логический
var boolean = true;
// 5) null - полное отсутствие в коде, ссылка на несуществующую вещь
// 6) undefined - у переменной нет значения
let something;
console.log(something);
// 7) Объект - коллекция данных, структура для хранения любых данных
var obj = {};

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

// получение данных по ключу 2 способа
console.log(persone.name);
console.log(persone["name"]);

// массив - подвид объекта
let arr = ['plum.png', 'orange.jpg', 'apple.bmp']

//получение элемента массива
console.log(arr[2]);

// вывод текста (как принт в питоне)
// alert("Hello");

// вылезет окно с вопросом с ответами ок или отмена
// let answer = confirm("Are you ok?");
// console.log(answer);

// выведет модальное окно, но с возможностью ввода ответа пользователем
// let answer = prompt("Есть 18?", "Да"); // + перед prompt превратит строку в число
// console.log(typeof(answer)); //typeof позволяет узнать тип данных

// конкатинация
console.log("Hello" + " world!");
console.log(1000 + " world!");

let incr = 10,
    decr = 10;
incr++; // увеличение на 1
decr--; // уменьшение на 1
console.log(incr);
console.log(decr);

// остаток от деления 
console.log(5%2);

// присваивание +
// сравнение ++
console.log("2" == 2);
// строгое сравнение по типам данных +++
console.log("2" === 2);

let isChecked = true,
    isClose = false;

console.log(isChecked || !isClose);