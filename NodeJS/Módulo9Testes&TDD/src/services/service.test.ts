import * as UserService from '../services/userService'
import { Auth, authInstance } from '../model/authModel'

describe('Testing user service', ()=>{

    let email = 'teste@jest.com'
    let password = '1234'

    
    beforeAll(async ()=>{
        await Auth.sync({force: true})
    })
    

    it('should create a new user', async()=>{
        const newUser = await UserService.createUser(email, password) as authInstance
        expect(newUser).not.toBeInstanceOf(Error)
        expect(newUser).toHaveProperty('id')
        expect(newUser.email).toBe(email)
    })

    it('should not allow to create a user with existing email', async()=>{
        const newUser = await UserService.createUser(email, password)
        expect(newUser).toBeInstanceOf(Error)
    })

    it('should find a user by the email', async()=>{
        const user = await UserService.findByEmail(email) as authInstance
        expect(user.email).toBe(email)
    })
    it('should match the password from database', async()=>{
        const user = await UserService.findByEmail(email) as authInstance
        const match = UserService.matchPassword(password, user.password)
        expect(match).toBeTruthy()
    })

    it('should not match the password from database', async()=>{
        const user = await UserService.findByEmail(email) as authInstance
        const match = UserService.matchPassword('invalid', user.password)
        expect(match).toBeFalsy()
    })

    it('should get a list of users', async()=>{
        const users = await UserService.all()
        expect(users.length).toBeGreaterThanOrEqual(1)
        for(let i in users){
            expect(users[i]).toBeInstanceOf(Auth)
        }
    })

})