/*
9.2. Задание 1

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
*/

const result = {
  list: []
};

const parser = new DOMParser();

const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list
  `;


const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentsNodes = xmlDOM.querySelectorAll("student");

studentsNodes.forEach((element) => {
  const nameNode = element.querySelector("name");
  const firstNode = element.querySelector("first");
  const secondNode = element.querySelector("second");
  const ageNode = element.querySelector("age");
  const profNode = element.querySelector("prof");
  const langAttr = nameNode.getAttribute("lang");

  const student = {
    name: `${firstNode.textContent} ${secondNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr
  };
  
  result.list.push(student);
});

console.log(result);

