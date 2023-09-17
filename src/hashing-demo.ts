import { password } from 'bun';
const plainText = 'z7axzKQm7UC2d9b';

// hashing with the 'argon2' algorithm (the default hashing algorithm for Bun.password())
const argonHash = await password.hash(plainText);
const isMatch = await password.verify(plainText, argonHash);

console.log(`
Plain Text: ${plainText}
Argon Hash: ${argonHash}
Match: ${isMatch}
`);

// hashing with the 'bcrypt' algorithm
const bcryptHash = await password.hash(plainText, 'bcrypt');
const isMatch2 = await password.verify(plainText, bcryptHash);

console.log(`
Plain Text: ${plainText}
Bcrypt Hash: ${bcryptHash}
Match: ${isMatch2}
`);
