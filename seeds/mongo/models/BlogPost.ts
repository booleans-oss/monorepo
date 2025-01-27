import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "blogPost";

const schema = new Schema(
  {
    author: String,
    datePublished: String,
    title: String,
    slug: String,
    markdown: String,
  },
  { minimize: false }
);

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;
