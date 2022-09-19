/*
9.2. Задание 2

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.
*/

const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const people = JSON.parse(jsonString);
const peopleList = people.list;

peopleList.forEach((element) => {
  element.age = Number(element.age)
});

console.log(people);

