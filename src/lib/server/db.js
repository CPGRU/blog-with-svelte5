import { PGSQL_PASSWORD,PGSQL_HOST,PGSQL_PORT,PGSQL_DATABASE,PGSQL_USER } from "$env/static/private";
import pkg from "pg";

const { Pool } = pkg;

export default new Pool ({
    user: PGSQL_USER,
    password: PGSQL_PASSWORD,
    host: PGSQL_HOST,
    port: PGSQL_PORT,
    database: PGSQL_DATABASE,
})