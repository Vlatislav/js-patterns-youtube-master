/*Фасад — это структурный паттерн проектирования,
который предоставляет простой интерфейс к сложной системе классов,
библиотеке или фреймворку.*/
/*
Чтобы созд простой и уникальный интерфейс
для взаимодействия с различными классами
упростить взаимодействие
Пример: библиотека JQuery : querySelector('уникальное и универсальное')
*/
class Complaints {
  constructor() {
    this.complaints = []
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now()
    let complaint

    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }

    return complaint.add({id, customer, details})
  }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Vladilen', 'service', 'недоступен'))
console.log(registry.register('Elena', 'product', 'вылазит ошибка'))

