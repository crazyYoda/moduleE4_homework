// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только
// собственных свойств. Данная функция не должна возвращать значение.

function objOwnProp(obj){
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {       // проверяем, что свойства объекта собственные
            console.log(key);
        }
    }
}
