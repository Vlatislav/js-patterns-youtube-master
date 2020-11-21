/*Заместитель — это структурный паттерн проектирования,
который позволяет подставлять вместо реальных объектов специальные объекты-заменители.
Эти объекты перехватывают вызовы к оригинальному объекту,
позволяя сделать что-то до или после передачи вызова оригиналу.*/
/*
Ставить ловушки, на поля, на вызов функции. Гибкое приложение
Избавление от лишних запросов на сервер
*/

function networkFetch(url) {
  return `${url} - Ответ с сервера`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]
    if (cache.has(url)) {
      return `${url} - Ответ из кэша`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('angular.io'))
console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('angular.io'))
