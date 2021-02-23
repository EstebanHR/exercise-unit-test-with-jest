// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

let convert = (montoIn, monedaIn, montoOut, monedaOut) =>{

    if (monedaIn=="USD"){
        return (montoIn/1.2)*127.9
    }else if(moneda=="EUR"){
        return ()
    }
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }


// just a console log for ourselves.
console.log (sum(7,3))
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };
