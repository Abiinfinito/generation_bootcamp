const {average} = require('../para_probar');

describe('average',() => {
    /* test('ingresar un valor', ()=>{
        const resultado = average([1]);

        expect(resultado).toBe(1);
    }) */
    test('ingresar un valor', ()=>{
        expect(average ([1])).toBe(1);
    })

    test('usando múltiples valores', ()=>{
        expect(average ([1, 2, 3, 4, 5, 6])).toBe(3.5);
    })

    //test para probar un valor undefined
    test('average usando undefined', ()=>{
        expect(average ()).toBeUndefined();
    })
})