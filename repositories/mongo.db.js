import mongoose from "mongoose";

async function connect() {
  const uri =
    "mongodb+srv://root:igti@cluster0.bbm4ijc.mongodb.net/?retryWrites=true&w=majority";
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };
