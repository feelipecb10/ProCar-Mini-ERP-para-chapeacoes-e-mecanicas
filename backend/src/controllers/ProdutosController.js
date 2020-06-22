const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const idUsuario = request.headers.autorizacao;

        const produto = await connection ('produto')
        .where('idUsuario', idUsuario)
        .select('*');

        return response.json(produto);
},

async create(request, response) {
    const { descricao, quantidade, valor} = request.body;
    const idUsuario = request.headers.autorizacao;

    const [idProduto] = await connection('produto').insert({
        descricao,
        quantidade,
        valor,
        idUsuario
    });
    return response.json({idProduto});
},

async delete(request, response) {
    const {idProduto} = request.params;
    const idUsuario = request.headers.autorizacao;

    const produto = await connection('produto')
    .where('idProduto', idProduto)
    .select('idUsuario')
    .first();

    if (produto.idUsuario != idUsuario){
        return response.status(401).json({error: 'Operação não permitida'});
    }

    await connection('produto').where('idProduto', idProduto).delete();

    return response.status(204).send();
    }
};