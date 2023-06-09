import req from 'supertest'
import app from '../app'
import { Auth } from '../model/authModel'

describe('Testing api routes',()=>{

    let email = 'teste@jest.com'
    let password = '1234'
    
    beforeAll(async ()=>{
        await Auth.sync({force: true})
    })
    

    it.only('should register a new user',(done)=>{
        req(app)
            .post('/register')
            .send(`email=${email}&password=${password}`)
            .then(res => {
                expect(res.body.error).toBeUndefined()
                expect(res.body).toHaveProperty('id')
                return done()
            })
    })

    
})