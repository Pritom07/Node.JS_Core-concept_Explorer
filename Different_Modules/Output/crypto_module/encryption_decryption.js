const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encryption = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");

  return {
    Iv: iv.toString("hex"),
    encryptedMsg: encrypted,
  };
};
const plaintext = "My name is Pritom";
const ciphertext = encryption(plaintext);
const { Iv, encryptedMsg } = ciphertext;
console.log(`PlainText : ${plaintext}`);
console.log(`Encrypted message : ${encryptedMsg}`);

const decryption = (Iv, encryptedMsg) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(Iv, "hex")
  );
  let decrypted = decipher.update(encryptedMsg, "hex", "utf-8");
  decrypted += decipher.final("utf-8");

  return decrypted;
};
const plaintxtFromCipher = decryption(Iv, encryptedMsg);
console.log(`Decrypted Message : ${plaintxtFromCipher}`);
if (plaintext === plaintxtFromCipher) {
  console.log(true);
} else {
  console.log(false);
}
