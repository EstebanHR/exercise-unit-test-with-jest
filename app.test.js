test ('50 dolares debe ser al cambio 5329.17', ()=>{
    let total = convierte(50,"USD");
expect(total).toBe(5329.17)
})

test ('50 Euros debe ser al cambio 60', ()=>{
    let total = convierte(50,"EUR");
expect(total).toBe(60)
})

test ('50 Yenes debe ser al cambio 0.03', ()=>{
    let total = convierte(50,"JPY");
expect(total).toBe(0.03)
})