import { expect, describe, it, beforeAll, afterAll, beforeEach } from '@jest/globals'
import { getConnection, SimpleConsoleLogger } from 'typeorm'
import  createConnection  from '../src/database/index'

import { CreateUserService } from '../src/services/CreateUserService'
import  request  from 'supertest'
import { app } from '../src/app'

describe("Authenticated", () => {
    beforeAll(async () => {
        const connection = await createConnection()

        //await connection.dropDatabase()
        
        await connection.runMigrations()
    })

    // afterAll(async () => {
    //     const connection = getConnection()

    //     await connection.dropDatabase()

    //     await connection.close()
    // })

    it("should be able to authenticate to the application", async () => {

        const user = {
            name: 'User Test',
            email: 'user-test-auth@testmail.com.br',
            password: '12345'
        }

        const response = await request(app).post('/users').send({
            name: user.name,
            email: user.email,
            password: user.password
           
        })


        const userAuthenticatedToken = await request(app).post('/login').send({
            email: user.email,
            password: user.password
        })
        
        expect(userAuthenticatedToken.body).toHaveProperty('token')
        


        // const createUserServiceTest = new CreateUserService

        // const user = { 
        //     name: "Usuario Teste",
        //     email: "jest-test@testmail.com.br",
        //     password: '12345',
        // }

        // const usuarioCriado = await createUserServiceTest.execute(user)


        // expect(usuarioCriado).toHaveProperty('id')

    
    })
})