const inverso = (param) => {

    if (typeof param == "string"){
        return "booleano ou número esperados, mas o parâmetro é do tipo string"
    }


    return typeof param == "boolean" ? !param : Math.abs(param)
}

console.log(inverso(true))
console.log(inverso("1"))
console.log(inverso(-2000))