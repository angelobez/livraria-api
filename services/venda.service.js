import vendaRepository from "../repositories/venda.repository.js";

async function createVenda(venda) {
  return await vendaRepository.insertVenda(venda);
}

async function updateVenda(venda) {
  return await vendaRepository.updateVenda(venda);
}

async function deleteVenda(id) {
  return await vendaRepository.deleteVenda(id);
}

async function getVendas(clienteId, livroId, autorId) {
  if (clienteId) {
    return await vendaRepository.getVendaByClienteId(clienteId);
  }
  if (livroId) {
    return await vendaRepository.getVendaByLivroId(livroId);
  }
  if (autorId) {
    return await vendaRepository.getVendaByAutorId(autorId);
  }
  return await vendaRepository.getVendas();
}

async function getVenda(id) {
  return await vendaRepository.getVenda(id);
}

export default {
  createVenda,
  updateVenda,
  deleteVenda,
  getVendas,
  getVenda,
};
