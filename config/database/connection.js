import pkg from "pg";
const { Pool } = pkg;

const connection = new Pool({
    user: "postgres",
    host: "localhost",
    database: "paises_quiz",
    password: "123456",
    port: 5432,
});

export default connection;