import autorService from "../services/autor.service.js";

async function createAutor(req, res, next) {
  try {
    let autor = req.body;
    if (!autor.nome || !autor.email || !autor.telefone) {
      throw new Error("Nome, e-mail e telefone são obrigatórios");
    }

    res.send(await autorService.createAutor(autor));
    logger.info(`POST /autor - ${JSON.stringify(autor)}`);
  } catch (err) {
    next(err);
  }
}

async function updateAutor(req, res, next) {
  try {
    let autor = req.body;
    if (!autor.autorId || !autor.nome || !autor.email || !autor.telefone) {
      throw new Error("Autor id, nome, e-mail e telefone são obrigatórios");
    }
    autor = await autorService.updateAutor(autor);
    res.send(autor);
    logger.info(`PUT /autor - ${JSON.stringify(autor)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteAutor(req, res, next) {
  try {
    await autorService.deleteAutor(req.params.id);
    res.send("");
    logger.info(`DELETE /autor`);
  } catch (err) {
    next(err);
  }
}

async function getAutores(req, res, next) {
  try {
    res.send(await autorService.getAutores());
    logger.info(`GET /autor `);
  } catch (err) {
    next(err);
  }
}

async function getAutor(req, res, next) {
  try {
    res.send(await autorService.getAutor(req.params.id));
    res.end();
    logger.info(`GET /autor - clientId: ${JSON.stringify(req.params.id)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAutor,
  updateAutor,
  deleteAutor,
  getAutores,
  getAutor,
};
