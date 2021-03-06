import { expect, describe, it, beforeAll } from '@jest/globals'
import { CreateUserService } from '../src/services/CreateUserService'
import { app } from '../src/app'
import  createConnection  from '../src/database/index'
import  request  from 'supertest'

describe("Create User", () => {
    beforeAll(async () => {
        const connection = await createConnection()

        await connection.runMigrations()
    })


    it("Should be able to create a user", async () => {
        const response = await request(app).post('/users').send({
            name: "Usuario Teste",
            email: "jest-test@testmail.com.br",
            password: '12345',
        })

        expect(response.body).toHaveProperty('id')


    })

    it("should not be able to create a user with same email", async () => {
        
        expect( async () => {

            const createUserServiceTest = new CreateUserService()
    
            const user = { 
                name: "Usuario Teste",
                email: "jest-test@testmail.com.br",
                password: '12345',
            }
    
            await createUserServiceTest.execute(user)
            await createUserServiceTest.execute(user)
        }).rejects.toBeInstanceOf(Error)
        

        
    })
})
