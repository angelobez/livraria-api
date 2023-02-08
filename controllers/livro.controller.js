import livroService from "../services/livro.service.js";

async function createLivro(req, res, next) {
  try {
    let livro = req.body;
    if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId) {
      throw new Error("Nome, valor, estoque e autor ID são obrigatórios");
    }

    res.send(await livroService.createLivro(livro));
    logger.info(`POST /livro - ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

async function updateLivro(req, res, next) {
  try {
    let livro = req.body;
    if (
      !livro.nome ||
      !livro.valor ||
      !livro.estoque ||
      !livro.autorId ||
      !livro.livroId
    ) {
      throw new Error("Livro ID, valor, estoque e autor ID são obrigatórios");
    }
    livro = await livroService.updateLivro(livro);
    res.send(livro);
    logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteLivro(req, res, next) {
  try {
    await livroService.deleteLivro(req.params.id);
    res.send("");
    logger.info(`DELETE /livro`);
  } catch (err) {
    next(err);
  }
}

async function getLivros(req, res, next) {
  try {
    res.send(await livroService.getLivros());
    logger.info(`GET /livro `);
  } catch (err) {
    next(err);
  }
}

async function getLivro(req, res, next) {
  try {
    res.send(await livroService.getLivro(req.params.id));
    res.end();
    logger.info(`GET /livro - clientId: ${JSON.stringify(req.params.id)}`);
  } catch (err) {
    next(err);
  }
}

async function createLivroInfo(req, res, next) {
  try {
    let livroInfo = req.body;
    if (!livroInfo.livroId) {
      throw new Error("Livro ID é obrigatório.");
    }
    await livroService.createLivroInfo(livroInfo);
    res.end();
    logger.info(`POST /livro/info - ${JSON.stringify(livroInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function updateLivroInfo(req, res, next) {
  try {
    let livroInfo = req.body;
    if (!livroInfo.livroId) {
      throw new Error("Livro ID é obrigatório.");
    }
    await livroService.updateLivroInfo(livroInfo);
    res.end();
    logger.info(`PUT /livro/info - ${JSON.stringify(livroInfo)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createLivro,
  updateLivro,
  deleteLivro,
  getLivros,
  getLivro,
  createLivroInfo,
  updateLivroInfo,
};
