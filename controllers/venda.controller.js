import vendaService from "../services/venda.service.js";

async function createVenda(req, res, next) {
  try {
    let venda = req.body;
    if (!venda.valor || !venda.data || !venda.clienteId || !venda.livroId) {
      throw new Error("Valor, data, clienteId e livroId são obrigatórios");
    }

    res.send(await vendaService.createVenda(venda));
    logger.info(`POST /venda - ${JSON.stringify(venda)}`);
  } catch (err) {
    next(err);
  }
}

async function updateVenda(req, res, next) {
  try {
    let venda = req.body;
    if (
      !venda.vendaId ||
      !venda.valor ||
      !venda.data ||
      !venda.clienteId ||
      !venda.livroId
    ) {
      throw new Error("Venda ID, valor, estoque e autor ID são obrigatórios");
    }
    venda = await vendaService.updateVenda(venda);
    res.send(venda);
    logger.info(`PUT /venda - ${JSON.stringify(venda)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteVenda(req, res, next) {
  try {
    await vendaService.deleteVenda(req.params.id);
    res.send("");
    logger.info(`DELETE /venda`);
  } catch (err) {
    next(err);
  }
}

async function getVendas(req, res, next) {
  try {
    res.send(
      await vendaService.getVendas(
        req.query.clienteId,
        req.query.livroId,
        req.query.autorId
      )
    );
    logger.info(`GET /venda `);
  } catch (err) {
    next(err);
  }
}

async function getVenda(req, res, next) {
  try {
    res.send(await vendaService.getVenda(req.params.id));
    res.end();
    logger.info(`GET /venda - clientId: ${JSON.stringify(req.params.id)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createVenda,
  updateVenda,
  deleteVenda,
  getVendas,
  getVenda,
};
