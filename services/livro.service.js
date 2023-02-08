import livroRepository from "../repositories/livro.repository.js";
import vendaRepository from "../repositories/venda.repository.js";
import livroInfoRepository from "../repositories/livroInfo.repository.js";

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

async function createLivroInfo(livroInfo) {
  await livroInfoRepository.createLivroInfo(livroInfo);
}

async function updateLivroInfo(productInfo) {
  await livroInfoRepository.updateLivroInfo(productInfo);
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
