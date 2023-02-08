import Livro from "../models/livro.model.js";
import Autor from "../models/autor.model.js";

async function insertLivro(livro) {
  try {
    return await Livro.create(livro);
  } catch (err) {
    throw err;
  }
}

async function updateLivro(livro) {
  try {
    await Livro.update(livro, {
      where: {
        livroId: livro.livroId,
      },
    });
    return await getLivro(livro.livroId);
  } catch (err) {
    throw err;
  }
}

async function deleteLivro(id) {
  try {
    return await Livro.destroy({
      where: {
        livroId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getLivros() {
  try {
    return await Livro.findAll({
      include: [
        {
          model: Autor,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getLivro(id) {
  try {
    return await Livro.findByPk(id, {
      include: [
        {
          model: Autor,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getLivrosByAutorId(autorId) {
  try {
    return await Livro.findAll({
      where: {
        autorId,
      },
      include: [
        {
          model: Autor,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertLivro,
  updateLivro,
  deleteLivro,
  getLivros,
  getLivro,
  getLivrosByAutorId,
};
