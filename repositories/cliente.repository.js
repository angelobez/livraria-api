import Cliente from "../models/cliente.model.js";

async function insertCliente(cliente) {
  try {
    return await Cliente.create(cliente);
  } catch (err) {
    throw err;
  }
}

async function updateCliente(cliente) {
  try {
    await Cliente.update(cliente, {
      where: {
        clienteId: cliente.clienteId,
      },
    });
    return await getCliente(cliente.clienteId);
  } catch (err) {
    throw err;
  }
}

async function deleteCliente(id) {
  try {
    return await Cliente.destroy({
      where: {
        clienteId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getClientes() {
  try {
    return await Cliente.findAll({
      attributes: {
        exclude: ["senha"],
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getCliente(id) {
  try {
    return await Cliente.findByPk(id, {
      attributes: {
        exclude: ["senha"],
      },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertCliente,
  updateCliente,
  deleteCliente,
  getClientes,
  getCliente,
};
