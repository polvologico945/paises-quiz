import {
    criarJogador,
    atualizarPontuacao,
    listarJogadores
} from "../repositories/jogadorRepository.js";

import { gerarPergunta, verificarResposta } from "../services/quizService.js";

export const criar = async (req, res) => {
    const {nome} = req.body;
    const jogador = await criarJogador(nome);
    res.json(jogador);
};


export const pergunta = (req, res) => {
    const pergunta = gerarPergunta();
    res.json(pergunta);
};

export const responder = async (req, res) => {
    const { jogadorId, pais, resposta} = req.body;
    const correta = verificarResposta(pais, resposta);
    if(correta){
        await atualizarPontuacao(jogadorId, 10);
    }
    res.json({
        correta
    });
};


export const ranking = async (req, res) => {
    const jogadores = await listarJogadores();
    res.json(jogadores);
};