require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {

    type: process.env.DB_DIALECT || "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    storage: './__tests__/database.sqlite',

    migrations: ["src/database/migrations/*.ts"],
    entities: ["src/entities/*.ts"],
    cli: {
        migrationsDir: "src/database/migrations",
        entitiesDir: "src/entities"
    }
}
 
