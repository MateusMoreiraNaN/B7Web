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
})