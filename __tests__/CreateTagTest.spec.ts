import { describe, it, expect, beforeAll, afterAll } from '@jest/globals'
import createConnection from '../src/database'
import { getConnection } from 'typeorm'
import  request from 'supertest'
import { app } from '../src/app'

describe("Create Tag", () => {
    beforeAll(async () => {
        const connection = await createConnection()
     
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = await getConnection()

        await connection.dropDatabase()
    })


    it("Admin user should be able to create a Tag", async () => {
        const user = {
            name: "Usuario Teste Create tag",
            email: "user-test-tag@testmail.com.br",
            password: '12345',
            admin: true
        }
        
        const userCreated = await request(app).post('/users').send({
            name: user.name,
            email: user.email,
            password: user.password,
            admin: user.admin
        })


        const userAuthenticatedToken = await request(app).post('/login').send({
            email: user.email,
            password: user.password
        })
    
        
        let token = userAuthenticatedToken.body
 
        token = 'Bearer ' + Object.values(token) 
       
        
        const tagCreated = await request(app).post('/tags').send({
            name: "Test Tag",
            
        }).set( 'Authorization', token )

        expect(tagCreated.body).toHaveProperty('id')

    })
})