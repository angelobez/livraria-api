import clienteRepository from "../repositories/cliente.repository.js";
import vendaRepository from "../repositories/venda.repository.js";

async function createCliente(cliente) {
  return await clienteRepository.insertCliente(cliente);
}

async function updateCliente(cliente) {
  return await clienteRepository.updateCliente(cliente);
}

async function deleteCliente(id) {
  const vendas = await vendaRepository.getVendaByClienteId(id);
  if (vendas.length > 0) {
    throw new Error("Não é possível excluir o produto pois ele tem vendas.");
  }
  return await clienteRepository.deleteCliente(id);
}

async function getClientes() {
  return await clienteRepository.getClientes();
}

async function getCliente(id) {
  return await clienteRepository.getCliente(id);
}

export default {
  createCliente,
  updateCliente,
  deleteCliente,
  getClientes,
  getCliente,
};
