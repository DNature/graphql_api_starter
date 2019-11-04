import mongoose from "mongoose";
import { createReadStream, unlink } from "fs";
import { GridFSBucket, ObjectId } from "mongodb";

export const conn = mongoose.connection;

export async function getFileById(fileId) {
  const file = await conn.db.collection("fs.files").findOne(ObjectId(fileId));
  if (!file) throw new Error(`Failed to retrieve file with ID “${fileId}”.`);
  return file;
}

export async function storeFile({ name, type }) {
  const bucket = new GridFSBucket(conn.db);
  const uploadStream = bucket.openUploadStream(name, {
    mimetype: type
  });

  return new Promise((resolve, reject) => {
    createReadStream(name)
      .pipe(uploadStream)
      .on("error", reject)
      .on("finish", () => {
        // Delete the upload temp file
        unlink(name, () => {
          // Resolve the stored file ObjectId
          resolve(uploadStream.id);
        });
      });
  });
}
// function connect() {
//   return mongoose.connection.db, mongoose.mongo;
// }
// console.table(connect());

export default {
  Mutation: {
    async uploadFile(root, { file }) {
      try {
        const fileId = await storeFile(file);
        console.log(getFileById(fileId));
        return getFileById(fileId);
      } catch (err) {
        console.error(err);
        throw new Error(`an Error occured: ${err}`);
      }
    }
  }
};
