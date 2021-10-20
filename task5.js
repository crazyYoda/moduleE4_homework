// Переписать консольное приложение из предыдущего юнита на классы.


// родительская функция электроприборов
class ElectricalAppliance {
    constructor(name) {
        this.typeOfEquipment = 'Electrical appliance',
        this.name = name
    }
    powerOnOff(action) {
        switch (action){
            case 'on':
                return"Прибор включен";
                break;
            case 'off':
                return "Прибор выключен";
                break;
            default:
                return 'Неизвестная команда';
        }
    }
}

// класс осветительных приборов наследник папы: ElectricalAppliance)))
class LightingAppliance extends ElectricalAppliance{
    constructor(power, name) {
        super(name);
        this.power = power;
    }
    getPower(){
        return `Power is ${power}`
    }
}

// класс вычислительных приборов наследник папы: ElectricalAppliance)))
class ComputingDevices extends ElectricalAppliance{
    constructor(type, name) {
        super(name);
        this.type = type;
    }
    getType(){
        return`Type of device is ${this.type}`
    }
}

// создаём экземпляры электроприборов
const lamp = new LightingAppliance(220,'night lamp');
const pc = new ComputingDevices('computer', 'IBM');

// включаем лампу
console.log(lamp.powerOnOff('on'));

// проверяем тип вычислительной техники (своя собственная))) функция)
console.log(pc.getType());

// является ли lamp экземпляром ElectricalAppliance   - true
console.log(lamp instanceof ElectricalAppliance)