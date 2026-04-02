import connection from "../../../config/database/connection.js";

export const criarJogador = async (nome) => {
  const query = `
    INSERT INTO jogadores (nome, pontuacao)
    VALUES ($1, 0)
    RETURNING *;
  `;

  const resultado = await connection.query(query, [nome]);
  return resultado.rows[0];
};


export const atualizarPontuacao = async (id, pontos) => {
  const query = `
    UPDATE jogadores
    SET pontuacao = pontuacao + $1
    WHERE id = $2
    RETURNING *;
  `;

  const resultado = await connection.query(query, [pontos, id]);
  return resultado.rows[0];
};


export const listarJogadores = async () => {
  const resultado = await connection.query(`
    SELECT * FROM jogadores ORDER BY pontuacao DESC;
  `);

  return resultado.rows;
};