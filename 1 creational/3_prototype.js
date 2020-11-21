/*Прототип — это порождающий паттерн проектирования,
который позволяет копировать объекты, не вдаваясь в подробности их реализации.*/

const car = {
  wheels: 4,

  init() {
    console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Дмитрий'
  }
})

//не прототип но так можно сделать объект на основе другого
//const newObj = Object.assign({},car,{owner: 'Vlad'})
//newObj.init();

console.log(carWithOwner.__proto__ === car)

carWithOwner.init()

