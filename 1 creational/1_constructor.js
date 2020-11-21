// function Server(name, ip) {
//   this.name = name
//   this.ip = ip
// }
//
// Server.prototype.getUrl = function() {
//   return `https://${this.ip}:80`
// }

class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `https://${this.ip}:80`
  }
}

const aws = new Server('AWS German', '82.21.21.32')
console.log(aws.getUrl())

// console.log([1,2,3] instanceof Array)
// console.log([1,2,3] instanceof Object)
// console.log(typeof Array)
// console.log(Array.isArray([1,2,3]))
//
//
// console.log(typeof Array,1)
// console.log(typeof [1,2,3],2)
// console.log(typeof Object,3)
// console.log(typeof {},4)
// console.log(typeof new Array(),5)
// console.log(typeof new Object(),6)
// console.log(typeof [1,2,3] == 'object','yoho')

