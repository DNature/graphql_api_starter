import { model, Schema } from "mongoose";

const fileSchema = new Schema(
  {
    id: String,
    filename: String,
    mimetype: String,
    path: String,
    encoding: String,
    description: {
      type: String,
      default: ""
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User" || "Admin",
      required: true
    },
    privacy: {
      type: Boolean,
      default: true
    },
    updates: [
      {
        id: String
      }
    ]
  },
  {
    timestamps: true
  }
);

export default model("File", fileSchema);
