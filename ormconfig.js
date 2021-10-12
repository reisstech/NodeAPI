module.exports = {

    "type": "postgres",
    "url": process.env.DATABASE_URL,
    // "host": "",
    // "port": 5432,
    // "username": "",
    // "password": "",
    // "database": "",

    "migrations": process.env.NODE_DBENV === 'local' ? ["src/database/migrations/*.ts"] : ["dist/src/database/migrations/*.ts"],
    "entities": process.env.NODE_DBENV === 'local' ? ["src/entities/*.ts"] : ["dist/src/entities/*.js"],


    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/entities"
    }
}

 
