
const { Pool } = require('pg');
//normally you dont want to push your db to your github so people cant see the access link,
//so you create a new file that you don't push to it
//save env file (const url = process.env.PG_URI, where the file is .env) -> put in .gitignore- store API keys, client secrets inside this file as well
//you can also start your repo on github and it will automatically create a .env with everything you want to ignore
const PG_URI = "postgres://bansvqnx:6KGcYGn_LcK0yRQs04ZKBwzD5ZiEVlVf@salt.db.elephantsql.com:5432/bansvqnx";

// const createTables = () => {
//   const queryText = 
//   `CREATE TABLE IF NOT EXISTS
//   users(
//     firstname VARCHAR NOT NULL,
//     lastname VARCHAR NOT NULL,
//     username VARCHAR NOT NULL UNIQUE,
//     password VARCHAR NOT NULL,
//     credit_card INTEGER NOT NULL,
//     CONSTRAINT users_pk PRIMARY KEY (firstname)
//   )
//   `
// }

const pool = new Pool({
    connectionString: PG_URI
});


module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
};

//you could build the table from here if you wanted to
//require this into a controller