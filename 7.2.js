/*Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

function user(name, str) {
    return (str in name);
  }
  const name = {
    name: 'Marina',
    lastName: 'Ivanova'
  }
  
  console.log(user(name, "name"));
  console.log(user(name, "nme"));
