import { Math } from "../libs/math";

describe('Testing Math library', ()=>{
    it('should sum two numbers correctly', ()=>{
        const res = Math.sum(5, 10)
        expect(res).toBe(15)
    })
    
    it('should reduce two numbers correctly', ()=>{
        const res = Math.sub(10, 5)
        expect(res).toBe(5)
    })
    
    it('should multiply two numbers correctly', ()=>{
        const res = Math.mut(3, 5)
        expect(res).toBe(15)
        /*
        const res2 = Math.mut(0, 3)
        expect(res2).toBe(0)
        */
    })
    
    it('should divide two numbers correctly', ()=>{
        const res = Math.div(15, 5)
        expect(res).toBe(3)
    
        const res2 = Math.div(3 ,0)
        expect(res2).toBe(false)
    })

    it('contar quantos caracterees tem na string', ()=>{
        // it.only
        const res = 'bonieky'
        expect(res).toHaveLength(7)
    })

    it('se possui a propriedade EMAIL', ()=>{
        const res = {
            name: "Mateus",
            email: 'Mateeusgodoi45@gmail.com'
        }

        expect(res).toHaveProperty('email')
    })

    it('numero', ()=>{
        const res = 20

        // maior que // toBeGreaterThanOrEqual
        expect(res).toBeGreaterThanOrEqual(15)
    })

    it('numero2', ()=>{
        const res = 20

        // menor que  //toBeLessThan
        expect(res).toBeLessThanOrEqual(50)
    })

    it('envio de email', ()=>{
        const res = 'suporte2b7email.com.br'

        // menor que  //toBeLessThan
        expect(res).toMatch(/[a-z]@[a-z].[a-z]/)
    })

    it('div por zero', ()=>{
        const res = Math.div(10, 0)

        // menor que  //toBeLessThan
        expect(res).toThrow(new Error('Não divide por zero'))
    })


})