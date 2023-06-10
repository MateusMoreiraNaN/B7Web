import req from 'supertest'
import app from '../app'
import { Auth } from '../model/authModel'

describe('Testing api routes',()=>{

    let email = 'teste@jest.com'
    let password = '1234'
    
    beforeAll(async ()=>{
        await Auth.sync({force: true})
    })
    

    it('should register a new user',(done)=>{
        req(app)
            .post('/register')
            .send(`email=${email}&password=${password}`)
            .then(res => {
                expect(res.body.error).toBeUndefined()
                expect(res.body).toHaveProperty('id')
                return done()
            })
    })

    it('should not allow to register with existing email',(done)=>{
        req(app)
            .post('/register')
            .send(`email=${email}&password=${password}`)
            .then(res => {
                expect(res.body.error).not.toBeUndefined()
                
                return done()
            })
    })

    
    it('should not allow to register without password',(done)=>{
        req(app)
            .post('/register')
            .send(`email=${email}`)
            .then(res => {
                expect(res.body.error).not.toBeUndefined()
                
                return done()
            })
    })

    it('should not allow to register without email',(done)=>{
        req(app)
            .post('/register')
            .send(`password=${password}`)
            .then(res => {
                expect(res.body.error).not.toBeUndefined()
                
                return done()
            })
    })

    it('should not allow to register without any data',(done)=>{
        req(app)
            .post('/register')
            .send(``)
            .then(res => {
                expect(res.body.error).not.toBeUndefined()
                
                return done()
            })
    })

    it('should login correctly',(done)=>{
        req(app)
            .post('/login')
            .send(`email=${email}&password=${password}`)
            .then(res => {
                expect(res.body.error).toBeUndefined()
                expect(res.body.status).toBeTruthy()
                return done()
            })
    })

    it('should not login with incorrect data',(done)=>{
        req(app)
            .post('/login')
            .send(`email=${email}&password=invalid`)
            .then(res => {
                expect(res.body.error).toBeUndefined()
                expect(res.body.status).toBeFalsy()
                return done()
            })
    })

    it('should list users',(done)=>{
        req(app)
            .get('/list')
            .then(res => {
                expect(res.body.error).toBeUndefined()
                expect(res.body.list.length).toBeGreaterThanOrEqual(1)
                expect(res.body.list).toContain(email)
                return done()
            })
    })

    
})