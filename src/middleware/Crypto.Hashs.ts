import crypto, { Cipher } from "crypto";

interface EncryptData {
  hash: string;
  key: Buffer;
};

function encryptData(text: any): EncryptData {
  const key: Buffer = crypto.scryptSync("notfound", "salt", 32);

  const hash: Cipher = crypto.createCipheriv(
    "aes-256-gcm",
    key,
    Buffer.from("don_chupa")
  );

  let hashEncode: string = hash.update(text, "utf8", "hex");
  hashEncode += hash.final("hex");

  return { 
    hashEncode, 
    key 
  };
}

function unencryptData(info: any): string {
  const key: Buffer = crypto.scryptSync("notfound", "salt", 32);
  const decipher: Cipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from("don_chupa")
  );
  let hashEncode: string = decipher.update(info, "hex", "utf8");

  return hashEncode;
}

export { encryptData, unencryptData };
