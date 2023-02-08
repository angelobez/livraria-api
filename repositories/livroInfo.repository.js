import LivroInfoSchema from "../schemas/livroInfo.schema.js";
import { connect } from "./mongo.db.js";

async function createLivroInfo(livroInfo) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("livroInfo", LivroInfoSchema);
    livroInfo = new LivroInfo(livroInfo);
    await livroInfo.save();
  } catch (err) {
    throw err;
  }
}

async function updateLivroInfo(productInfo) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("livroInfo", LivroInfoSchema);
    await LivroInfo.findOneAndUpdate(
      { productId: productInfo.productId },
      productInfo
    );
  } catch (err) {
    throw err;
  }
}

export default {
  createLivroInfo,
  updateLivroInfo,
};
