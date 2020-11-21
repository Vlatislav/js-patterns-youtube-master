/*Состояние — это поведенческий паттерн проектирования,
который позволяет объектам менять поведение в зависимости от своего состояния.
Извне создаётся впечатление, что изменился класс объекта.*/
/*
мы можем создавать какие-то различные классы,
которые будут являться элементами стейта и мы можем делегировать
состояние этих классов на какой-то общий класс, который будет
явл стейтом и который будет менять состояние этих отдельных элементов
*/

class Light {
  constructor(light) {
    this.light = light
  }
}

class RedLight extends Light {
  constructor() {
    super('red')
  }

  sign() {
    return 'СТОП'
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow')
  }

  sign() {
    return 'ГОТОВЬСЯ'
  }
}

class GreenLight extends Light {
  constructor() {
    super('green')
  }

  sign() {
    return 'ЕДЬ!'
  }
}

class TrafficLight {
  constructor() {
    this.states = [
      new RedLight(),
      new YellowLight(),
      new GreenLight()
    ]
    this.current = this.states[0]
  }

  change() {
    const total = this.states.length
    let index = this.states.findIndex(light => light === this.current)

    if (index + 1 < total) {
      this.current = this.states[index + 1]
    } else {
      this.current = this.states[0]
    }
  }

  sign() {
    return this.current.sign()
  }
}

const traffic = new TrafficLight()
console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()
