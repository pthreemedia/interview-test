const crypto = require("crypto");

function encrypt(plaintext, key, iv) {
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return {
    ciphertext: encrypted,
    authTag: cipher.getAuthTag().toString('hex')
  };
}

console.log('test');

function decrypt(ciphertext, key, iv, authTag) {
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));
  let decrypted = decipher.update(ciphertext, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Generate a random key and IV
const key = Buffer.from("qwertyuiopasdfghjklzxcvbnmqwerty", "utf-8");
// const key = crypto.randomBytes(32); // 32 bytes = 256 bits
const iv = Buffer.from("qwertyuiopas", "utf-8");
// const iv = crypto.randomBytes(12); // 12 bytes for GCM

const plaintext = 'Hello, World!';

// Encryption
const { ciphertext, authTag } = encrypt(plaintext, key, iv);
console.log('Ciphertext:', ciphertext);
console.log('Auth Tag:', authTag);

// Decryption
const decrypted = decrypt(ciphertext, key, iv, authTag);
console.log('Decrypted:', decrypted);


