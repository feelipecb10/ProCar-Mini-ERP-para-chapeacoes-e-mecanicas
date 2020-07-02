const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const idUsuario = request.headers.autorizacao;

        const orcamento = await connection ('orcamento')
        .where('idUsuario', idUsuario)
        .select('*');

        return response.json(orcamento);
},

async create(request, response) {
    let { valor, data_pedido, idProduto, idCliente } = request.body;
    const idUsuario = request.headers.autorizacao;

    const x = await connection('produto')
    .where('idProduto', idProduto)
    .select('valor')
    .first();

    const y = parseFloat(x.valor);
    const i = parseFloat(valor);

    const a = y + i;
    valor = a;

    const [idOrcamento] = await connection('orcamento').insert({
        valor,
        data_pedido,
        idProduto,
        idCliente,
        idUsuario
    });
    return response.json({idOrcamento});
},

async delete(request, response) {
    const {idOrcamento} = request.params;
    const idUsuario = request.headers.autorizacao;

    const orcamento = await connection('orcamento')
    .where('idOrcamento', idOrcamento)
    .select('idUsuario')
    .first();

    if (orcamento.idUsuario != idUsuario){
        return response.status(401).json({error: 'Operação não permitida'});
    }

    await connection('orcamento').where('idOrcamento', idOrcamento).delete();

    return response.status(204).send();
    }
};