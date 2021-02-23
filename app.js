// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

let convierte = (monto, moneda) =>{
    if (moneda=="USD") {
        return parseFloat(((monto/1.2)*127.9).toFixed(2))
    } else if(moneda=="EUR") {
        return parseFloat((monto*1.2).toFixed(2))
    } else if (moneda=="JPY") {
        return parseFloat((monto/127.9)* 0.8).toFixed(2)) }
          
// just a console log for ourselves.
console.log(sum(7, 3))
console.log(convierte(50, "USD"))
console.log(convierte(50, "EUR"))
console.log(convierte(50, "JPY"))
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, convierte };
