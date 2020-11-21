/*Команда — это поведенческий паттерн проектирования,
который превращает запросы в объекты,
позволяя передавать их как аргументы при вызове методов, ставить запросы в очередь,
логировать их, а также поддерживать отмену операций.*/
/*
позволяет создавать абстрактную оболочку над функционалом,
который позволяет управлять, но уже через другой объект ,
управлять состояниями
 */

class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue
  }

  square() {
    return this.num ** 2
  }

  cube() {
    return this.num ** 3
  }
}

class Command {
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = []
  }

  execute(command) {
    this.commandsExecuted.push(command)
    return this.subject[command]()
  }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square'))
console.log(x.execute('cube'))

console.log(x.commandsExecuted)

