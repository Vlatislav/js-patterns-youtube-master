/*Посредник — это поведенческий паттерн проектирования,
который позволяет уменьшить связанность множества классов между собой,
благодаря перемещению этих связей в один класс-посредник.*/

class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(message, to) {
    this.room.send(message, this, to) //message, from=this,to
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this  //это связка медиатора
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from)
    } else {  //отправим всем кроме себя
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const vlad = new User('Vladilen')
const lena = new User('Elena')
const igor = new User('Igor')

const room = new ChatRoom()

room.register(vlad)
room.register(lena)
room.register(igor)

vlad.send('Hello!', lena)
lena.send('Hello hello!', vlad)
igor.send('Vsem privet')
