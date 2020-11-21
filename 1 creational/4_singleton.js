/*Одиночка — это порождающий паттерн проектирования,
который гарантирует, что у класса есть только один экземпляр,
и предоставляет к нему глобальную точку доступа.*/

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance
    }
    Database.instance = this
    Database.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
  /*мое дополнение чтобы все работало корректно
  delete(){
    console.log('Удалили, решистрируйте что-то новое')
    Database.exists = false
  }*/
}

let mongo = new Database('MongoDB')
console.log(mongo.getData())

const mysql = new Database('MySQL')
console.log(mysql.getData())