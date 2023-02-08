import livroRepository from "../repositories/livro.repository.js";
import vendaRepository from "../repositories/venda.repository.js";

async function createLivro(livro) {
  return await livroRepository.insertLivro(livro);
}

async function updateLivro(livro) {
  return await livroRepository.updateLivro(livro);
}

async function deleteLivro(id) {
  const vendas = await vendaRepository.getVendaByLivroId(id);
  if (vendas.length > 0) {
    throw new Error("Não é possível excluir o produto pois ele tem vendas.");
  }
  return await livroRepository.deleteLivro(id);
}

async function getLivros(autorId) {
  if (autorId) {
    return await livroRepository.getLivrosByAutorId(autorId);
  }
  return await livroRepository.getLivros();
}

async function getLivro(id) {
  return await livroRepository.getLivro(id);
}

export default {
  createLivro,
  updateLivro,
  deleteLivro,
  getLivros,
  getLivro,
};
