// Реализовать следующее консольное приложение подобно примеру, который разбирался
// в видео. Реализуйте его на прототипах. Определить иерархию электроприборов.
// Включить некоторые в розетку. Посчитать потребляемую мощность. Таких приборов должно быть,
// как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте,
// какими свойствами он обладает.


// родительская функция электроприборов
function ElectricalAppliance (name) {
    this.typeOfEquipment = 'Electrical appliance',
        this.name = name
}

// метод родительской функции включения/выключения прибора
ElectricalAppliance.prototype.powerOnOff = function(action){
    switch (action){
        case 'on':
            console.log("Прибор включен");
            break;
        case 'off':
            console.log("Прибор выключен");
            break;
        default:
            console.log('Неизвестная команда');
    }
}

// функция осветительных приборов
function LightingAppliance (name, power) {
    this.name = name,
        this.power = power,
        this.getPower = function (){
            console.log(`Power is ${power}`)
        }
}

// функция вычислительных приборов
function ComputingDevices (name, type) {
    this.name = name,
        this.type = type,
        this.getType = function (){
            console.log(`Type of device is ${type}`)
        }
}

// создаём делегирующие связи
LightingAppliance.prototype = new ElectricalAppliance();
ComputingDevices.prototype = new ElectricalAppliance();

// создаём экземпляры электроприборов
const lamp = new LightingAppliance('night lamp', 220);
const pc = new ComputingDevices('IBM', 'computer');

// включаем лампу
lamp.powerOnOff('on')

// получаем тип вычислительного прибора
pc.getType()
