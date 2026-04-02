import app from "./app/app.js";
import connection from "../config/database/connection.js";

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

connection.query("SELECT NOW()", (erro, resultado) => {
    if (erro) {
        console.error("Erro ao conectar ao banco de dados:", err);
    } else {
        console.log("Conexão com o banco de dados bem-sucedida:", resultado.rows);
    }
});