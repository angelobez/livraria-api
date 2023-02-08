import Venda from "../models/venda.model.js";
import Cliente from "../models/cliente.model.js";
import Livro from "../models/livro.model.js";
import Autor from "../models/autor.model.js";

async function insertVenda(venda) {
  try {
    return await Venda.create(venda);
  } catch (err) {
    throw err;
  }
}

async function updateVenda(venda) {
  try {
    await Venda.update(venda, {
      where: {
        vendaId: venda.vendaId,
      },
    });
    return await getVenda(venda.vendaId);
  } catch (err) {
    throw err;
  }
}

async function deleteVenda(id) {
  try {
    return await Venda.destroy({
      where: {
        vendaId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getVendas() {
  try {
    return await Venda.findAll({
      include: [
        {
          model: Cliente,
        },
        {
          model: Livro,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getVenda(id) {
  try {
    return await Venda.findByPk(id, {
      include: [
        {
          model: Cliente,
        },
        {
          model: Livro,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}
async function getVendaByClienteId(clienteId) {
  try {
    return await Venda.findAll({
      where: {
        clienteId,
      },
      include: [
        {
          model: Cliente,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getVendaByLivroId(livroId) {
  try {
    return await Venda.findAll({
      where: {
        livroId,
      },
      include: [
        {
          model: Livro,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getVendaByAutorId(autorId) {
  try {
    return await Venda.findAll({
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
  insertVenda,
  updateVenda,
  deleteVenda,
  getVendas,
  getVenda,
  getVendaByClienteId,
  getVendaByLivroId,
  getVendaByAutorId,
};
