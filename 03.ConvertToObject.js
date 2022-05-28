function solve(JSobject){

    let obj = JSON.parse(JSobject)

    for (let key in obj) {
      console.log(`${key}: ${obj[key]}`)
}
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')